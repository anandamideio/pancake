class Node<T> {
  private key: T;
  private left: Node;
  private right: Node;


  constructor(key: T) {
    this.key = key;
    this.left = Node;
    this.right = Node;
  }

  toString(): string {
    return `${this.key}`;
  }
}
module.exports = Node;
