import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true})
export class User extends Document {
    @Prop({required: true})
    userId: string;

    @Prop({required: true})
    sender: string;

    @Prop({required: true})
    recipient: string;

    @Prop({required: true})
    amount: number;

    @Prop({required: true})
    date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);