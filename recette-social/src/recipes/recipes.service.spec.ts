import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RecipeService } from './recipes.service';
import { Recipe } from './schemas/recipe.schema';

const data: Recipe[] = [
  {
    name: 'a',
    ingredients: [],
    instructions: [] ,
    serving_size: 1,
    prep_time: 'a',
    cook_time: 'a',
    difficulty_level: 'a',
    recipe_Id: 1
  },
  {
    name: 'b',
    ingredients: [],
    instructions: [] ,
    serving_size: 2,
    prep_time: 'b',
    cook_time: 'b',
    difficulty_level: 'b',
    recipe_Id: 5
  }
];

const recipeModel = {
  findOne: jest.fn(),
  find: jest.fn().mockImplementationOnce(() => ({
    exec: jest.fn().mockResolvedValue({ data }),
  })),
  create: jest.fn(),
};

describe('RecipeService', () => {
  let service: RecipeService;
  let model: typeof recipeModel;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RecipeService,
        {
          provide: getModelToken('Recipe'),
          useValue: recipeModel,
        },
      ],
    }).compile();

    service = module.get<RecipeService>(RecipeService);
    model = module.get(getModelToken('Recipe'));
    });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return all recipes', async ()=>{
    const result = await service.findAll();
    expect(result).toMatchObject({data});
    expect(model.find).toHaveBeenCalledTimes(1);
  });
});
