"use strict";

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
  };

  add(element) {
    this.items[this.count] = element;
    this.count += 1;
  }

  pop() {
    if (this.isEmpty()) { return undefined; }
    this.count  -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };

  remove() {
    if (this.isEmpty()) { return undefined; }
    this.count  -= 1;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) { return undefined; }
    return this.items[this.count - 1];
  };

  scry() {
    if (this.isEmpty()) { return undefined; }
    return this.items[this.count - 1];
  };

  isEmpty() {
    return this.count === 0;
  };

  size() {
    return this.count;
  };

  length() {
    return this.count;
  }

  clear() {
    while (!this.isEmpty()) { this.pop(); }
    this.count = 0;
  };

  toArray() {
    let itemStore = this.items;
    let transformer = Object.keys(this.items).map(function (key) {
      return [Number(key), itemStore[key]]
    });
    return transformer;
  }

  toString() {
    if (this.isEmpty()) { return ''; }
    let objString = "" + this.items[0];
    for (let i = 1; i < this.count; i++) { objString = objString + "," + this.items[i]; }
    return objString;
  };
}

module.exports = Stack;
