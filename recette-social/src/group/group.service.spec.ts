import { Test, TestingModule } from '@nestjs/testing';
import { groupService } from './group.service';

describe('GroupService', () => {
  let service: groupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [groupService],
    }).compile();

    service = module.get<groupService>(groupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
