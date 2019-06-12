'use strict';

const {defaultEquals} = require('../util');
const {Node} = require('./models/linkedListModel');

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
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        node.next = current;
        previous.next = node;
      }
      this.count += 1;
      return true
    }
    return false;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  size() {
    return this.count;
  };

  isEmpty() {
    return this.size === 0;
  };

  getHead() {
    return this.head;
  }

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

module.exports.LinkedList = LinkedList;
