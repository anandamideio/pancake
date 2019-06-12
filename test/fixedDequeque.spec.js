'use strict';

const assert = require('assert');
const {FixedDequeue} = require('../dist/dataStructures/fixedDequeue');
const dequeue = new FixedDequeue(4);

// .shift()
describe('FixedDequeue', function() {
  describe('#shift()', function () {
    it('Adds an element to the front of the dequeue', function () {
      dequeue.shift(1);
      dequeue.shift(3);
      dequeue.shift(5);
      dequeue.shift(6);
      dequeue.unshift();
      dequeue.shift(3);
      dequeue.shift(1, 1);
      assert.strictEqual(dequeue.peekFront(), 1)
    })
  })
});

// .addFront()
describe('FixedDequeue', function() {
  describe('#addFront()', function () {
    it('Works the same as .shift(), as it adds an element to the front of the dequeue', function () {
      dequeue.removeFront();
      dequeue.addFront(33);
      dequeue.addFront(99, 1);
      assert.strictEqual(dequeue.scryFront(), 99)
    })
  })
});

// .push()
describe('FixedDequeue', function() {
  describe('#push()', function () {
    it('Adds an element to the back of the dequeue', function () {
      dequeue.pop();
      dequeue.push(96);
      dequeue.push(55, 1);
      assert.strictEqual(dequeue.peekBack(), 55)
    })
  })
});

// .addBack()
describe('FixedDequeue', function() {
  describe('#addFront()', function () {
    it('Works the same as .unshift(), as it adds an element to the back of the dequeue', function () {
      dequeue.removeBack();
      dequeue.addBack(1000);
      dequeue.addBack(69, 1);
      assert.strictEqual(dequeue.peekBack(), 69)
    })
  })
});

// .removeBack()
describe('FixedDequeue', function() {
  describe('#removeBack()', function () {
    it('Removes and element from the back of the queue', function () {
      dequeue.removeBack();
      assert.strictEqual(dequeue.scryBack(), 1000)
    })
  })
});

// .isEmpty()
describe('FixedDequeue', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the dequeue is empty, false otherwise', function () {
      assert.strictEqual(dequeue.isEmpty(), false)
    })
  })
});

// .toArray()
describe('FixedDequeue', function() {
  describe('#toArray()', function () {
    it('Converts the dequeue to an array', function () {
      let tempStackArray = dequeue.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('FixedDequeue', function() {
  describe('#toString()', function () {
    it('Converts the dequeue to a string', function () {
      let tempStackString = dequeue.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .size()
describe('FixedDequeue', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      assert.strictEqual(dequeue.size(), 3)
    })
  })
});

// .length()
describe('FixedDequeue', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      assert.strictEqual(dequeue.length(), 3)
    })
  })
});

// .isFull()
describe('FixedDequeue', function() {
  describe('#isFull()', function () {
    it('Returns true if the dequeue is full', function () {
      dequeue.addBack(1);
      assert.strictEqual(dequeue.isFull(), true)
    })
  })
});

// .clear()
describe('FixedDequeue', function() {
  describe('#clear()', function () {
    it('Clears the dequeue to empty', function () {
      dequeue.clear();
      dequeue.addFront(1);
      assert.strictEqual(dequeue.length(), 1)
    })
  })
});

