declare class Queue {
    private count;
    private lowestCount;
    private items;
    constructor();
    enqueue(element: any): void;
    add(element: any): void;
    dequeue(): any;
    remove(): any;
    peek(): any;
    scry(): any;
    isEmpty(): boolean;
    size(): number;
    length(): number;
    clear(): void;
    toString(): string;
    toArray(): any[];
    forEach(callback: any, scope: any): void;
}
