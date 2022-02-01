import { Developer, Level } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract developers: IGenericRepository<Developer>;

  abstract levels: IGenericRepository<Level>;
}
