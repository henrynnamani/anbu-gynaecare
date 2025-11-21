import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CyclePrediction } from '../model/cycle_prediction.entity';
import { Repository } from 'typeorm';
import { ModelAction } from '@/shared/action.model';
import { ICyclePrediction } from '@/shared/types/prediction';

@Injectable()
export class CyclePredictionsService {
  private modelAction: ModelAction<CyclePrediction>;
  constructor(
    @InjectRepository(CyclePrediction)
    private readonly cyclePredictionRepository: Repository<CyclePrediction>,
  ) {
    this.modelAction = new ModelAction(cyclePredictionRepository);
  }

  async savePredictions(data: ICyclePrediction) {
    try {
      const record = await this.modelAction.create({
        ...data,
        user_cycle: { id: data.cycle_id },
      });

      return record;
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }

  async getPrediction(userId: string) {
    try {
      const record = await this.modelAction.findAll(
        {
          user_cycle: { user: { id: userId } as any } as any,
        },
        ['user_cycle'],
      );

      return {
        data: record,
      };
    } catch (err) {
      throw new RequestTimeoutException(err);
    }
  }
}
