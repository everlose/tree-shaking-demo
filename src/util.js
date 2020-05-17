export function toPrimitive(value) {
  if (typeof value === 'object') {
    return value.valueOf().toString();
  }
  return value;

}