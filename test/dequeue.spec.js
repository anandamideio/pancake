'use strict';

const assert = require('assert');
const {Dequeue} = require('../dist/dataStructures/dequeue');
const dequeue = new Dequeue();

// .shift()
describe('Dequeue', function() {
  describe('#shift()', function () {
    it('Adds an element to the front of the dequeue', function () {
      dequeue.shift(1);
      dequeue.shift(3);
      dequeue.shift(5);
      dequeue.shift(6);
      dequeue.unshift();
      dequeue.shift(3);
      dequeue.shift(1);
      assert.strictEqual(dequeue.peekFront(), 1)
    })
  })
});

// .addFront()
describe('Dequeue', function() {
  describe('#addFront()', function () {
    it('Works the same as .shift(), as it adds an element to the front of the dequeue', function () {
      dequeue.removeFront();
      dequeue.addFront(33);
      dequeue.addFront(99);
      assert.strictEqual(dequeue.scryFront(), 99)
    })
  })
});

// .push()
describe('Dequeue', function() {
  describe('#push()', function () {
    it('Adds an element to the back of the dequeue', function () {
      dequeue.pop();
      dequeue.push(96);
      dequeue.push(55);
      assert.strictEqual(dequeue.peekBack(), 55)
    })
  })
});

// .addBack()
describe('Dequeue', function() {
  describe('#addFront()', function () {
    it('Works the same as .unshift(), as it adds an element to the back of the dequeue', function () {
      dequeue.removeBack();
      dequeue.addBack(1000);
      dequeue.addBack(69);
      assert.strictEqual(dequeue.peekBack(), 69)
    })
  })
});

// .removeBack()
describe('Dequeue', function() {
  describe('#removeBack()', function () {
    it('Removes and element from the back of the queue', function () {
      dequeue.removeBack();
      assert.strictEqual(dequeue.scryBack(), 1000)
    })
  })
});

// .isEmpty()
describe('Dequeue', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the dequeue is empty, false otherwise', function () {
      assert.strictEqual(dequeue.isEmpty(), false)
    })
  })
});

// .toArray()
describe('Dequeue', function() {
  describe('#toArray()', function () {
    it('Converts the dequeue to an array', function () {
      let tempStackArray = dequeue.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('Dequeue', function() {
  describe('#toString()', function () {
    it('Converts the dequeue to a string', function () {
      let tempStackString = dequeue.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .size()
describe('Dequeue', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      assert.strictEqual(dequeue.size(), 7)
    })
  })
});

// .length()
describe('Dequeue', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      assert.strictEqual(dequeue.length(), 7)
    })
  })
});


// .clear()
describe('Dequeue', function() {
  describe('#clear()', function () {
    it('Clears the dequeue to empty', function () {
      dequeue.clear();
      dequeue.addFront(1);
      assert.strictEqual(dequeue.length(), 1)
    })
  })
});

