import { Controller, Get } from '@nestjs/common';
import { SkipAuth } from './module/auth/decorator/skipAuth.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('health')
  @ApiBearerAuth()
  @SkipAuth()
  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Server is healthy'
    };
  }
}