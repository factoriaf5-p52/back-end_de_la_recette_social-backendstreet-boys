/* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Put } from '@nestjs/common/decorators';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipeService) {}

  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  findAll() {
    return this.recipesService.findAll();
  }

  @Get(':recipe_Id')
  findRecipe(@Param('recipe_Id') recipe_Id: string) {
    return this.recipesService.findRecipe(recipe_Id);
  }

  @Patch(':recipe_Id')
  update(
    @Body() newrecipe: UpdateRecipeDto,
    @Param('recipe_Id') recipe_Id: string,
  ) {
    return this.recipesService.update(recipe_Id, newrecipe);
  }

  @Delete(':recipe_Id')
  remove(@Param('recipe_Id') recipe_Id: string) {
    return this.recipesService.remove(+recipe_Id);
  }
}
