"use strict";
exports.__esModule = true;

class ArrayStack {
  constructor() {
    this.cards = [];
  }

  push(element) {
    this.cards.push(element);
  };

  pop() {
    return this.cards.pop();
  };

  peek() {
    return this.cards[this.cards.length - 1];
  };

  scry() {
    return this.cards[this.cards.length - 1];
  };

  isEmpty() {
    return this.cards.length === 0;
  };

  size() {
    return this.cards.length;
  };

  clear() {
    this.cards = [];
  };

  toArray() {
    return this.cards;
  };

  toString() {
    return this.cards.toString();
  };

}
exports["default"] = ArrayStack;
