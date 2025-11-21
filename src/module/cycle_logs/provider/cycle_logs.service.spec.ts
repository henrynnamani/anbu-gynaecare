import { Test, TestingModule } from '@nestjs/testing';
import { CycleLogsService } from './cycle_logs.service';

describe('CycleLogsService', () => {
  let service: CycleLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CycleLogsService],
    }).compile();

    service = module.get<CycleLogsService>(CycleLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
