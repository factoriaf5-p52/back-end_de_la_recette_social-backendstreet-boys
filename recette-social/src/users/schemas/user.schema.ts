/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type UserDocument = User & Document;
@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    lastname: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    groups: string[];

    @Prop()
    badge: string;

    @Prop()
    admin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
