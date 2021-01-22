import Node from './node';

export enum Colors {
  RED = 0,
  BLACK = 1
}

export class RedBlackNode<K> extends Node<K> {
  public value: K;
  private color: Colors;
  private parent: null;

  constructor(value: K) {
    super(value);
    this.value = value;
    this.next = null;
    this.prev = null;
    this.parent = null;
    this.color = Colors.RED;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
export default RedBlackNode;
