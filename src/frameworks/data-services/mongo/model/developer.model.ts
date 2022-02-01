import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { mongoosePagination, Pagination } from 'mongoose-paginate-ts';

export type DeveloperDocument = Developer & Document;

@Schema()
export class Developer {
  @Prop()
  nivel: string;
  @Prop()
  nome: string;
  @Prop()
  sexo: string;
  @Prop()
  datanascimento: Date;
  @Prop()
  idade: number;
  @Prop()
  hobby: string;
  @Prop()
  createdAt: Date;
  @Prop()
  updatedAt: Date;
}

const DeveloperSchema = SchemaFactory.createForClass(Developer);
DeveloperSchema.plugin(mongoosePagination);

export const DeveloperSchemas = SchemaFactory.createForClass(Developer);
