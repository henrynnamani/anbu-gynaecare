import { Module } from '@nestjs/common';
import { UserCyclesController } from './user_cycles.controller';
import { UserCyclesService } from './provider/user_cycles.service';

@Module({
  controllers: [UserCyclesController],
  providers: [UserCyclesService]
})
export class UserCyclesModule {}
