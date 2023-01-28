/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type RecipeDocument = Recipe & Document;
@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  ingredients: string[];

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
