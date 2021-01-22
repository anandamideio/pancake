class ArrayStack<T> {
  private items: Array<T>;

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  add(element: T): void {
    this.items.push(element);
  }

  pop(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  remove(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items.pop();
  }

  peek(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  scry(): undefined|T {
    if (this.isEmpty()) return undefined;
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  length(): number {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toArray(): Array<T> {
    return this.items;
  }

  toString(): string {
    return this.items.toString();
  }
}
export = ArrayStack;
