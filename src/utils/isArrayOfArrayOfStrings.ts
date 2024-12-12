export function isArrayOfArrayOfStrings(value: any): value is string[][] {
  return Array.isArray(value) && value.every(item => Array.isArray(item) && item.every(subItem => typeof subItem === 'string'));
}