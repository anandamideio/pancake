'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

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

  length() {
    return this.items.size();
  }

  clear() {
    this.items.clear();
  }

  toArray() {
    let itemStore = this.items;
    let transformer = Object.keys(this.items).map(function (key) {
      return [Number(key), itemStore[key]]
    });
    return transformer;
  }

  toString() {
    return this.items.toString();
  }
}

module.exports.LinkedListStack = LinkedListStack;
