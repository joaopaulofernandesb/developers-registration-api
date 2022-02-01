import { Model } from 'mongoose';
import { IGenericRepository } from '../../../core';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll() {
    return this._repository.find();
  }

  get(id: string) {
    return this._repository.findById(id);
  }

  getByLevelDeveloper(level: string) {
    return this._repository.findOne({ level: level });
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: string, item: T) {
    return this._repository.findByIdAndUpdate(id, item);
  }

  delete(id: string) {
    return this._repository.findByIdAndDelete(id);
  }
}
