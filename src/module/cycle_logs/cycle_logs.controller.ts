import { Body, Controller, Get, Post } from '@nestjs/common';
import { CycleLogsService } from './provider/cycle_logs.service';
import { LogDto } from './dto/create-log.dto';
import { LoggedInUser } from '../auth/decorator/current-user.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('logs')
@Controller('cycle-logs')
export class CycleLogsController {
  constructor(private readonly cycleLogsService: CycleLogsService) {}

  @ApiBody({ type: LogDto })
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Log period' })
  @Post('')
  createLog(@Body() logData: LogDto, @LoggedInUser('id') id: string) {
    return this.cycleLogsService.createLog(logData, id);
  }

  @ApiOperation({ summary: 'Get all logs' })
  @ApiBearerAuth()
  @Get('')
  getAllLog(@LoggedInUser('id') id: string) {
    return this.cycleLogsService.getAllLog(id);
  }

  @ApiOperation({ summary: 'Get current month logs' })
  @ApiBearerAuth()
  @Get('/month')
  getMonthLog(@LoggedInUser('id') id: string) {
    return this.cycleLogsService.getCurrentMonthLogs(id);
  }
}
