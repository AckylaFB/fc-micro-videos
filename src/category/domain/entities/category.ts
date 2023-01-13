import Entity from '../../../@seedwork/domain/entity/index';
import UniqueEntityId from '../../../@seedwork/domain/unique-entity-id.vo';

export type CategoryProps = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category extends Entity<CategoryProps> {
  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    super(props, id);
    this.props.description = props.description ?? null;
    this.props.name = props.name;
    this.props.is_active = props.is_active ?? true;
    this.props.created_at = props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  // private set description(value: string) {
  //   this.props.description = value ?? null;
  // }

  get is_active(): boolean {
    return this.props.is_active;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value;
  }

  get created_at(): Date {
    return this.props.created_at;
  }

  updateName(name: string) {
    this.props.name = name;
  }

  updateDescription(description: string) {
    this.props.description = description;
  }
}
