import minus, { plus } from "./calc.mjs"; // ESMは拡張子の省略が不可

console.log(plus(1, 2));
console.log(minus(1, 2));

import * as calc from "./calc.mjs";

console.log(calc.plus(3, 4));
console.log(calc.default(3, 4));

// ESMを使用する際は package.json に `"type": "module"` を追加するか、
// ファイルの拡張子を.mjsにする
