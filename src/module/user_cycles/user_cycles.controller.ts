import { Body, Controller, Post } from '@nestjs/common';
import { UserCyclesService } from './provider/user_cycles.service';
import { SetUserCycleDto } from './dto/user-cycle.dto';
import { LoggedInUser } from '../auth/decorator/current-user.decorator';
import { UserCycleDoc } from './doc/user_cycles.doc';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cycles')
@Controller('user-cycles')
export class UserCyclesController {
  constructor(private readonly userCyclesService: UserCyclesService) {}

  @UserCycleDoc()
  @Post('')
  setUserCycle(
    @Body() userCyclesData: SetUserCycleDto,
    @LoggedInUser('id') id: string,
  ) {
    return this.userCyclesService.setUserCycle(userCyclesData, id);
  }
}
