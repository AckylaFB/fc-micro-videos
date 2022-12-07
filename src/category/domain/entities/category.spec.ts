import { validate } from 'uuid';
import { Category } from './category';

describe('Category constructor', () => {
  test('category constructor', () => {
    const category = new Category({
      name: 'Movie',
    });

    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: null,
      is_active: true,
      created_at: expect.any(Date),
    });

    expect(validate(category.id)).toBeTruthy();
  });

  test('category constructor with description', () => {
    const category = new Category({
      name: 'Movie',
      description: 'Movie description',
    });

    expect(category.description).toBe('Movie description');

    // eslint-disable-next-line dot-notation
    category['description'] = 'Movie description 2';
    expect(category.description).toBe('Movie description 2');
  });

  test('category constructor with is_active', () => {
    const category = new Category({
      name: 'Movie',
      is_active: false,
    });

    expect(category.is_active).toBeFalsy();

    // eslint-disable-next-line dot-notation
    category['is_active'] = true;
    expect(category.is_active).toBeTruthy();
  });

  test('category constructor with created_at', () => {
    const category = new Category({
      name: 'Movie',
      created_at: new Date('2020-01-01'),
    });

    expect(category.created_at).toBeInstanceOf(Date);
    expect(category.created_at).toEqual(new Date('2020-01-01'));
  });
});
