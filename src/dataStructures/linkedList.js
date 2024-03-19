'use strict';

const {defaultEquals} = require('../util');
const Node = require('./models/linkedListModel');

class LinkedList {
  constructor(equalsFn = defaultEquals) { // if no equality operator is passed then use the defaultEquals function
    this.count = 0; // # of element in list
    this.head = undefined;
    this.equalsFn = equalsFn; // For comparing equality between elements
  }

  add(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next; // get last item
      }
      // and assign next item to new element to make the link
      current.next = node;
    }
    this.count += 1;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next; // get last item
      }
      // and assign next item to new element to make the link
      current.next = node;
    }
    this.count += 1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  removeAt(index) {
    // check for out of bounds values
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count -= 1;
      return current.element;
    }
    return undefined;
  }

  getElementAt(index) {
    if (index>= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
      }
      this.count += 1;
      return true
    }
    return false;
  }

  insertAfter(target, value){
    const node = new Node(value);
    let currentNode = this.head;
    while (currentNode){
      if (currentNode.element === target){
        node.next = currentNode.next;
        currentNode.next = node;
        break;
      }
      currentNode = currentNode.next;
    }
    this.count += 1;
  }

  indexOf(element){
    let currentNode = this.head, index = 0;
    while (currentNode.next){
      if (currentNode.element === element){ return index; }
      index += 1;
      currentNode = currentNode.next;
    }
    return -1;
  }

  size() { return this.count; };

  isEmpty() { return this.count === 0; };

  getHead() { return this.head; }

  toTable() {
    const table = {};
    for (let i = 0; i < this.count; i++) {
      table[`Item-${i}`] = this.getElementAt(i);
    }
    return table;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    let tempString = '';
    if (this.head != null) {
      for (let i = 0; i < this.count; i++) {
        let itNode = this.getElementAt(i);
        if (typeof itNode.element === 'string') {
          if (i === 0) {
            tempString = `1: '${itNode.element}'`;
          } else {
            tempString += `, ${i + 1}: '${itNode.element}'`;
          }
        } else {
          tempString = 'Error: toString was passed something other than a string'
        }
      }
      return tempString
    } else {
      return '';
    }
  }

  toArray() {
    let tempArray = [];
    for (let i = 0; i < this.count; i++) {
      let itNode = this.getElementAt(i);
      tempArray.push(itNode.element)
    }
    return tempArray;
  }

  removeDupes(){
    const record = {};
    let check = this.head,
      previous = undefined;
    while (check){
      if (record[check.element]){
        previous.next = check.next;
        this.count -= 1;
      } else {
        record[check.element] = true;
        previous = check;
      }
      check = check.next;
    }
  }

  invert(){
    let currentNode = this.head, // <--Start at the head-<
      previousNode = undefined;
    while (currentNode){
      const next = currentNode.next; // <--The loop looks ahead at the next pointer-<
      currentNode.next = previousNode; // <--On first itt. the head's 'next' is rereferenced to NULL, and what was the head will be passed forward to be the next rereference point-<
      if (!next) break; // <--If next is pointing to NULL, we know to not go there-<
      previousNode = currentNode;
      currentNode = next;
    }
    this.head = currentNode;
  }

  forEach(callback, scope) {
    if (typeof callback !== 'function') {throw new TypeError((callback + ' is not a function'))}
    let listObject = Object(this.toArray()); // Assign the results of 'this' to List Object
    let listLength = this.size(); // Get the queues length
    let scopeArg, tempIterator = 0;
    if (arguments.length > 1) { scopeArg = arguments[1] }

    while (tempIterator < listLength) {
      let iteratorValue;
      if (tempIterator in listObject) {
        iteratorValue = listObject[tempIterator];
        callback.call(scopeArg, iteratorValue, tempIterator, listObject);
      }
      tempIterator += 1;
    }
  }
}

module.exports = LinkedList;
