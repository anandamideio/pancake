'use strict';

const assert = require('assert');
const Queue = require('../dist/dataStructures/queue');
const queue = new Queue;

// .enqueue()
describe('Queue', function() {
  describe('#enqueue()', function () {
    it('Adds an element to the back of the queue', function () {
      queue.enqueue(1);
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .add()
describe('Queue', function() {
  describe('#add()', function () {
    it('Works the same as .enqueue(), as it adds an element to the back of the queue', function () {
      queue.add(99);
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .dequeue()
describe('Queue', function() {
  describe('#dequeue()', function () {
    it('Removes an element from the front of the queue', function () {
      queue.dequeue();
      assert.strictEqual(queue.peek(), 99)
    })
  })
});

// .remove()
describe('Queue', function() {
  describe('#remove()', function () {
    it('Works the same as .dequeue(), removes an element from the front of the queue', function () {
      queue.add(1);
      queue.add(5);
      queue.remove();
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .scry()
describe('Queue', function() {
  describe('#scry()', function () {
    it('Returns the element at the front of the queue', function () {
      queue.add(1);
      assert.strictEqual(queue.scry(), 1)
    })
  })
});

// .peek()
describe('Queue', function() {
  describe('#peek()', function () {
    it('Returns the element at the front of the queue', function () {
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .isEmpty()
describe('Queue', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the queue is empty, false otherwise', function () {
      assert.strictEqual(queue.isEmpty(), false)
    })
  })
});

// .toArray()
describe('Queue', function() {
  describe('#toArray()', function () {
    it('Converts the queue to an array', function () {
      let tempStackArray = queue.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('Queue', function() {
  describe('#toString()', function () {
    it('Converts the queue to a string', function () {
      let tempStackString = queue.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .size()
describe('Queue', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      queue.add(1);
      assert.strictEqual(queue.size(), 4)
    })
  })
});

// .length()
describe('Queue', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      queue.add(9);
      assert.strictEqual(queue.length(), 5)
    })
  })
});

// .clear()
describe('Queue', function() {
  describe('#clear()', function () {
    it('Clears the queue to empty', function () {
      queue.clear();
      queue.add(1);
      assert.strictEqual(queue.length(), 1)
    })
  })
});

