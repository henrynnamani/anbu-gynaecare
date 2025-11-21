import { Module } from '@nestjs/common';
import { UserCyclesController } from './user_cycles.controller';
import { UserCyclesService } from './provider/user_cycles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserCycle } from './model/user_cycle.entity';
import { CyclePredictionsModule } from '../cycle_predictions/cycle_predictions.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserCycle]), CyclePredictionsModule],
  controllers: [UserCyclesController],
  providers: [UserCyclesService],
})
export class UserCyclesModule {}
