import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLevelDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nivel: string;
}

export class UpdateLevelDto extends PartialType(CreateLevelDto) {}
