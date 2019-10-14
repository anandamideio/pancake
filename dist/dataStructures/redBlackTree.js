"use strict";

const {defaultCompare} = require("../util");
const {BinarySearchTree} = require("./binarySearchTree");
const {redBlackNode} = require("./models/redBlackNode");

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node
   */
  rotationLL(node) {
    let tmp = node.left;
    node.left = tmp.right;
    if (tmp.right && tmp.right.key) { tmp.right.parent = node; }
    tmp.parent = node.parent;
    if (!node.parent) { this.root = tmp; }
    else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  };
  /**
   * Right right case: rotate left
   *
   *     a                              b
   *    / \                            / \
   *   c   b   -> rotationRR(a) ->    a   e
   *      / \                        / \
   *     d   e                      c   d
   *
   * @param node Node<T>
   */
  rotationRR(node) {
    let tmp = node.right;
    node.right = tmp.left;
    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    }
    else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      }
      else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  };
  insert(key) {
    // special case: first key
    if (this.root == null) {
      this.root = new redBlackNode.RedBlackNode(key);
      this.root.color = redBlackNode.Colors.BLACK;
    }
    else {
      let newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  };
  insertNode(node, key) {
    if (this.compareFn(key, node.key) === util.Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new redBlackNode.RedBlackNode(key);
        node.left.parent = node;
        return node.left;
      }
      else {
        return this.insertNode(node.left, key);
      }
    }
    else if (node.right == null) {
      node.right = new redBlackNode.RedBlackNode(key);
      node.right.parent = node;
      return node.right;
    }
    else {
      return this.insertNode(node.right, key);
    }
  };
  fixTreeProperties(node) {
    while (node && node.parent && node.parent.color === redBlackNode.Colors.RED && node.color !== redBlackNode.Colors.BLACK) {
      let parent_1 = node.parent;
      let grandParent = parent_1.parent;
      // case A
      if (grandParent && grandParent.left === parent_1) {
        let uncle = grandParent.right;
        // case 1: uncle of node is also red - only recoloring
        if (uncle && uncle.isRed()) {
          grandParent.color = redBlackNode.Colors.RED;
          parent_1.color = redBlackNode.Colors.BLACK;
          uncle.color = redBlackNode.Colors.BLACK;
          node = grandParent;
        }
        else {
          // case 2: node is right child - left rotate
          if (node === parent_1.right) {
            this.rotationRR(parent_1);
            node = parent_1;
            parent_1 = node.parent;
          }
          // case 3: node is left child - right rotate
          this.rotationLL(grandParent);
          // swap color
          parent_1.color = redBlackNode.Colors.BLACK;
          grandParent.color = redBlackNode.Colors.RED;
          node = parent_1;
        }
      }
      else { // case B: parent is right child of grand parent
        let uncle = grandParent.left;
        // case 1: uncle is read - only recoloring
        if (uncle && uncle.isRed()) {
          grandParent.color = redBlackNode.Colors.RED;
          parent_1.color = redBlackNode.Colors.BLACK;
          uncle.color = redBlackNode.Colors.BLACK;
          node = grandParent;
        }
        else {
          // case 2: node is left child - left rotate
          if (node === parent_1.left) {
            this.rotationLL(parent_1);
            node = parent_1;
            parent_1 = node.parent;
          }
          // case 3: node is right child - left rotate
          this.rotationRR(grandParent);
          // swap color
          parent_1.color = redBlackNode.Colors.BLACK;
          grandParent.color = redBlackNode.Colors.RED;
          node = parent_1;
        }
      }
    }
    this.root.color = redBlackNode.Colors.BLACK;
  };
  getRoot() { return this.root; };
}
module.exports.RedBlackTree = RedBlackTree;
