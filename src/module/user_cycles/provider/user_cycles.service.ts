import { ModelAction } from '@/shared/action.model';
import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { UserCycle } from '../model/user_cycle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IUserCycle } from '@/shared/types/user-cycle';
import * as SYS_MSG from '@/shared/system-message';
import { CyclePredictionsService } from '@/module/cycle_predictions/provider/cycle_predictions.service';
import { predictCycle } from '@/helpers';

@Injectable()
export class UserCyclesService {
  private modelAction: ModelAction<UserCycle>;

  constructor(
    @InjectRepository(UserCycle)
    private readonly userCycleRepository: Repository<UserCycle>,
    private readonly cyclePredictionService: CyclePredictionsService,
  ) {
    this.modelAction = new ModelAction(userCycleRepository);
  }

  async setUserCycle(data: IUserCycle, userId: string) {
    try {
      const record = await this.modelAction.create({
        ...data,
        user: { id: userId },
      });

      const prediction = predictCycle(
        record.last_period_start,
        record.period_length,
        record.cycle_length,
      );

      await this.cyclePredictionService.savePredictions({
        cycle_id: record.id,
        ...prediction,
      });

      return {
        message: SYS_MSG.USER_CYCLE_SUCCESSFULLY_SET,
        data: record,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}
