/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Injectable } from '@nestjs/common';
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

  async findRecipe(recipe_Id: string): Promise<Recipe> {
    return this.recipeModel.findOne({ recipe_Id });
  }

  async update(recipe_Id: string, newrecipe: UpdateRecipeDto) {
    try {
      const recipe = await this.findRecipe(recipe_Id)
      console.log(recipe)
      if(recipe!=null){
        const updateRecipe = Object.assign(recipe,newrecipe);
        return this.recipeModel.findOneAndUpdate({recipe_Id}, newrecipe,{new: true});
      }
      else {
        throw new Error()
      }
    }
    catch ( error ){
      console.log(error)
    }
  }

  async remove(recipe_Id: number) {
    return this.recipeModel.remove({ recipe_Id });
  }
}
