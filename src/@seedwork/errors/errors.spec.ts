import InvalidUuidError from './invalid-uuid.error';

describe('Errors', () => {
  test('Invalid uuid error', () => {
    const uuidError = new InvalidUuidError('aninvalid-uuid');

    expect(uuidError).toBeInstanceOf(Error);
    expect(uuidError.message).toBe('aninvalid-uuid is not a valid uuid.');

    const uuidErrorWithMessage = new InvalidUuidError(
      'aninvalid-uuid',
      'Plesae provide a valid uuid.',
    );

    expect(uuidErrorWithMessage.message).toBe(
      'id: aninvalid-uuid, message: Plesae provide a valid uuid.',
    );
  });
});
