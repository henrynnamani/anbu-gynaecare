import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DbPingService {
  private readonly logger = new Logger(DbPingService.name);

  constructor(@InjectDataSource() private readonly dataSource: DataSource) {}

  @Cron(CronExpression.EVERY_HOUR)
  async pingDatabase() {
    try {
      await this.dataSource.query('SELECT 1');
      this.logger.log('DB ping successful ✓');
    } catch (error) {
      this.logger.error('DB ping failed', error.message);
    }
  }
}