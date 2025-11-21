import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { SetUserCycleDto } from '../dto/user-cycle.dto';

export const UserCycleDoc = () =>
  applyDecorators(
    ApiOperation({ summary: 'Set User Cycle Setting' }),
    ApiBearerAuth(),
    ApiBody({
      type: SetUserCycleDto,
    }),
    ApiResponse({ status: 200, example: 'Entity created' }),
    ApiResponse({ status: 400, example: 'Bad Request' }),
    ApiResponse({ status: 401, example: 'Unauthorized' }),
    ApiResponse({ status: 500, example: 'Internal Server Error' }),
  );
