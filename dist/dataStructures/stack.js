/**
 * A generic Stack class that can store elements of any type.
 */
export class Stack {
    count;
    items;
    /**
      * Constructs a new Stack instance.
      */
    constructor() {
        this.count = 0;
        this.items = {};
    }
    /**
      * Pushes an element onto the stack.
      * @param element - The element to push onto the stack.
      */
    push(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    /**
      * Adds an element to the stack. This is an alias for push.
      * @param element - The element to add to the stack.
      */
    add(element) {
        this.push(element);
    }
    /**
      * Pops an element from the stack.
      * @returns The popped element, or undefined if the stack is empty.
      */
    pop() {
        if (this.isEmpty())
            return undefined;
        this.count -= 1;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    /**
      * Removes an element from the stack. This is an alias for pop.
      * @returns The removed element, or undefined if the stack is empty.
      */
    remove() {
        return this.pop();
    }
    /**
      * Peeks at the top element of the stack without removing it.
      * @returns The top element, or undefined if the stack is empty.
      */
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    /**
      * Scry at the top element of the stack without removing it. This is an alias for peek.
      * @returns The top element, or undefined if the stack is empty.
      */
    scry() {
        return this.peek();
    }
    /**
      * Checks if the stack is empty.
      * @returns True if the stack is empty, false otherwise.
      */
    isEmpty() {
        return this.count === 0;
    }
    /**
      * Gets the size of the stack.
      * @returns The size of the stack.
      */
    size() {
        return this.count;
    }
    /**
      * Gets the length of the stack. This is an alias for size.
      * @returns The length of the stack.
      */
    length() {
        return this.size();
    }
    /**
      * Clears the stack.
      */
    clear() {
        this.items = {};
        this.count = 0;
    }
    /**
      * Converts the stack to an array.
      * @returns An array representation of the stack.
      */
    toArray() {
        const itemStore = this.items;
        return Object.keys(this.items).map((key) => [Number(key), itemStore[key]]);
    }
    /**
      * Converts the stack to a string.
      * @returns A string representation of the stack.
      */
    toString() {
        if (this.isEmpty())
            return '';
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
//# sourceMappingURL=stack.js.map