// cjs -> mjs : OK
// esm -> cjs : NG

import { plus } from "./calc.js";

const result = plus(1, 2);
console.log(result);
