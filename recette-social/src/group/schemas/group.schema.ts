/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type groupDocument = group & Document;
@Schema()
export class group {
    @Prop()
    name: string;

    @Prop()
    creation_date: Date;

    @Prop()
    number_of_members: number;

    @Prop()
    admin: string;

    @Prop()
    recipes: string[];
    
    @Prop()
    group_Id: number;
}

export const groupSchema = SchemaFactory.createForClass(group);
