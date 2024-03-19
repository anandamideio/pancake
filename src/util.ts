/**
 * Enum for comparison results.
 */
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

/** Constant representing a non-existent index */
export const DOES_NOT_EXIST = -1;

/**
 * Checks if `a` is less than or equal to `b` using a custom comparison function.
 * @param a - The first item to compare.
 * @param b - The second item to compare.
 * @param compareFn - The comparison function.
 * @returns True if `a` is less than or equal to `b`, false otherwise.
 */
export const lesserEquals = function <T>(a: T, b: T, compareFn: (a: T, b: T) => number): boolean {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
};

/**
 * Checks if `a` is greater than or equal to `b` using a custom comparison function.
 * @param a - The first item to compare.
 * @param b - The second item to compare.
 * @param compareFn - The comparison function.
 * @returns True if `a` is greater than or equal to `b`, false otherwise.
 */
export const biggerEquals = function <T>(a: T, b: T, compareFn: (a: T, b: T) => number): boolean {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
};

/**
 * Default equality check function.
 * @param a - The first item to compare.
 * @param b - The second item to compare.
 * @returns True if `a` and `b` are equal, false otherwise.
 */
export const defaultEquals = function <T>(a: T, b: T): boolean {
  return a === b; // returns true or false depending if the elements match
};

/**
 * Default comparison function.
 * @param a - The first item to compare.
 * @param b - The second item to compare.
 * @returns A comparison result based on the comparison of `a` and `b`.
 */
export const defaultCompare = function <T>(a: T, b: T): number {
  if (a === b) { return Compare.EQUALS; }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};

/**
 * Default string conversion function.
 * @param item - The item to convert to a string.
 * @returns The string representation of `item`.
 */
export const defaultToString = function <T>(item: T): string {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
};

/**
 * Swaps two elements in an array.
 * @param array - The array containing the elements to swap.
 * @param a - The index of the first element to swap.
 * @param b - The index of the second element to swap.
 */
export const swap = function <T>(array: T[], a: number, b: number): void {
  [array[a], array[b]] = [array[b], array[a]];
};

/**
 * Reverses the order of comparison for a given comparison function.
 * @param compareFn - The comparison function to reverse.
 * @returns A new comparison function that reverses the order of comparison.
 */
export const reverseCompare = function <T>(compareFn: (a: T, b: T) => number): (a: T, b: T) => number {
  return (a, b) => compareFn(b, a);
};

/**
 * Default difference function.
 * @param a - The first item to compare.
 * @param b - The second item to compare.
 * @returns The difference between `a` and `b`.
 */
export const defaultDiff = function <TypeA extends string | number, TypeB extends string | number>(a: TypeA, b: TypeB): number { return Number(a) - Number(b); };
