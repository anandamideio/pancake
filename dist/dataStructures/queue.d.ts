declare class Queue<T> {
    private count;
    private lowestCount;
    private items;
    constructor();
    enqueue(element: T): void;
    add(element: T): void;
    dequeue(): undefined | T;
    remove(): undefined | T;
    peek(): undefined | T;
    scry(): undefined | T;
    isEmpty(): boolean;
    size(): number;
    length(): number;
    clear(): void;
    toString(): string;
    forEach(callback: (iteratorValue: T, tempIterator: number, queueItem: T) => any): void;
    toArray(): Array<T>;
}
export = Queue;
