import { Node } from './node';

/**
 * Enum representing the colors of nodes in a Red-Black tree.
 */
export enum Colors {
  RED = 0,
  BLACK = 1
}

/**
 * Interface for a Red-Black tree node.
 */
export interface IRedBlackNode<K> extends Node<K> {
  value: K;
  color: Colors;
  parent: IRedBlackNode<K> | null;
}

/**
 * Class representing a node in a Red-Black tree.
 * Extends the generic Node class to include color and parent properties.
 */
export class RedBlackNode<K> extends Node<K> implements IRedBlackNode<K> {
  public value: K;
  public color: Colors;
  public parent: RedBlackNode<K> | null;

  /**
    * Constructs a new RedBlackNode with the given value.
    * Initializes the color to RED and the parent to null.
    * @param value - The value of the node.
    */
  constructor(value: K) {
    super(value);
    this.value = value;
    this.next = null;
    this.prev = null;
    this.parent = null;
    this.color = Colors.RED; // Initialized to RED as per Red-Black tree rules
  }

  /**
    * Checks if the node is red.
    * @returns True if the node is red, false otherwise.
    */
  isRed(): boolean {
    return this.color === Colors.RED;
  }
}

export default RedBlackNode;
