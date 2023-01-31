import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

const data: User[] = [
  {
    name: 'a',
    lastname: 'a',
    username: 'a',
    email: 'a',
    password: 'a',
    groups: [],
    badge: 'a',
    admin: true,
    user_Id: 1
  },
  {
    name: 'a',
    lastname: 'a',
    username: 'a',
    email: 'a',
    password: 'a',
    groups: [],
    badge: 'a',
    admin: true,
    user_Id: 5
  }
];

const userModel = {
  findOne: jest.fn(),
  find: jest.fn().mockImplementationOnce(() => ({
    exec: jest.fn().mockResolvedValue({ data }),
  })),
  create: jest.fn(),
};

describe('UsersService', () => {
  let service: UsersService;
  let model: typeof userModel;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
      {
        provide: getModelToken('User'),
        useValue: userModel,
      },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    model = module.get(getModelToken('User'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all users', async () => {
    const result = await service.findAll();
    expect(result).toMatchObject({data});
    expect(model.find).toHaveBeenCalledTimes(1);
  })
});
