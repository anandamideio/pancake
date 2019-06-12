'use strict';

const assert = require('assert');
const {ArrayStack} = require('../dist/dataStructures/arrayStack');
const stack = new ArrayStack;

// .push()
  describe('ArrayStack', function() {
    describe('#push()', function () {
      it('Should add an element to the front of the stack', function () {
        stack.push(1);
        assert.strictEqual(stack.peek(), 1)
      })
    })
  });

// .add()
describe('ArrayStack', function() {
  describe('#add()', function () {
    it('Works the same as push(), as it adds an element to the front of the stack', function () {
      stack.add(99);
      assert.strictEqual(stack.peek(), 99)
    })
  })
});

// .pop()
describe('ArrayStack', function() {
  describe('#pop()', function () {
    it('Removes an element from the front of the stack', function () {
      stack.remove();
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .remove()
describe('ArrayStack', function() {
  describe('#remove()', function () {
    it('Works the same as pop(), removes an element from the front of the stack', function () {
      stack.remove();
      assert.strictEqual(stack.peek(), undefined)
    })
  })
});

// .scry()
describe('ArrayStack', function() {
  describe('#scry()', function () {
    it('Returns the top element of the stack', function () {
      stack.add(1);
      assert.strictEqual(stack.scry(), 1)
    })
  })
});

// .peek()
describe('ArrayStack', function() {
  describe('#peek()', function () {
    it('Returns the top element of the stack', function () {
      assert.strictEqual(stack.peek(), 1)
    })
  })
});

// .isEmpty()
describe('ArrayStack', function() {
  describe('#isEmpty()', function () {
    it('Returns true if the stack is empty, false otherwise', function () {
      assert.strictEqual(stack.isEmpty(), false)
    })
  })
});

// .toArray()
describe('ArrayStack', function() {
  describe('#toArray()', function () {
    it('Converts the stack to an array', function () {
      let tempStackArray = stack.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true)
    })
  })
});

// .toString()
describe('ArrayStack', function() {
  describe('#toString()', function () {
    it('Converts the stack to a string', function () {
      let tempStackString = stack.toString();
      assert.strictEqual(typeof tempStackString === 'string', true)
    })
  })
});

// .clear()
describe('ArrayStack', function() {
  describe('#clear()', function () {
    it('Clears the stack to empty', function () {
      stack.clear();
      assert.strictEqual(stack.peek(), undefined)
    })
  })
});

// .size()
describe('ArrayStack', function() {
  describe('#size()', function () {
    it('Returns the size', function () {
      stack.add(1);
      assert.strictEqual(stack.size(), 1)
    })
  })
});

// .length()
describe('ArrayStack', function() {
  describe('#length()', function () {
    it('Returns the size', function () {
      stack.add(9);
      assert.strictEqual(stack.length(), 2)
    })
  })
});
