"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedBlackNode = exports.Colors = void 0;
const node_1 = __importDefault(require("./node"));
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLACK"] = 1] = "BLACK";
})(Colors = exports.Colors || (exports.Colors = {}));
class RedBlackNode extends node_1.default {
    constructor(value) {
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
exports.RedBlackNode = RedBlackNode;
exports.default = RedBlackNode;
//# sourceMappingURL=redBlackNode.js.map