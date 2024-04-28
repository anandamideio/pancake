'use strict';

const assert = require('assert');
const FixedQueue = require('../dist/dataStructures/fixedQueue');
const queue = new FixedQueue(4);

// .enqueue()
describe('FixedQueue', function() {
  describe('#enqueue()', function () {
    it('Adds an element to the back of the queue', function () {
      queue.enqueue(1);
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .add()
describe('FixedQueue', function() {
  describe('#add()', function () {
    it('Works the same as .enqueue(), as it adds an element to the back of the queue', function () {
      queue.add(99);
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .dequeue()
describe('FixedQueue', function() {
  describe('#dequeue()', function () {
    it('Removes an element from the front of the queue', function () {
      queue.dequeue();
      assert.strictEqual(queue.peek(), 99)
    })
  })
});

// .remove()
describe('FixedQueue', function() {
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
describe('FixedQueue', function() {
  describe('#scry()', function () {
    it('Returns the element at the front of the queue', function () {
      queue.add(1);
      assert.strictEqual(queue.scry(), 1)
    })
  })
});

// .peek()
describe('FixedQueue', function() {
  describe('#peek()', function () {
    it('Returns the element at the front of the queue', function () {
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .isEmpty()
describe('FixedQueue', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the queue is empty, false otherwise', function () {
      assert.strictEqual(queue.isEmpty(), false)
    })
  })
});

// .toArray()
describe('FixedQueue', function() {
  describe('#toArray()', function () {
    it('Converts the queue to an array', function () {
      let tempStackArray = queue.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('FixedQueue', function() {
  describe('#toString()', function () {
    it('Converts the queue to a string', function () {
      let tempStackString = queue.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .size()
describe('FixedQueue', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      queue.add(1);
      assert.strictEqual(queue.size(), 4)
    })
  })
});

// .length()
describe('FixedQueue', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      assert.strictEqual(queue.length(), 4)
    })
  })
});

// .isFull()
describe('FixedQueue', function() {
  describe('#isFull()', function () {
    it('Returns true if the queue is full', function () {
      assert.strictEqual(queue.isFull(), true)
    })
  })
});

// .enqueue() Force
describe('FixedQueue', function() {
  describe('#enqueue(1, 1)', function () {
    it('Adds an element to the back of the queue but forcing itself if full', function () {
      queue.enqueue(1, 1);
      assert.strictEqual(queue.peek(), 5)
    })
  })
});

// .add() Force
describe('FixedQueue', function() {
  describe('#add(99, 1)', function () {
    it('Works the same as .enqueue(), as it adds an element to the back of the queue but forcing itself if full', function () {
      queue.add(99, 1);
      assert.strictEqual(queue.peek(), 1)
    })
  })
});

// .clear()
describe('FixedQueue', function() {
  describe('#clear()', function () {
    it('Clears the queue to empty', function () {
      queue.clear();
      queue.add(1);
      assert.strictEqual(queue.length(), 1)
    })
  })
});

