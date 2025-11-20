import { Controller, Get } from '@nestjs/common';
import { CyclePredictionsService } from './provider/cycle_predictions.service';
import { LoggedInUser } from '../auth/decorator/current-user.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('predictions')
@Controller('cycle-predictions')
export class CyclePredictionsController {
  constructor(
    private readonly cyclePredictionsService: CyclePredictionsService,
  ) {}

  @ApiBearerAuth()
  @Get('')
  getUserCyclePrediction(@LoggedInUser('id') id: string) {
    return this.cyclePredictionsService.getPrediction(id);
  }
}
