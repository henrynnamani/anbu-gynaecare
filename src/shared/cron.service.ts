// simple-cron.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CronService {
  private readonly logger = new Logger(CronService.name);
  private readonly serverUrl: string;

  constructor(private configService: ConfigService) {
    this.serverUrl = this.configService.get('SERVER_URL', 'http://localhost:3000');
  }

  @Cron('* * * * *')
  async handleCron() {
    this.logger.log(`Pinging ${this.serverUrl}/health`);
    
    try {
      const response = await fetch(`${this.serverUrl}/health`);
      const data = await response.json();
      
      this.logger.log(`✅ Success - Status: ${response.status}`);
      this.logger.verbose(`Response: ${JSON.stringify(data)}`);
    } catch (error) {
      this.logger.error(`❌ Failed: ${error.message}`);
    }
  }
}