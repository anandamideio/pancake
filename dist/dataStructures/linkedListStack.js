'use strict';

const DoublyLinkedList = require('./doubleyLinkedList');

class LinkedListStack{
  constructor() {
    this.items = new DoublyLinkedList;
  }
  push(element) {
    this.items.push(element);
  }

  add(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) { return undefined; }
    return this.items.removeAt(this.size() - 1);
  }

  remove() {
    if (this.isEmpty()) { return undefined; }
    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) { return undefined; }
    return this.items.getElementAt(this.size() - 1).element;
  }

  scry() {
    if (this.isEmpty()) { return undefined; }
    return this.items.getElementAt(this.size() - 1).element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}

module.exports.LinkedListStack = LinkedListStack;
