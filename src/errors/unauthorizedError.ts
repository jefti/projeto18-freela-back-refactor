export function UnauthorizedError(message: string) {
  return {
    name: 'Unauthorized',
    message,
  };
}
