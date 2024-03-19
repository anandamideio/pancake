/**
 * A generic Queue class that can store elements of any type.
 */
export class Queue<T> {
  private count: number;
  private lowestCount: number;
  private items: { [key: number]: T };

  /**
    * Constructs a new Queue instance.
    */
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  /**
    * Enqueues an element to the end of the queue.
    * @param element - The element to enqueue.
    */
  enqueue(element: T): void {
    this.items[this.count] = element;
    this.count += 1;
  }

  /**
    * Adds an element to the queue. This is an alias for enqueue.
    * @param element - The element to add to the queue.
    */
  add(element: T): void {
    this.enqueue(element);
  }

  /**
    * Dequeues an element from the front of the queue.
    * @returns The dequeued element, or undefined if the queue is empty.
    */
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  /**
    * Removes an element from the queue. This is an alias for dequeue.
    * @returns The removed element, or undefined if the queue is empty.
    */
  remove(): T | undefined {
    return this.dequeue();
  }

  /**
    * Peeks at the front element of the queue without removing it.
    * @returns The front element, or undefined if the queue is empty.
    */
  peek(): T | undefined {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  /**
    * Scry at the front element of the queue without removing it. This is an alias for peek.
    * @returns The front element, or undefined if the queue is empty.
    */
  scry(): T | undefined {
    return this.peek();
  }

  /**
    * Checks if the queue is empty.
    * @returns True if the queue is empty, false otherwise.
    */
  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  /**
    * Gets the size of the queue.
    * @returns The size of the queue.
    */
  size(): number {
    return this.count - this.lowestCount;
  }

  /**
    * Gets the length of the queue. This is an alias for size.
    * @returns The length of the queue.
    */
  length(): number {
    return this.size();
  }

  /**
    * Clears the queue.
    */
  clear(): void {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  /**
    * Converts the queue to an array.
    * @returns An array representation of the queue.
    */
  toArray(): T[] {
    return Object.values(this.items)
  }

  /**
    * Converts the queue to a string.
    * @returns A string representation of the queue.
    */
  toString(): string {
    if (this.isEmpty()) return '';
    const values = Object.values(this.items).slice(this.lowestCount, this.count);
    return values.join(', ');
  }

  /**
   * Asynchronously generates a string representation of the queue, good for large queues.
   * @returns An asynchronous generator that yields chunks of the string representation.
   */
  async *asyncToStringGenerator() {
    if (this.isEmpty()) return;
    const values = Object.values(this.items);
    let currentIndex = this.lowestCount;
    const chunkSize = 100; // Adjust based on your needs

    while (currentIndex < this.count) {
      const chunk = values.slice(currentIndex, currentIndex + chunkSize).join(', ');
      yield chunk;
      currentIndex += chunkSize;
    }
  }

  /**
   * Converts the queue to a string asynchronously.
   * 
   * @returns A promise that resolves to the string representation of the queue.
   */
  async toStringAsync(): Promise<string> {
    let result = '';
    for await (const chunk of this.asyncToStringGenerator()) {
      result += chunk;
    }
    return result;
  }

  /**
   * Iterates over the elements in the queue.
   * @param callback - The callback function to execute for each element.
   */
  forEach(callback: (iteratorValue: T, tempIterator: number, queueItem: Record<string, T>) => any): void {
    if (this == null) throw new TypeError('"this" is null or not defined');
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);

    const queueObject = Object(this); // Assign the results of 'this' to queueObject
    const keys = Object.keys(queueObject.items); // Get an array of keys
    const queueLength: number = keys.length; // Get the queue's length
    let scopeArg;
    if (arguments.length > 1) scopeArg = arguments[1];

    for (let tempIterator = 0; tempIterator < queueLength; tempIterator++) {
      const key = keys[tempIterator];
      const iteratorValue = queueObject.items[key];
      callback.call(scopeArg, iteratorValue, Number(key), queueObject.items);
    }
  }

  /**
   * Asynchronously iterates over each item in the queue and executes the provided callback function.
   * @param callback - The callback function to be executed for each item in the queue.
   * @returns A promise that resolves when all iterations are complete.
   */
  async *asyncForEachGenerator(callback: (iteratorValue: T, tempIterator: number, queueItem: Record<string, T>) => Promise<any>) {
    if (this == null) throw new TypeError('"this" is null or not defined');
    if (typeof callback !== 'function') throw new TypeError(`${callback} is not a function`);

    const queueObject = Object(this); // Assign the results of 'this' to queueObject
    const keys = Object.keys(queueObject.items); // Get an array of keys
    const queueLength: number = keys.length; // Get the queue's length

    for (let tempIterator = 0; tempIterator < queueLength; tempIterator++) {
      const key = keys[tempIterator];
      const iteratorValue = queueObject.items[key];
      yield callback.call(undefined, iteratorValue, Number(key), queueObject.items);
    }
  }

  async asyncForEach(callback: (iteratorValue: unknown, tempIterator: number, queueItem: unknown) => Promise<any>): Promise<void> {
    for await (const _ of this.asyncForEachGenerator(callback)) {
      // The generator yields each item, so we don't need to do anything here
      // The purpose of this function is to allow for async callback execution
    }
  }

  /**
    * Iterates over the elements in the queue in reverse order.
    * @param callback - The callback function to execute for each element.
    */
  forEachReverse(callback: (element: T, index: number) => void): void {
    if (this.isEmpty()) return;
    const keys = Object.keys(this.items).reverse() as Array<keyof T>;
    for (const key of keys) {
      const index = Number(key) - this.lowestCount;
      callback(this.items[Number(key)], index);
    }
  }


  /**
    * Maps the elements in the queue to a new array.
    * @param callback - The callback function to execute for each element.
    * @returns A new array with the results of calling the callback function for each element.
    */
  map(callback: (element: T, index: number) => T): T[] {
    return this.toArray().map((element, index) => callback(element, index));
  }


  /**
    * Filters the elements in the queue based on a condition.
    * @param callback - The callback function to execute for each element.
    * @returns A new array with the elements that pass the test implemented by the provided function.
    */
  filter(callback: (element: T, index: number) => boolean): T[] {
    return this.toArray().filter((element, index) => callback(element, index));
  }


  /**
    * Reduces the elements in the queue to a single value.
    * @param callback - The callback function to execute for each element.
    * @param initialValue - The initial value for the accumulator.
    * @returns The accumulated value.
    */
  reduce(callback: (accumulator: T, element: T, index: number) => T, initialValue: T): T {
    return this.toArray().reduce((accumulator, element, index) => callback(accumulator, element, index), initialValue);
  }


  /**
    * Finds the first element in the queue that satisfies the provided testing function.
    * @param callback - The callback function to execute for each element.
    * @returns The first element that satisfies the testing function, or undefined if no such element is found.
    */
  find(callback: (element: T, index: number) => boolean): T | undefined {
    return this.toArray().find((element, index) => callback(element, index));
  }


  /**
    * Checks if at least one element in the queue satisfies the provided testing function.
    * @param callback - The callback function to execute for each element.
    * @returns True if at least one element satisfies the testing function, false otherwise.
    */
  some(callback: (element: T, index: number) => boolean): boolean {
    return this.toArray().some((element, index) => callback(element, index));
  }


  /**
    * Checks if all elements in the queue satisfy the provided testing function.
    * @param callback - The callback function to execute for each element.
    * @returns True if all elements satisfy the testing function, false otherwise.
    */
  every(callback: (element: T, index: number) => boolean): boolean {
    return this.toArray().every((element, index) => callback(element, index));
  }

}
