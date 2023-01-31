/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { ObjectId  } from 'mongoose';
import { Ingredient } from 'src/ingredients/schemas/ingredient.schema';


export type RecipeDocument = Recipe & Document;
@Schema()
export class Recipe {
  populate(arg0: string) {
    throw new Error('Method not implemented.');
  }
  @Prop()
  name: string;

  @Prop({type:[{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient._id" }]})
 
  ingredients: Ingredient [];
 

  @Prop()
  instructions: string[];

  @Prop()
  serving_size: number;

  @Prop()
  prep_time: string;

  @Prop()
  cook_time: string;

  @Prop()
  difficulty_level: string;

  @Prop()
  recipe_Id: number;


}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
