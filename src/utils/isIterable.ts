export function isIterable(obj: any): boolean {
  return obj != null && typeof obj[Symbol.iterator] === "function";
}