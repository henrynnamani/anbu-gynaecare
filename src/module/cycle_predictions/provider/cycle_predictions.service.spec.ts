import { Test, TestingModule } from '@nestjs/testing';
import { CyclePredictionsService } from './cycle_predictions.service';

describe('CyclePredictionsService', () => {
  let service: CyclePredictionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyclePredictionsService],
    }).compile();

    service = module.get<CyclePredictionsService>(CyclePredictionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
