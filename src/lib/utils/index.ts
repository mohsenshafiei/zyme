const line = console.log;

export const transformIf = <T, U>(
  condition: boolean,
  value: T,
  transform: (v: T) => U,
): T | U => (condition ? transform(value) : value);
