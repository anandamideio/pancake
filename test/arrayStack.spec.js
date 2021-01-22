const assert = require('assert');
const ArrayStack = require('../dist/dataStructures/arrayStack.js');
const stack = new ArrayStack();

// .push()
describe('ArrayStack', () => {
  describe('#push()', () => {
    it('Should add an element to the front of the stack', () => {
      stack.push(1);
      assert.strictEqual(stack.peek(), 1);
    });
  });


  // .add()
  describe('#add()', () => {
    it('Works the same as push(), as it adds an element to the front of the stack', () => {
      stack.add(99);
      assert.strictEqual(stack.peek(), 99);
    });
  });


  // .pop()
  describe('#pop()', () => {
    it('Removes an element from the front of the stack', () => {
      stack.pop();
      assert.strictEqual(stack.peek(), 1);
    });
  });


  // .remove()
  describe('#remove()', () => {
    it('Works the same as pop(), removes an element from the front of the stack', () => {
      stack.remove();
      assert.strictEqual(stack.peek(), undefined);
    });
  });


  // .scry()
  describe('#scry()', () => {
    it('Returns the top element of the stack', () => {
      stack.add(1);
      assert.strictEqual(stack.scry(), 1);
    });
  });


  // .peek()
  describe('#peek()', () => {
    it('Returns the top element of the stack', () => {
      assert.strictEqual(stack.peek(), 1);
    });
  });


  // .isEmpty()
  describe('#isEmpty()', () => {
    it('Returns true if the stack is empty, false otherwise', () => {
      assert.strictEqual(stack.isEmpty(), false);
    });
  });


  // .toArray()
  describe('#toArray()', () => {
    it('Converts the stack to an array', () => {
      const tempStackArray = stack.toArray();
      assert.strictEqual(Array.isArray(tempStackArray), true);
    });
  });


  // .toString()
  describe('#toString()', () => {
    it('Converts the stack to a string', () => {
      const tempStackString = stack.toString();
      assert.strictEqual(typeof tempStackString === 'string', true);
    });
  });


  // .clear()
  describe('#clear()', () => {
    it('Clears the stack to empty', () => {
      stack.clear();
      assert.strictEqual(stack.peek(), undefined);
    });
  });


  // .size()
  describe('#size()', () => {
    it('Returns the size', () => {
      stack.add(1);
      assert.strictEqual(stack.size(), 1);
    });
  });


  // .length()
  describe('#length()', () => {
    it('Returns the size', () => {
      stack.add(9);
      assert.strictEqual(stack.length(), 2);
    });
  });
});
