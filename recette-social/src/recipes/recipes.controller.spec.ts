import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from './recipes.controller';
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
  }
];

const mockRecipeModel = {
  findOne: jest.fn(),
  find: jest.fn().mockImplementationOnce(() => ({
    exec: jest.fn().mockResolvedValue({ data }),
  })),
  create: jest.fn(),
};
describe('RecipesController', () => {
  let controller: RecipesController;
  let service: RecipeService;
  let model:typeof mockRecipeModel;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesController],
      providers: [RecipeService,
        {
          provide: getModelToken('Recipe'),
          useValue: mockRecipeModel
        }
      ],
    }).compile();

    controller = module.get<RecipesController>(RecipesController);
    service = module.get<RecipeService>(RecipeService);
    model = module.get(getModelToken('Recipe'));
    });

  describe('findAll controller', () => {
    it('should return a list of all Recipes', async ()=>{
      const result = await controller.findAll();
      expect(result).toMatchObject({data});
    })
  });
  
});
