'use strict';

const {defaultToString} = require('../util');
const {ValuePair} = require('./models/valuePair');

class Dictionary {
  constructor(toStringFunction = defaultToString) {
    this.toStringFunction = toStringFunction;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStringFunction(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStringFunction(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.toStringFunction(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStringFunction(key)];
      return true;
    }
    return false;
  }

  values() {
    return this.keyValues().map(valuePair => valuePair.value);
  }

  keys() {
    return this.keyValues().map(valuePair => valuePair.key);
  }

  keyValues() {
    return Object.values(this.table);
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) { break; }
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) { return ''; }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}
module.exports.Dictionary = Dictionary;
