import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';
import { IUser } from '@/shared/types/auth';
import { ModelAction } from '@/shared/action.model';
import * as SYS_MSG from '@/shared/system-message';
import { CyclePredictionsService } from '@/module/cycle_predictions/provider/cycle_predictions.service';

@Injectable()
export class UsersService {
  private modelAction: ModelAction<User>;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly cyclePredictionsService: CyclePredictionsService,
  ) {
    this.modelAction = new ModelAction(userRepository);
  }

  async createUser(user: IUser) {
    try {
      const record = await this.modelAction.create(user);

      record.password = '';

      return record;
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async findUserByEmail(email: string) {
    try {
      return this.modelAction.findBy({ email });
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async fetchUserDetail(userId: string) {
    try {
      const record = await this.modelAction.findOne(userId, ['cycle']);

      const currentPrediction =
        await this.cyclePredictionsService.getPrediction(userId);

      return {
        message: SYS_MSG.USER_DETAIL_FETCHED_SUCCESSFULLY,
        data: {
          ...record,
          ...currentPrediction.data[0],
        },
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}
