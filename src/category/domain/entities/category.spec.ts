import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo';
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
  });

  test('category constructor with id', () => {
    const data = [
      { props: { name: 'Movie' } },
      { props: { name: 'Movie' }, id: null },
      { props: { name: 'Movie' }, id: undefined },
      { props: { name: 'Movie' }, id: new UniqueEntityId() },
    ];

    data.forEach(item => {
      const category = new Category(item.props, item.id);

      expect(category.id).not.toBeNull();
      expect(category.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    });
  });

  test('category constructor with description', () => {
    const category = new Category({
      name: 'Movie',
      description: 'Movie description',
    });

    expect(category.name).toBe('Movie');
    expect(category.description).toBe('Movie description');
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

  it('should update the category`s name and description', () => {
    const category = new Category({
      name: 'Movie',
      description: 'Movie description',
    });

    category.updateName('Movie 2');
    category.updateDescription('Movie description 2');

    expect(category.name).toBe('Movie 2');
    expect(category.description).toBe('Movie description 2');
  });
});
