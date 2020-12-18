export class ArrayStack {
  private items: any[];


  constructor() {
    this.items = [];
  }

  push(element: any): void {
    this.items.push(element);
  };

  add(element: any): void {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  };

  remove() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  };

  scry() {
    return this.items[this.items.length - 1];
  };

  isEmpty(): boolean {
    return this.items.length === 0;
  };

  size() {
    return this.items.length;
  };

  length() {
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  };

  toArray() {
    return this.items;
  };

  toString() {
    return this.items.toString();
  };

}
export default ArrayStack;
