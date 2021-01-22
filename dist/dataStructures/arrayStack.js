"use strict";
class ArrayStack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    add(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        return this.items.pop();
    }
    remove() {
        if (this.isEmpty())
            return undefined;
        return this.items.pop();
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.items.length - 1];
    }
    scry() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    length() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    toArray() {
        return this.items;
    }
    toString() {
        return this.items.toString();
    }
}
module.exports = ArrayStack;
//# sourceMappingURL=arrayStack.js.map