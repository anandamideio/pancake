declare class Stack {
    private count;
    private items;
    constructor();
    push(element: unknown): void;
    add(element: unknown): void;
    pop(): undefined | unknown;
    remove(): undefined | unknown;
    peek(): undefined | unknown;
    scry(): undefined | unknown;
    isEmpty(): boolean;
    size(): number;
    length(): number;
    clear(): void;
    toArray(): [number, unknown][];
    toString(): string;
}
export = Stack;
//# sourceMappingURL=stack.d.ts.map