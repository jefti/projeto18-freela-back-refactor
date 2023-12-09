export function ConflictError(message: string) {
  return {
    name: 'Conflict',
    message,
  };
}
