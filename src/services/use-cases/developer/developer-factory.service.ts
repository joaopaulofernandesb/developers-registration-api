import { Injectable } from '@nestjs/common';
import { Developer } from '../../../core/entities';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../../../core/dtos';

@Injectable()
export class DeveloperFactoryService {
  createNewDeveloper(createDeveloperDto: CreateDeveloperDto) {
    const newDeveloper = new Developer();
    newDeveloper.nivel = createDeveloperDto.nivel;
    newDeveloper.nome = createDeveloperDto.nome;
    newDeveloper.sexo = createDeveloperDto.sexo;
    newDeveloper.datanascimento = createDeveloperDto.datanascimento;
    newDeveloper.idade = createDeveloperDto.idade;
    newDeveloper.hobby = createDeveloperDto.hobby;
    newDeveloper.createdAt = new Date();

    return newDeveloper;
  }

  updateDeveloper(updateDeveloperDto: UpdateDeveloperDto) {
    const newDeveloper = new Developer();
    newDeveloper.nivel = updateDeveloperDto.nivel;
    newDeveloper.nome = updateDeveloperDto.nome;
    newDeveloper.sexo = updateDeveloperDto.sexo;
    newDeveloper.datanascimento = updateDeveloperDto.datanascimento;
    newDeveloper.idade = updateDeveloperDto.idade;
    newDeveloper.hobby = updateDeveloperDto.hobby;
    newDeveloper.updatedAt = new Date();
    return newDeveloper;
  }
}
