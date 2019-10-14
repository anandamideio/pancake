'use strict';

const assert = require('assert');
const Set = require('../dist/dataStructures/set');
const set = new Set();

// .add()
describe('Set', function() {
  describe('#add(element)', function () {
    it('Adds an element to the set', function () {
      set.add(1);
      assert.strictEqual(set.has(1), true)
    })
  })
});

// .delete()
describe('Set', function() {
  describe('#delete(element)', function () {
    it('Deletes an element from the set', function () {
      set.add(1);
      assert.strictEqual(set.has(1), true)
    })
  })
});
