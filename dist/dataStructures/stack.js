"use strict";
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    add(element) {
        this.items[this.count] = element;
        this.count += 1;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        this.count -= 1;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    remove() {
        if (this.isEmpty())
            return undefined;
        this.count -= 1;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    scry() {
        if (this.isEmpty())
            return undefined;
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    length() {
        return this.count;
    }
    clear() {
        this.items = {};
        this.count = 0;
    }
    toArray() {
        const itemStore = this.items;
        return Object.keys(this.items).map((key) => [Number(key), itemStore[key]]);
    }
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
module.exports = Stack;
//# sourceMappingURL=stack.js.map