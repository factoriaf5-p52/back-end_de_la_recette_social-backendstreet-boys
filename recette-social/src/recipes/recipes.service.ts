/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe, RecipeDocument } from './schemas/recipe.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name)
    private readonly recipeModel: Model<RecipeDocument>,
  ) {}

  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeModel.create(createRecipeDto);
  }

  findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
