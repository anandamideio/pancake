"use strict";

const Node = require("./node");

class RedBlackNode extends Node {
  constructor(key) {
    super(key);
    this.key = key;
    this.color = Colors.RED; // {6}
    this.parent = null; // {7}
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
exports.RedBlackNode = RedBlackNode;
