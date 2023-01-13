import ValueObject from '.';

class StubValueObject extends ValueObject {}

describe('ValueObject', () => {
  it('should set value', () => {
    let vo = new StubValueObject('string value');
    expect(vo.value).toBe('string value');

    vo = new StubValueObject({ prop1: 'value1' });
    expect(vo.value).toStrictEqual({ prop1: 'value1' });
  });

  it('should return string value', () => {
    const date = new Date();
    const arrange = [
      { received: null, expected: 'null' },
      { received: undefined, expected: 'undefined' },
      { received: 0, expected: '0' },
      { received: 1, expected: '1' },
      { received: '', expected: '' },
      { received: 'string', expected: 'string' },
      {
        received: { prop1: 'value1' },
        expected: JSON.stringify({ prop1: 'value1' }),
      },
      { received: [1, 2, 3], expected: '1,2,3' },
      { received: date, expected: date.toString() },
      { received: false, expected: 'false' },
      { received: true, expected: 'true' },
    ];

    arrange.forEach(({ received, expected }) => {
      const vo = new StubValueObject(received);
      expect(vo.toString()).toBe(expected);
    });
  });
});
