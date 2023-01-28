import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { refs } from '@nestjs/swagger';
import { Document, Schema } from 'mongoose';

export type IngredientDocument = Ingredient & Document;
@Schema()
export class Ingredient {
  @Prop()
  name: string;

  @Prop()
  measure_unit: string;

  @Prop()
  recipes: {
    type: Schema.Types.ObjectId;
    ref: 'Recipe';
  };
}
export const IngredientSchema = SchemaFactory.createForClass(Ingredient);
