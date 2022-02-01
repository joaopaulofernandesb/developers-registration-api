import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus
} from '@nestjs/common';
import { CreateLevelDto, UpdateLevelDto } from '../core/dtos';
import { Levelservices } from '../services/use-cases/level/level-services.service';
import { DeveloperServices } from '../services/use-cases/developer/developer-services.service';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@Controller('api/level')
export class LevelController {
  constructor(
    private LevelServices: Levelservices,
    private DeveloperServices: DeveloperServices
  ) {}

  @Get()
  @ApiTags('Level')
  async getAll() {
    try {
      return await this.LevelServices.getAllLevels();
    } catch (error) {
      return {
        error: true,
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Erro ao Buscar Nível'
      };
    }
  }

  @Get(':id')
  @ApiTags('Level')
  async getById(@Param('id') developerId: string) {
    try {
      return await this.LevelServices.getLevelById(developerId);
    } catch (error) {
      return {
        error: true,
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Erro ao Buscar Nível'
      };
    }
  }

  @Post()
  @ApiTags('Level')
  @ApiBody({ type: CreateLevelDto })
  async createLevel(@Body() levelDto: CreateLevelDto) {
    try {
      await this.LevelServices.createLevel(levelDto);
      return {
        error: false,
        statusCode: HttpStatus.OK,
        message: 'Cadastro efetuado com Sucesso !'
      };
    } catch (error) {
      if (error) {
        return { error: true, message: 'Erro ao Cadastrar Nível' };
      }
    }
  }

  @Put(':id')
  @ApiTags('Level')
  @ApiBody({ type: UpdateLevelDto })
  async updateLevel(
    @Param('id') levelId: string,
    @Body() updateLevelDto: UpdateLevelDto
  ) {
    try {
      await this.LevelServices.updateLevel(levelId, updateLevelDto);
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
  @ApiTags('Level')
  async deleteLevel(@Param('id') levelId: string) {
    try {
      const { nivel } = await this.LevelServices.getLevelById(levelId);
      const isDeveloperLevel = await this.DeveloperServices.getDeveloperByLevel(
        nivel
      );

      if (isDeveloperLevel.nivel === nivel) {
        return {
          error: true,
          statusCode: HttpStatus.NOT_FOUND,
          message: `Não será possivel excluir, pois existe um desenvolvedor(a) com este nivél: ${nivel}`
        };
      }
      const result = await this.LevelServices.deleteLevel(levelId);

      if (!result) {
        return {
          error: true,
          statusCode: HttpStatus.NOT_FOUND,
          message: `Não foi ecnontrado nenhum Nivel com esse id: ${levelId}`
        };
      }
      return {
        error: false,
        statusCode: HttpStatus.OK,
        message: 'Deletado com Sucesso !'
      };
    } catch (error) {
      return {
        error: true,
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Erro ao deletar Nível !'
      };
    }
  }
}
