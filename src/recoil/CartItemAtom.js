"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const CartItemAtom = (0, recoil_1.atom)({
    key: 'CartItemAtom',
    default: []
});
exports.default = CartItemAtom;
