/**
 * Stack
 */
class Stack<T> {
  private count: number;
  private items: {[key: string]: any};

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: T): void {
    this.items[this.count] = element;
    this.count += 1;
  };

  add(element: T): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop(): undefined|T {
    if (this.isEmpty()) return undefined;
    this.count  -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };

  remove(): undefined|T {
    if (this.isEmpty()) return undefined;
    this.count  -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  };

  scry(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  };

  isEmpty(): boolean {
    return this.count === 0;
  };

  size(): number {
    return this.count;
  };

  length(): number {
    return this.count;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  };

  toArray() {
    let itemStore: { [p: string]: any } = this.items;
    return Object.keys(this.items).map(function (key: string): [number, any] {
      return [Number(key), itemStore[key]]
    });
  }

  toString(): string {
    if (this.isEmpty()) return '';
    let objString: string = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  };
}

module.exports = Stack;
