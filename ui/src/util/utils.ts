export const randInt: {
  /** generates ranodm integer number */
  (maxExcluded: number): number;
  /** generates ranodm integer number */
  (minIncluded: number, maxExcluded: number): number;
} = (a: number, b?: number): number => {
  if (b === undefined)
    return Math.floor(Math.random() * a);
  else
    return Math.floor(Math.random() * (b - a)) + a;
};


export const range: {
  /** creates array with numbers from 0 to max-1 */
  (maxExcluded: number): number[];
  /** creates array with numbers from min to max-1 */
  (minIncluded: number, maxExcluded: number): number[];
} = (a: number, b?: number): number[] => {
  const arr = [];
  if (b === undefined)
    for (let i = 0; i < a; i++)
      arr.push(i);
  else
    for (let i = a; i < b; i++)
      arr.push(i);
  return arr;
};

/** zip together two arrays */
export const zip = <A, B>(arr1: A[], arr2: B[]): [A, B][] => {
  return arr1.map((k, i) => [k, arr2[i]]);
};

declare global {
  interface Array<T> {
    unique(): Array<T>;
    /**
     * faster alternative of unique for string arrays
     */
    uniqueStr(): Array<string>;

    limit(entries: number): Array<T>;
  }
}

if (!Array.prototype.unique) {
  Array.prototype.unique = function <T>(this: T[]): T[] {
    return this.filter((x, i) => this.findIndex(y => y === x) === i);
  }
  Array.prototype.uniqueStr = function (this: string[]): string[] {
    const obj: { [key: string]: true } = {};
    this.forEach(x => obj[x] = true);
    return Object.keys(obj);
  }
}
if (!Array.prototype.limit) {
  Array.prototype.limit = function <T>(this: T[], entries: number) {
    return this.filter((_, i) => i < entries);
  }
}

export const sorting = {
  number: {
    ascending: (a: number, b: number) => a - b,
    descending: (a: number, b: number) => b - a,
  } as const,
} as const;