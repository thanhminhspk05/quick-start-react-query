// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const tryCatch = (f: any, defaultValue: any, ...args: any): typeof f => {
  let result;
  try {
    result = f(...args);
  } catch {
    result = defaultValue;
  }
  return result;
};
