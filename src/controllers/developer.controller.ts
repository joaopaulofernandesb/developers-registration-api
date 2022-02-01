import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  Query
} from '@nestjs/common';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../core/dtos';
import { DeveloperServices } from '../services/use-cases/developer/developer-services.service';
import { ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';

@Controller('api/developer')
export class DeveloperController {
  constructor(private developerServices: DeveloperServices) {}

  @Get()
  @ApiTags('Developer')
  async getAll() {
    return await this.developerServices.getAllDevelopers();
  }

  @Get(':id')
  @ApiTags('Developer')
  async getById(@Param('id') developerId: string) {
    return this.developerServices.getDeveloperById(developerId);
  }

  @Post()
  @ApiTags('Developer')
  @ApiBody({ type: CreateDeveloperDto })
  async createDeveloper(@Body() developerDto: CreateDeveloperDto) {
    try {
      await this.developerServices.createDeveloper(developerDto);
      return {
        error: false,
        statusCode: HttpStatus.OK,
        message: 'Cadastro efetuado com Sucesso !'
      };
    } catch (error) {
      return { error: true, message: 'Erro ao Cadastrar Desenvolvedor' };
    }
  }

  @Put(':id')
  @ApiTags('Developer')
  @ApiBody({ type: UpdateDeveloperDto })
  async updateDeveloper(
    @Param('id') developerId: string,
    @Body() updateDeveloperDto: UpdateDeveloperDto
  ) {
    try {
      await this.developerServices.updateDeveloper(
        developerId,
        updateDeveloperDto
      );
      return {
        error: false,
        statusCode: HttpStatus.OK,
        message: 'Dados alterado com Sucesso !'
      };
    } catch (error) {
      return {
        error: true,
        statusCode: HttpStatus.NOT_FOUND,
        message: `Erro ao altrar os dados`
      };
    }
  }

  @Delete(':id')
  @ApiTags('Developer')
  async deleteDeveloper(@Param('id') developerId: string) {
    const result = await this.developerServices.deleteDeveloper(developerId);

    if (!result) {
      return {
        error: true,
        statusCode: HttpStatus.NOT_FOUND,
        message: `Não foi ecnontrado nenhum desenvolvedor com esse id: ${developerId}`
      };
    }
    return {
      error: false,
      statusCode: HttpStatus.OK,
      message: 'Deletado com Sucesso !'
    };
  }
}
