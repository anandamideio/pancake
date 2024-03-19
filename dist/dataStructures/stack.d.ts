/**
 * A generic Stack class that can store elements of any type.
 */
export declare class Stack<T> {
    private count;
    private items;
    /**
      * Constructs a new Stack instance.
      */
    constructor();
    /**
      * Pushes an element onto the stack.
      * @param element - The element to push onto the stack.
      */
    push(element: T): void;
    /**
      * Adds an element to the stack. This is an alias for push.
      * @param element - The element to add to the stack.
      */
    add(element: T): void;
    /**
      * Pops an element from the stack.
      * @returns The popped element, or undefined if the stack is empty.
      */
    pop(): T | undefined;
    /**
      * Removes an element from the stack. This is an alias for pop.
      * @returns The removed element, or undefined if the stack is empty.
      */
    remove(): T | undefined;
    /**
      * Peeks at the top element of the stack without removing it.
      * @returns The top element, or undefined if the stack is empty.
      */
    peek(): T | undefined;
    /**
      * Scry at the top element of the stack without removing it. This is an alias for peek.
      * @returns The top element, or undefined if the stack is empty.
      */
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
      * Gets the length of the stack. This is an alias for size.
      * @returns The length of the stack.
      */
    length(): number;
    /**
      * Clears the stack.
      */
    clear(): void;
    /**
      * Converts the stack to an array.
      * @returns An array representation of the stack.
      */
    toArray(): [number, T][];
    /**
      * Converts the stack to a string.
      * @returns A string representation of the stack.
      */
    toString(): string;
}
//# sourceMappingURL=stack.d.ts.map