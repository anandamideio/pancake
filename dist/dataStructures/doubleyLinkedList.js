'use strict';

const {defaultEquals} = require('../util');
const {Node} = require('./models/linkedListModel');
const {LinkedList} = require('./linkedList');

class DoublyNode extends Node{
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined
  };

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count += 1;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head;
          this.head.prev = node;
          this.head = node;
        }
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count += 1;
      return true
    }
    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next; // If there is only one item we update the tail as well
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          this.head.prev = undefined;
        }
      } else if (index === this.count - 1) { // last item
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = undefined;
      } else {
        current = this.getElementAt(index);
        const previous = current.prev; // link previous with current's next -- skip to remove it
        previous.next = current.next;
        current.next.prev = previous;
      }
      this.count -= 1;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head, index = 0;
    while (current != null) {
      if (this.equalsFn(element, current.element)) { return index; }
      index += 1;
      current = current.next;
    }
    return -1;
  };

  getTail() {
    return this.tail;
  }
}
