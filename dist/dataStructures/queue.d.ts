/**
 * A generic Queue class that can store elements of any type.
 */
export declare class Queue<T> {
    private count;
    private lowestCount;
    private items;
    /**
      * Constructs a new Queue instance.
      */
    constructor();
    /**
      * Enqueues an element to the end of the queue.
      * @param element - The element to enqueue.
      */
    enqueue(element: T): void;
    /**
      * Adds an element to the queue. This is an alias for enqueue.
      * @param element - The element to add to the queue.
      */
    add(element: T): void;
    /**
      * Dequeues an element from the front of the queue.
      * @returns The dequeued element, or undefined if the queue is empty.
      */
    dequeue(): T | undefined;
    /**
      * Removes an element from the queue. This is an alias for dequeue.
      * @returns The removed element, or undefined if the queue is empty.
      */
    remove(): T | undefined;
    /**
      * Peeks at the front element of the queue without removing it.
      * @returns The front element, or undefined if the queue is empty.
      */
    peek(): T | undefined;
    /**
      * Scry at the front element of the queue without removing it. This is an alias for peek.
      * @returns The front element, or undefined if the queue is empty.
      */
    scry(): T | undefined;
    /**
      * Checks if the queue is empty.
      * @returns True if the queue is empty, false otherwise.
      */
    isEmpty(): boolean;
    /**
      * Gets the size of the queue.
      * @returns The size of the queue.
      */
    size(): number;
    /**
      * Gets the length of the queue. This is an alias for size.
      * @returns The length of the queue.
      */
    length(): number;
    /**
      * Clears the queue.
      */
    clear(): void;
    /**
      * Converts the queue to an array.
      * @returns An array representation of the queue.
      */
    toArray(): T[];
    /**
      * Converts the queue to a string.
      * @returns A string representation of the queue.
      */
    toString(): string;
    /**
     * Asynchronously generates a string representation of the queue, good for large queues.
     * @returns An asynchronous generator that yields chunks of the string representation.
     */
    asyncToStringGenerator(): AsyncGenerator<string, void, unknown>;
    /**
     * Converts the queue to a string asynchronously.
     *
     * @returns A promise that resolves to the string representation of the queue.
     */
    toStringAsync(): Promise<string>;
    /**
     * Iterates over the elements in the queue.
     * @param callback - The callback function to execute for each element.
     */
    forEach(callback: (iteratorValue: T, tempIterator: number, queueItem: Record<string, T>) => any): void;
    /**
     * Asynchronously iterates over each item in the queue and executes the provided callback function.
     * @param callback - The callback function to be executed for each item in the queue.
     * @returns A promise that resolves when all iterations are complete.
     */
    asyncForEachGenerator(callback: (iteratorValue: T, tempIterator: number, queueItem: Record<string, T>) => Promise<any>): AsyncGenerator<any, void, unknown>;
    asyncForEach(callback: (iteratorValue: unknown, tempIterator: number, queueItem: unknown) => Promise<any>): Promise<void>;
    /**
      * Iterates over the elements in the queue in reverse order.
      * @param callback - The callback function to execute for each element.
      */
    forEachReverse(callback: (element: T, index: number) => void): void;
    /**
      * Maps the elements in the queue to a new array.
      * @param callback - The callback function to execute for each element.
      * @returns A new array with the results of calling the callback function for each element.
      */
    map(callback: (element: T, index: number) => T): T[];
    /**
      * Filters the elements in the queue based on a condition.
      * @param callback - The callback function to execute for each element.
      * @returns A new array with the elements that pass the test implemented by the provided function.
      */
    filter(callback: (element: T, index: number) => boolean): T[];
    /**
      * Reduces the elements in the queue to a single value.
      * @param callback - The callback function to execute for each element.
      * @param initialValue - The initial value for the accumulator.
      * @returns The accumulated value.
      */
    reduce(callback: (accumulator: T, element: T, index: number) => T, initialValue: T): T;
    /**
      * Finds the first element in the queue that satisfies the provided testing function.
      * @param callback - The callback function to execute for each element.
      * @returns The first element that satisfies the testing function, or undefined if no such element is found.
      */
    find(callback: (element: T, index: number) => boolean): T | undefined;
    /**
      * Checks if at least one element in the queue satisfies the provided testing function.
      * @param callback - The callback function to execute for each element.
      * @returns True if at least one element satisfies the testing function, false otherwise.
      */
    some(callback: (element: T, index: number) => boolean): boolean;
    /**
      * Checks if all elements in the queue satisfy the provided testing function.
      * @param callback - The callback function to execute for each element.
      * @returns True if all elements satisfy the testing function, false otherwise.
      */
    every(callback: (element: T, index: number) => boolean): boolean;
}
//# sourceMappingURL=queue.d.ts.map