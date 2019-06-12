'use strict';

const assert = require('assert');
const {LinkedListStack} = require('../dist/dataStructures/linkedListStack');
const stack = new LinkedListStack;

// .push()
describe('LinkedListStack', function() {
  describe('#push()', function () {
    it('Should add an element to the front of the stack', function () {
      stack.push(1);
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .add()
describe('LinkedListStack', function() {
  describe('#add()', function () {
    it('Works the same as push(), as it adds an element to the front of the stack', function () {
      stack.add(99);
      assert.strictEqual(stack.peek(), 99)
    })
  })
});

// .pop()
describe('LinkedListStack', function() {
  describe('#pop()', function () {
    it('Removes an element from the front of the stack', function () {
      stack.pop();
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .remove()
describe('LinkedListStack', function() {
  describe('#remove()', function () {
    it('Works the same as pop(), removes an element from the front of the stack', function () {
      stack.add(1);
      stack.add(5);
      stack.remove();
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .scry()
describe('LinkedListStack', function() {
  describe('#scry()', function () {
    it('Returns the top element of the stack', function () {
      stack.add(1);
      assert.strictEqual(stack.scry(), 1)
    })
  })
});

// .peek()
describe('LinkedListStack', function() {
  describe('#peek()', function () {
    it('Returns the top element of the stack', function () {
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .isEmpty()
describe('LinkedListStack', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the stack is empty, false otherwise', function () {
      assert.strictEqual(stack.isEmpty(), false)
    })
  })
});

// .toArray()
describe('LinkedListStack', function() {
  describe('#toArray()', function () {
    it('Converts the stack to an array', function () {
      let tempStackArray = stack.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('LinkedListStack', function() {
  describe('#toString()', function () {
    it('Converts the stack to a string', function () {
      let tempStackString = stack.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .size()
describe('LinkedListStack', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      stack.add(1);
      assert.strictEqual(stack.size(), 4)
    })
  })
});

// .length()
describe('LinkedListStack', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      stack.add(9);
      assert.strictEqual(stack.length(), 5)
    })
  })
});

// .clear()
describe('LinkedListStack', function() {
  describe('#clear()', function () {
    it('Clears the stack to empty', function () {
      stack.clear();
      stack.add(1);
      assert.strictEqual(stack.length(), 1)
    })
  })
});

