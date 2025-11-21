import { ModelAction } from '@/shared/action.model';
import {
  BadRequestException,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CycleLog } from '../model/cycle_log.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { ICycleLog } from '@/shared/types/user-log';
import * as SYS_MSG from '@/shared/system-message';

@Injectable()
export class CycleLogsService {
  private modelAction: ModelAction<CycleLog>;

  constructor(
    @InjectRepository(CycleLog)
    private readonly cycleLogRepository: Repository<CycleLog>,
  ) {
    this.modelAction = new ModelAction(cycleLogRepository);
  }

  async createLog(data: ICycleLog, userId: string) {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const existing = await this.cycleLogRepository.findOne({
        where: {
          user: { id: userId },
          log_date: today,
        },
      });

      if (existing) {
        throw new BadRequestException(
          'You have already logged your cycle for today.',
        );
      }
      const record = await this.modelAction.create({
        ...data,
        user: { id: userId },
      });

      return {
        message: SYS_MSG.LOG_CREATED_SUCCESSFULLY,
        data: record,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async getAllLog(userId: string) {
    try {
      const records = await this.modelAction.findAll({
        user: { id: userId } as any,
      });

      return {
        message: SYS_MSG.LOG_LIST_FETCHED,
        data: records,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async getCurrentMonthLogs(userId: string) {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();

    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0, 23, 59, 59, 999);

    return this.cycleLogRepository.find({
      where: {
        user: { id: userId },
        log_date: Between(start, end),
      },
      order: { log_date: 'ASC' },
    });
  }
}
