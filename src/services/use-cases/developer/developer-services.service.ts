import { Injectable } from '@nestjs/common';
import { Developer } from '../../../core/entities';
import { IDataServices } from '../../../core/abstracts';
import { CreateDeveloperDto, UpdateDeveloperDto } from '../../../core/dtos';
import { DeveloperFactoryService } from './developer-factory.service';

@Injectable()
export class DeveloperServices {
  constructor(
    private dataServices: IDataServices,
    private developerFactoryService: DeveloperFactoryService
  ) {}

  async getAllDevelopers(): Promise<Developer[]> {
    return await this.dataServices.developers.getAll();
  }

  async getDeveloperById(id: string): Promise<Developer> {
    return await this.dataServices.developers.get(id);
  }

  async getDeveloperByLevel(level: string): Promise<Developer> {
    return await this.dataServices.developers.getByLevelDeveloper(level);
  }

  createDeveloper(createDeveloperDto: CreateDeveloperDto): Promise<Developer> {
    const developer =
      this.developerFactoryService.createNewDeveloper(createDeveloperDto);
    return this.dataServices.developers.create(developer);
  }

  updateDeveloper(
    developerId: string,
    UpdateDeveloperDto: UpdateDeveloperDto
  ): Promise<Developer> {
    const developer =
      this.developerFactoryService.updateDeveloper(UpdateDeveloperDto);
    return this.dataServices.developers.update(developerId, developer);
  }

  deleteDeveloper(developerId: string): Promise<Developer> {
    return this.dataServices.developers.delete(developerId);
  }
}
