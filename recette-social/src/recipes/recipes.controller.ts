/* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { RecipeService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  [x: string]: any;
  constructor(private readonly recipesService: RecipeService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Patch(':recipe_Id')
  update(
    @Body() newrecipe: UpdateRecipeDto,
    @Param('recipe_Id') recipe_Id: string,
  ) {
    return this.recipesService.update(recipe_Id, newrecipe);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':recipe_Id')
  remove(@Param('recipe_Id') recipe_Id: string) {
    return this.recipesService.remove(+recipe_Id);
  }
}
