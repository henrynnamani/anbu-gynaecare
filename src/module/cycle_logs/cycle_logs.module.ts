import { Module } from '@nestjs/common';
import { CycleLogsController } from './cycle_logs.controller';
import { CycleLogsService } from './provider/cycle_logs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CycleLog } from './model/cycle_log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CycleLog])],
  controllers: [CycleLogsController],
  providers: [CycleLogsService],
})
export class CycleLogsModule {}
