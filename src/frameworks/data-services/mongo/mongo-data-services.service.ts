import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Developer, DeveloperDocument, Level, LevelDocument } from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  developers: MongoGenericRepository<Developer>;
  levels: MongoGenericRepository<Level>;

  constructor(
    @InjectModel(Developer.name)
    private DeveloperRepository: Model<DeveloperDocument>,
    @InjectModel(Level.name)
    private LevelRepository: Model<LevelDocument>
  ) {}

  onApplicationBootstrap() {
    this.developers = new MongoGenericRepository<Developer>(
      this.DeveloperRepository
    );
    this.levels = new MongoGenericRepository<Level>(this.LevelRepository);
  }
}
