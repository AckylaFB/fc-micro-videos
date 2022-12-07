import { validate as uuidValidate } from 'uuid';

import InvalidUuidError from '../errors/invalid-uuid.error';
import UniqueEntityId from './unique-entity-id.vo';

describe('UniqueEntityId', () => {
  it('should throw error when uuid is invalid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    expect(() => new UniqueEntityId('invalid id')).toThrow(
      new InvalidUuidError('invalid id'),
    );
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accecpt a valid uuid', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    const uuid = '1f1cd5b1-aeec-4eaa-82b1-8407f17307c4';
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should generate a valid uuid when no id is provided', () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
