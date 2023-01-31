import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { Recipe } from 'src/recipes/schemas/recipe.schema';
import { RecipesModule } from '../src/recipes/recipes.module';
import { getModelToken } from '@nestjs/mongoose';


const data: Recipe[] = [
  {
    name: 'c',
    ingredients: [],
    instructions: [] ,
    serving_size: 2,
    prep_time: 'c',
    cook_time: 'c',
    difficulty_level: 'c',
    recipe_Id: 2
  },
  // {
  //   name: 'b',
  //   ingredients: [],
  //   instructions: [] ,
  //   serving_size: 2,
  //   prep_time: 'b',
  //   cook_time: 'b',
  //   difficulty_level: 'b',
  //   recipe_Id: 5
  // }
];

const mockRecipeModel = {
  findOne: jest.fn(),
  find: jest.fn().mockImplementationOnce(() => ({
    exec: jest.fn().mockResolvedValue({ data }),
  })),
  create: jest.fn(),
};


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RecipesModule],
    }).overrideProvider(getModelToken('Recipe')).useValue(mockRecipeModel).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/recipes (GET)', () => {
    return request(app.getHttpServer())
      .get('/recipes')
      .expect(200)
      .expect({data});
  });

  it('/recipes (POST)', () => {
    return request(app.getHttpServer())
      .post('/recipes')
      .send({ data: 'newRecipe' })
      .expect(201)
      .expect({ data: 'newRecipe' });
  });

  // it('/recipes (POST)', () => {
  //     return request(app.getHttpServer())
  //     .post('/recipes')
  //     .send({createRecipeDto: 'mydata'})
  //     .expect(201)
  //     .expect({createRecipeDto: 'mydata'})
      
  //   });
    
    // it('/recipes (POST)', async  () => {
    //   const response = await request(app.getHttpServer())
    //   .post('/recipes')
    //   .send({newRecipe: 'myRecipe'});
    //   expect(response.statusCode).toBe(201);
    //   expect(response).toBe({newRecipe: 'myRecipe'});
    //   });

  // it('/recipes (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/recipes/5')
  //     .expect(200)
  //     //.expect('recipes');
  //   });
  //   it('/users (GET)', () => {
  //     return request(app.getHttpServer())
  //       .get('/users')
  //       .expect(200)
  //       //.expect('users');
  //   });
  //   it('/users (GET)', () => {
  //     return request(app.getHttpServer())
  //       .get('/users/1')
  //       .expect(200)
  //       //.expect('users');
  //     });
  //     it('/users (GET)', () => {
  //       return request(app.getHttpServer())
  //         .get('/user')
  //         .expect(404)
  //         //.expect('users');
  //       });
});





