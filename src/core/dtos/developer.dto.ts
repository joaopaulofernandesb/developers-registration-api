import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDeveloperDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nivel: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sexo: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  datanascimento: Date;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  idade: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  hobby: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}

export class UpdateDeveloperDto extends PartialType(CreateDeveloperDto) {}
