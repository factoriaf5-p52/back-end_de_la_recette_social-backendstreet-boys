import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { User} from './schemas/user.schema'
import { UsersController } from './users.controller';
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
    user_Id: 2
  },
  {
    name: 'a',
    lastname: 'a',
    username: 'a',
    email: 'a',
    password: 'a',
    groups: [],
    badge: 'a',
    admin: false,
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

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;
  let model: typeof userModel;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: getModelToken('User'),
          useValue: userModel
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
    model = module.get(getModelToken('User'));
  });
  
  describe('findAll User', () => {
    it('should return a list of all users', async ()=>{
      const result = await controller.findAll();
      expect(result).toMatchObject({data});
    })

  })
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
