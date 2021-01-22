"use strict";
class Node {
    constructor(key) {
        this.key = key;
        this.left = Node;
        this.right = Node;
    }
    toString() {
        return `${this.key}`;
    }
}
module.exports = Node;
//# sourceMappingURL=Node.js.map