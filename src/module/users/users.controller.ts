import { Controller, Get } from '@nestjs/common';
import { UsersService } from './provider/users.service';
import { LoggedInUser } from '../auth/decorator/current-user.decorator';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get User Details' })
  @ApiBearerAuth()
  @Get('/me')
  me(@LoggedInUser('id') id: string) {
    return this.usersService.fetchUserDetail(id);
  }
}
