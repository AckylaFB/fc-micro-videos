import { v4 as uuidv4 } from 'uuid';

export type CategoryProps = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export class Category {
  public readonly id: string;

  constructor(public readonly props: CategoryProps, id?: string) {
    this.id = id ?? uuidv4();
    this.description = props.description ?? null;
    this.props.is_active = props.is_active ?? true;
    this.props.created_at = props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? null;
  }

  get created_at(): Date {
    return this.props.created_at;
  }
}
