import { Injectable } from '@nestjs/common';
import { Level } from '../../../core/entities';
import { CreateLevelDto, UpdateLevelDto } from '../../../core/dtos';

@Injectable()
export class LevelFactoryService {
  createNewLevel(createLevelDto: CreateLevelDto) {
    const newLevel = new Level();
    newLevel.nivel = createLevelDto.nivel;

    return newLevel;
  }

  updateLevel(updateLevelDto: UpdateLevelDto) {
    const newLevel = new Level();
    newLevel.nivel = updateLevelDto.nivel;

    return newLevel;
  }
}
