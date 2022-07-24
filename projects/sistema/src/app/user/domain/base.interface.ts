export interface Base<Entity> {
  insert(entity: Entity): any;

  list(): any;

  listOne(id: number): any;

  update(id: number, entity: Entity): any;

  delete(id: number): any;
}
