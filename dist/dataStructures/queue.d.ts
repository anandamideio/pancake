declare class Queue {
    private count;
    private lowestCount;
    private items;
    constructor();
    enqueue(element: unknown): void;
    add(element: unknown): void;
    dequeue(): undefined | unknown;
    remove(): undefined | unknown;
    peek(): undefined | unknown;
    scry(): undefined | unknown;
    isEmpty(): boolean;
    size(): number;
    length(): number;
    clear(): void;
    toString(): string;
    forEach(callback: (iteratorValue: unknown, tempIterator: number, queueItem: unknown) => any): void;
    toArray(): Array<unknown>;
}
export = Queue;
//# sourceMappingURL=queue.d.ts.map