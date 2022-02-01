export abstract class IGenericRepository<T> {
  abstract getAll();

  abstract getByLevelDeveloper(level: string);

  abstract get(id: any);

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);

  abstract delete(id: any);
}
