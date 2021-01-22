class Stack {
  private count: number;
  private items: {[key: string]: unknown};

  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element: unknown): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  add(element: unknown): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop(): undefined|unknown {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  remove(): undefined|unknown {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek(): undefined|unknown {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  scry(): undefined|unknown {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  length(): number {
    return this.count;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  }

  toArray() {
    const itemStore: { [p: string]: unknown } = this.items;
    return Object.keys(this.items).map((key: string): [number, unknown] => [Number(key), itemStore[key]]);
  }

  toString(): string {
    if (this.isEmpty()) return '';
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

export = Stack;
