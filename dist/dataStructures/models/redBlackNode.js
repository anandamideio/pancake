import { Node } from './node';
/**
 * Enum representing the colors of nodes in a Red-Black tree.
 */
export var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLACK"] = 1] = "BLACK";
})(Colors || (Colors = {}));
/**
 * Class representing a node in a Red-Black tree.
 * Extends the generic Node class to include color and parent properties.
 */
export class RedBlackNode extends Node {
    value;
    color;
    parent;
    /**
      * Constructs a new RedBlackNode with the given value.
      * Initializes the color to RED and the parent to null.
      * @param value - The value of the node.
      */
    constructor(value) {
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
    isRed() {
        return this.color === Colors.RED;
    }
}
export default RedBlackNode;
//# sourceMappingURL=redBlackNode.js.map