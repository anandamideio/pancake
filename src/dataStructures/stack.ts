/**
 * A generic Stack class that can store elements of any type.
 */
export class Stack<T> {
  private count: number;
  private items: { [key: string]: T };

  /**
    * Constructs a new Stack instance.
    */
  constructor() {
    this.count = 0;
    this.items = {};
  }

  /**
    * Pushes an element onto the stack.
    * @param element - The element to push onto the stack.
    */
  push(element: T): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  /**
    * Adds an element to the stack. This is an alias for push.
    * @param element - The element to add to the stack.
    */
  add(element: T): void {
    this.push(element);
  }

  /**
    * Pops an element from the stack.
    * @returns The popped element, or undefined if the stack is empty.
    */
  pop(): T | undefined {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  /**
    * Removes an element from the stack. This is an alias for pop.
    * @returns The removed element, or undefined if the stack is empty.
    */
  remove(): T | undefined {
    return this.pop();
  }

  /**
    * Peeks at the top element of the stack without removing it.
    * @returns The top element, or undefined if the stack is empty.
    */
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  /**
    * Scry at the top element of the stack without removing it. This is an alias for peek.
    * @returns The top element, or undefined if the stack is empty.
    */
  scry(): T | undefined {
    return this.peek();
  }

  /**
    * Checks if the stack is empty.
    * @returns True if the stack is empty, false otherwise.
    */
  isEmpty(): boolean {
    return this.count === 0;
  }

  /**
    * Gets the size of the stack.
    * @returns The size of the stack.
    */
  size(): number {
    return this.count;
  }

  /**
    * Gets the length of the stack. This is an alias for size.
    * @returns The length of the stack.
    */
  length(): number {
    return this.size();
  }

  /**
    * Clears the stack.
    */
  clear(): void {
    this.items = {};
    this.count = 0;
  }

  /**
    * Converts the stack to an array.
    * @returns An array representation of the stack.
    */
  toArray(): [number, T][] {
    const itemStore: { [p: string]: T } = this.items;
    return Object.keys(this.items).map((key: string): [number, T] => [Number(key), itemStore[key]]);
  }

  /**
    * Converts the stack to a string.
    * @returns A string representation of the stack.
    */
  toString(): string {
    if (this.isEmpty()) return '';
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
