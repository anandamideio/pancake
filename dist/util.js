'use strict';

const defaultEquals = function(a, b) {
  return a === b // returns true or false depending if the elements match
};
module.exports.defaultEquals = defaultEquals;

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
