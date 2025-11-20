import { Test, TestingModule } from '@nestjs/testing';
import { UserCyclesService } from './user_cycles.service';

describe('UserCyclesService', () => {
  let service: UserCyclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCyclesService],
    }).compile();

    service = module.get<UserCyclesService>(UserCyclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
