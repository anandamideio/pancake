'use strict';

const util = require('./util');

const Queue = require('./dataStructures/queue');
const Dequeue = require('./dataStructures/dequeue');
const FixedQueue = require('./dataStructures/fixedQueue');
const FixedDequeue = require('./dataStructures/fixedDequeue');
const ArrayStack = require('./dataStructures/arrayStack');
const Stack = require('./dataStructures/objectStack');
const LinkedList = require('./dataStructures/linkedList');

module.exports.util = util;
module.exports.Queue = Queue;
module.exports.Dequeue = Dequeue;
module.exports.FixedQueue = FixedQueue;
module.exports.FixedDequeue = FixedDequeue;
module.exports.ArrayStack = ArrayStack;
module.exports.Stack = Stack;
module.exports.LinkedList = LinkedList;
