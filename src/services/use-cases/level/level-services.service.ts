import { Injectable } from '@nestjs/common';
import { Level } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';
import { CreateLevelDto, UpdateLevelDto } from '../../../core/dtos';
import { LevelFactoryService } from './level-factory.service';

@Injectable()
export class Levelservices {
  constructor(
    private dataServices: IDataServices,
    private LevelFactoryService: LevelFactoryService
  ) {}

  getAllLevels(): Promise<Level[]> {
    return this.dataServices.levels.getAll();
  }

  getLevelById(id: any): Promise<Level> {
    return this.dataServices.levels.get(id);
  }

  createLevel(createLevelDto: CreateLevelDto): Promise<Level> {
    const level = this.LevelFactoryService.createNewLevel(createLevelDto);
    return this.dataServices.levels.create(level);
  }

  updateLevel(levelId: string, UpdateLevelDto: UpdateLevelDto): Promise<Level> {
    const level = this.LevelFactoryService.updateLevel(UpdateLevelDto);
    return this.dataServices.levels.update(levelId, level);
  }

  deleteLevel(levelId: string): Promise<Level> {
    return this.dataServices.levels.delete(levelId);
  }
}
