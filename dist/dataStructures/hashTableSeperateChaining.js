'use strict';

const {defaultToString} = require('../util');
const {LinkedList} = require('./linkedList');
const {ValuePair} = require('./models/valuePair');

class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    let count = 0;
    Object.values(this.table).forEach(linkedList => {
      count += linkedList.size();
    });
    return count;
  }

  clear() {
    this.table = {};
  }

  getTable() {
    return this.table;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
        ].toString()}}`;
    }
    return objString;
  }
}
module.exports = HashTableSeparateChaining;
