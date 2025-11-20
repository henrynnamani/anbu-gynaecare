import { Module } from '@nestjs/common';
import { CycleLogsController } from './cycle_logs.controller';

@Module({
  controllers: [CycleLogsController]
})
export class CycleLogsModule {}
