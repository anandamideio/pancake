"use strict";

class Stack {
  constructor() {
    this.count = 0;
    this.cards = {};
  }

  push(element) {
    this.cards[this.count] = element;
    this.count++;
  };

  pop() {
    if (this.isEmpty()) { return undefined; }
    this.count  -= 1;
    const result = this.cards[this.count];
    delete this.cards[this.count];
    return result;
  };

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.cards[this.count - 1];
  };

  scry() {
    if (this.isEmpty()) { return undefined; }
    return this.cards[this.count - 1];
  };

  isEmpty() {
    return this.count === 0;
  };

  size() {
    return this.count;
  };

  clear() {
    while (!this.isEmpty()) { this.pop(); }
    this.count = 0;
  };

  toString() {
    if (this.isEmpty()) { return ''; }
    let objString = "" + this.cards[0];
    for (let i = 1; i < this.count; i++) { objString = objString + "," + this.cards[i]; }
    return objString;
  };
}

module.exports.Stack = Stack;
