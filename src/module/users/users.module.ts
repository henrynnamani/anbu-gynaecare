import { Module } from '@nestjs/common';
import { UsersService } from './provider/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';
import { UsersController } from './users.controller';
import { CyclePredictionsModule } from '../cycle_predictions/cycle_predictions.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CyclePredictionsModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
