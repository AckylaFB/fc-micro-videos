import { validate as uuidValidate } from 'uuid';

import Entity from '.';
import UniqueEntityId from '../unique-entity-id.vo';

class StubEntity extends Entity<{ prop1: string; prop2: number }> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = {
      prop1: 'prop1',
      prop2: 2,
    };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('should set props and id when id is provided', () => {
    const props = {
      prop1: 'prop1',
      prop2: 2,
    };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(props, uniqueEntityId);

    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).toBe(uniqueEntityId.value);
  });

  it('should convert an entity to object', () => {
    const props = {
      prop1: 'prop1',
      prop2: 2,
    };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(props, uniqueEntityId);

    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...props,
    });
  });
});
