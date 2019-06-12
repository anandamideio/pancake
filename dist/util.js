'use strict';

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};
module.exports.Compare = Compare;

const DOES_NOT_EXIST = -1;
module.exports.DOES_NOT_EXIST = DOES_NOT_EXIST;

const lesserEquals = function(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
};
module.exports.lesserEquals = lesserEquals;

const biggerEquals = function (a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
};
module.exports.biggerEquals = biggerEquals;

const defaultEquals = function(a, b) {
  return a === b // returns true or false depending if the elements match
};
module.exports.defaultEquals = defaultEquals;

const defaultCompare = function(a, b) {
  if (a === b) { return Compare.EQUALS; }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
};
module.exports.defaultCompare = defaultCompare;

const defaultToString = function(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
};
module.exports.defaultToString = defaultToString;

const swap = function(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
};
module.exports.swap = swap;

const reverseCompare = function(compareFn) {
  return (a, b) => compareFn(b, a);
};
module.exports.reverseCompare = reverseCompare;

const defaultDiff = function(a, b) {
  return Number(a) - Number(b);
};
module.exports.defaultDiff = defaultDiff;
