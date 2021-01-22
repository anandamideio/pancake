declare class ArrayStack<T> {
    private items;
    constructor();
    push(element: T): void;
    add(element: T): void;
    pop(): undefined | T;
    remove(): undefined | T;
    peek(): undefined | T;
    scry(): undefined | T;
    isEmpty(): boolean;
    size(): number;
    length(): number;
    clear(): void;
    toArray(): Array<T>;
    toString(): string;
}
