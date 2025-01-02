export function removeNullKeysRecursive(obj: Object): Object {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  return Object.entries(obj).reduce((acc: any, [key, value]) => {
    if (value !== null) {
      acc[key] =
        typeof value === "object" ? removeNullKeysRecursive(value) : value;
    }
    return acc;
  }, {});
}
