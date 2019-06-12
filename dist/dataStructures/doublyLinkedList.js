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
module.exports.DoublyNode = DoublyNode;

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

  insertAfter(target, value){
    const node = new DoublyNode(value);
    let currentNode = this.head;
    while (currentNode){
      if (currentNode.element === target){
        currentNode.next.prev = node;
        node.next = currentNode.next;
        currentNode.next = node;
        node.prev = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    this.count += 1;
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

  removeDupes(){
    const record = {};
    let check = this.head,
      previousNode = undefined;
    while (check){
      if (record[check.element]){
        previousNode.next.prev = check.prev;
        previousNode.next = check.next;
        this.count -= 1;
      } else {
        record[check.element] = true;
        previousNode = check;
      }
      check = check.next;
    }
  }

  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }

  invert(){
    let currentNode = this.head, // <--Start at the head-<
      previousNode = undefined;
    while (currentNode){
      const next = currentNode.next; // <--The loop looks ahead at the next pointer-<
      currentNode.prev = currentNode.next;
      currentNode.next = previousNode; // <--On first itt. the head's 'next' is rereferenced to NULL, and what was the head will be passed forward to be the next rereference point-<
      if (!next) break; // <--If next is pointing to NULL, we know to not go there-<
      previousNode = currentNode;
      currentNode = next;
    }
    this.tail = this.head;
    this.head = currentNode;
  }

  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString}, ${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}
module.exports.DoubleyLinkedList = DoublyLinkedList;
