'use strict';

class FixedQueue {
  constructor(size) {
    if (typeof size !== 'number'){ throw new TypeError('Only numbers are allowed for first param -> maxQueueSize')}
    if (size <= 1 ){ throw new TypeError('maxQueueSize must be greater than 1')}
    this.maxCount = size;
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element, force) {
    let willForce;
    if(force != null) {willForce = true}
    if(willForce === true && this.size() === this.maxCount){
      this.dequeue();
      this.items[this.count] = element;
      this.count += 1;
    } else if (this.size() === this.maxCount) {
      throw new TypeError('Queue is full')
    } else {
      this.items[this.count] = element;
      this.count += 1;
    }
  }

  add(element, force) {
    let willForce;
    if(force != null) {willForce = true}
    if(willForce === true && this.size() === this.maxCount){
      this.dequeue();
      this.items[this.count] = element;
      this.count += 1;
    } else if (this.size() === this.maxCount) {
      throw new TypeError('Queue is full')
    } else {
      this.items[this.count] = element;
      this.count += 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) { throw new TypeError('The queue is empty') } // Return undefined if the queue is empty
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  remove() {
    if (this.isEmpty()) { throw new TypeError('The queue is empty') } // Return undefined if the queue is empty
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount += 1;
    return result;
  }

  peek() {
    if (this.isEmpty()) { return undefined; } // Return undefined if the queue is empty
    return this.items[this.lowestCount];
  }

  scry() {
    if (this.isEmpty()) { return undefined; } // Return undefined if the queue is empty
    return this.items[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0; // Returns true if empty and false otherwise
  }

  isFull() {
    return this.size() === this.maxCount;
  }

  size() {
    return this.count - this.lowestCount;
  }

  length() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) { return ''; } // Return blank if the queue is empty
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount +1; i < this.count; i++){
      objString = `${objString}, ${this.items[i]}`
    }
    return objString;
  }

  toArray() {
    let tempArray = [];
    this.forEach((item) =>{
      tempArray.push(item);
    });
    return tempArray;
  }

  forEach(callback, scope) {
    if (this == null) {throw new TypeError('this is null or not defined')}
    if (typeof callback !== 'function') {throw new TypeError((callback + ' is not a function'))}
    let queueObject = Object(this); // Assign the results of 'this' to quequeObject
    let queueLength = this.size(); // Get the queues length
    let scopeArg, tempIterator = 0;
    if (arguments.length > 1) { scopeArg = arguments[1] }

    while (tempIterator < queueLength) {
      let iteratorValue;
      if (tempIterator in queueObject.items) {
        iteratorValue = queueObject.items[tempIterator];
        callback.call(scopeArg, iteratorValue, tempIterator, queueObject.items);
      }
      tempIterator += 1;
    }
  }
}

module.exports.FixedQueue = FixedQueue;
