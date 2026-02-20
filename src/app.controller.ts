import { Controller, Get } from '@nestjs/common';
import { SkipAuth } from './module/auth/decorator/skipAuth.decorator';

@Controller()
export class AppController {
  @Get('health')
  @SkipAuth()
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Server is healthy'
    };
  }
}