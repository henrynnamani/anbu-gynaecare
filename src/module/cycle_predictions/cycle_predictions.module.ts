import { Module } from '@nestjs/common';
import { CyclePredictionsController } from './cycle_predictions.controller';
import { CyclePredictionsService } from './provider/cycle_predictions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CyclePrediction } from './model/cycle_prediction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CyclePrediction])],
  controllers: [CyclePredictionsController],
  providers: [CyclePredictionsService],
  exports: [CyclePredictionsService],
})
export class CyclePredictionsModule {}
