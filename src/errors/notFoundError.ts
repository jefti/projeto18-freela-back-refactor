export function notFoundError(message: string) {
  return {
    name: 'NotFound',
    message,
  };
}
