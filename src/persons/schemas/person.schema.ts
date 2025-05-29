import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PersonDocument = HydratedDocument<Person>;

@Schema({ timestamps: true })
export class Person {
  @Prop({ required: true, trim: true })
  firstName: string;

  @Prop({ required: true, trim: true })
  lastName: string;

  @Prop({ required: true, unique: true, trim: true, lowercase: true })
  email: string;

  @Prop({ trim: true })
  position: string;

  @Prop({ trim: true })
  department: string;

  @Prop({ type: Date })
  hireDate: Date;

  @Prop({ type: Number })
  salary: number;
}

export const PersonSchema = SchemaFactory.createForClass(Person);