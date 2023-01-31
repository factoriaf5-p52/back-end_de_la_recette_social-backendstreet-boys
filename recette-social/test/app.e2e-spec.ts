import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Recipe } from 'src/recipes/schemas/recipe.schema';

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


describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World Recette-Social');
  });
  it('/recipes (GET)', () => {
    return request(app.getHttpServer())
      .get('/recipes')
      .expect(200)
      //.expect('recipes');
  });
  it('/users (GET)', () => {
    return request(app.getHttpServer())
      .get('/user')
      .expect(404)
      //.expect('users');
    });
    
  it('/recipes (GET)', () => {
    return request(app.getHttpServer())
      .get('/recipes/5')
      .expect(200)
      //.expect('recipes');
    });
    it('/users (GET)', () => {
      return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        //.expect('users');
    });
    it('/users (GET)', () => {
      return request(app.getHttpServer())
        .get('/users/1')
        .expect(200)
        //.expect('users');
      });
      it('/users (GET)', () => {
        return request(app.getHttpServer())
          .get('/user')
          .expect(404)
          //.expect('users');
        });
});
