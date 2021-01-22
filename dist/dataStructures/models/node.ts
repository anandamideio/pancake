export interface AbstractNode {
  prev?: AbstractNode | null;
  next?: AbstractNode | null;
}

export class Node<K> implements AbstractNode {
  public value: unknown;
  public next: AbstractNode | null;
  public prev: AbstractNode | null;

  constructor(value: K) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  toString(): string {
    return `${this.value}`;
  }
}

class HeadNode implements AbstractNode {
  public next: AbstractNode | null;

  constructor() {
    this.next = null;
  }
}

class TailNode implements AbstractNode {
  public prev: AbstractNode | null;

  constructor() {
    this.prev = null;
  }
}

export {HeadNode, TailNode};
export default Node;
