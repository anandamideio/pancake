/**
 * A generic stack class that can store elements of any type.
 */
export declare class ArrayStack<T> {
    private items;
    /**
      * Constructs a new ArrayStack instance.
      */
    constructor();
    /**
      * Pushes an element onto the top of the stack.
      * @param element - The element to push onto the stack.
      */
    push(element: T): void;
    add(element: T): void;
    /**
      * Pops an element off the top of the stack.
      * @returns The popped element, or undefined if the stack is empty.
      */
    pop(): T | undefined;
    remove(): T | undefined;
    /**
      * Peeks at the top element of the stack without removing it.
      * @returns The top element, or undefined if the stack is empty.
      */
    peek(): T | undefined;
    scry(): T | undefined;
    /**
      * Checks if the stack is empty.
      * @returns True if the stack is empty, false otherwise.
      */
    isEmpty(): boolean;
    /**
      * Gets the size of the stack.
      * @returns The size of the stack.
      */
    size(): number;
    /**
      * Clears the stack.
      */
    clear(): void;
    /**
      * Converts the stack to an array.
      * @returns An array representation of the stack.
      */
    toArray(): T[];
    /**
      * Converts the stack to a string.
      * @returns A string representation of the stack.
      */
    toString(): string;
}
//# sourceMappingURL=arrayStack.d.ts.map