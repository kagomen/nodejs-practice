// const myModule = require("./sub");
// myModule.fn();

import { fn } from "./sub.js";
fn();

import isOdd from "is-odd";
console.log(3, isOdd(3));
