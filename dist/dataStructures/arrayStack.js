/**
 * A generic stack class that can store elements of any type.
 */
export class ArrayStack {
    items;
    /**
      * Constructs a new ArrayStack instance.
      */
    constructor() {
        this.items = [];
    }
    /**
      * Pushes an element onto the top of the stack.
      * @param element - The element to push onto the stack.
      */
    push(element) {
        this.items.push(element);
    }
    add(element) {
        this.items.push(element);
    }
    /**
      * Pops an element off the top of the stack.
      * @returns The popped element, or undefined if the stack is empty.
      */
    pop() {
        return this.items.pop();
    }
    remove() {
        return this.items.pop();
    }
    /**
      * Peeks at the top element of the stack without removing it.
      * @returns The top element, or undefined if the stack is empty.
      */
    peek() {
        return this.items[this.items.length - 1];
    }
    scry() {
        return this.items[this.items.length - 1];
    }
    /**
      * Checks if the stack is empty.
      * @returns True if the stack is empty, false otherwise.
      */
    isEmpty() {
        return this.items.length === 0;
    }
    /**
      * Gets the size of the stack.
      * @returns The size of the stack.
      */
    size() {
        return this.items.length;
    }
    /**
      * Clears the stack.
      */
    clear() {
        this.items = [];
    }
    /**
      * Converts the stack to an array.
      * @returns An array representation of the stack.
      */
    toArray() {
        return [...this.items]; // Return a copy to avoid mutation
    }
    /**
      * Converts the stack to a string.
      * @returns A string representation of the stack.
      */
    toString() {
        return this.items.toString();
    }
}
//# sourceMappingURL=arrayStack.js.map