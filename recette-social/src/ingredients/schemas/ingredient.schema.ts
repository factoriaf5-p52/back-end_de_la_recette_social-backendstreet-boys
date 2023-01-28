import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type IngredientDocument = Ingredient & Document;
@Schema()
export class Ingredient {
  @Prop()
  name: string;

  @Prop()
  measure_unit: string;

  @Prop()
  ingredient_Id: string;
}

export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
