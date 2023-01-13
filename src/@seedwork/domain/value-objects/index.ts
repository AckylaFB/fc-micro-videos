import { deepFreeze } from '../utils/object';

export default abstract class ValueObject<V = unknown> {
  protected readonly _value: V;

  constructor(value: V) {
    this._value = deepFreeze(value);
  }

  get value(): V {
    return this._value;
  }

  toString = () => {
    if (typeof this.value !== 'object' || this.value === null) {
      try {
        return this.value.toString();
      } catch (e) {
        return String(this.value);
      }
    }

    const valueStr = this.value.toString();
    return valueStr === '[object Object]'
      ? JSON.stringify(this.value)
      : valueStr;
  };
}
