import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type LevelDocument = Level & Document;

@Schema()
export class Level {
  @Prop()
  nivel: string;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
