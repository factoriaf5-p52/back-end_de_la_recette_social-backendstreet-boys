/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Ingredient, IngredientDocument } from './schemas/ingredient.schema';
import { Model } from 'mongoose';

@Injectable()
export class ingredientService {
  findOne(id: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(Ingredient.name)
    private readonly ingredientModel: Model<IngredientDocument>,
  ) {}

  create(createingredientDto: CreateIngredientDto) {
    return this.ingredientModel.create(createingredientDto);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientModel.find().exec();
  }

  async findingredient(ingredient_Id: string): Promise<Ingredient> {
    return this.ingredientModel.findOne({ ingredient_Id });
  }

  async update(ingredient_Id: string, newingredient: UpdateIngredientDto) {
    try {
      const ingredient = await this.findingredient(ingredient_Id)
      console.log(ingredient)
      if(ingredient!=null){
        const updateingredient = Object.assign(ingredient,newingredient);
        return this.ingredientModel.findOneAndUpdate({ingredient_Id}, newingredient,{new: true});
      }
      else {
        throw new Error()
      }
    }
    catch ( error ){
      console.log(error)
    }
  }

  async remove(ingredient_Id: number) {
    return this.ingredientModel.remove({ ingredient_Id });
  }
}
