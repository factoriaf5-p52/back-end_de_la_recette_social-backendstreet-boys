import { Test, TestingModule } from '@nestjs/testing';
import { IngredientsController } from './ingredients.controller';
import { ingredientService } from './ingredients.service';

describe('IngredientsController', () => {
  let controller: IngredientsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientsController],
      providers: [ingredientService],
    }).compile();

    controller = module.get<IngredientsController>(IngredientsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
