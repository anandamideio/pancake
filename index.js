'use strict';

const util = require('./dist/util');

const Queue = require('./dist/dataStructures/queue');
const Dequeue = require('./dist/dataStructures/dequeue');
const FixedQueue = require('./dist/dataStructures/fixedQueue');
const FixedDequeue = require('./dist/dataStructures/fixedDequeue');
const ArrayStack = require('./dist/dataStructures/arrayStack');
const Stack = require('./dist/dataStructures/objectStack');
const LinkedList = require('./dist/dataStructures/linkedList');
const DoublyLinkedList = require('./dist/dataStructures/doubleyLinkedList');
const DoublyNode = require('./dist/dataStructures/doubleyLinkedList');
const CircularLinkedList = require('./dist/dataStructures/circularLinkList');
const LinkedListStack = require('./dist/dataStructures/linkedListStack');
const Set = require('./dist/dataStructures/set');
const Dictionary = require('./dist/dataStructures/dictionary');
const HashTable = require('./dist/dataStructures/hashTable');
const HashTableSeparateChaining = require('./dist/dataStructures/hashTableSeperateChaining');

module.exports.util = util;
module.exports.Queue = Queue;
module.exports.Dequeue = Dequeue;
module.exports.FixedQueue = FixedQueue;
module.exports.FixedDequeue = FixedDequeue;
module.exports.ArrayStack = ArrayStack;
module.exports.Stack = Stack;
module.exports.LinkedList = LinkedList;
module.exports.DoublyLinkedList = DoublyLinkedList;
module.exports.DoublyNode = DoublyNode;
module.exports.CircularLinkedList = CircularLinkedList;
module.exports.LinkedListStack = LinkedListStack;
module.exports.Set = Set;
module.exports.Dictionary = Dictionary;
module.exports.HashTable = HashTable;
module.exports.HashTableSeparateChaining = HashTableSeparateChaining;
