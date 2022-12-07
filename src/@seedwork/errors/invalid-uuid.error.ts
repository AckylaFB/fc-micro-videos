export default class InvalidUuidError extends Error {
  constructor(id: string, message?: string) {
    super(
      message ? `id: ${id}, message: ${message}` : `${id} is not a valid uuid.`,
    );
    this.name = 'InvalidUuidError';
  }
}
