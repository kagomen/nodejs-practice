import _ from "lodash";
// Node.jsでは先頭にパスの指定がない場合は、パッケージとして扱われる
// ブラウザ環境ではこのようにパッケージを読み込むことはできない
// また、Node.jsでは `import {plus} from 'calc.js'` はパッケージとして扱われ、importができなくなる
// なので、`import { plus } from "./calc.mjs"` とする

const originalObj = { example: { nested: "value" } };
const clonedObj = _.cloneDeep(originalObj);
console.log(originalObj === clonedObj);

clonedObj.example.nested = "modified";
console.log("clonedObj", clonedObj);
console.log("originalObj", originalObj);

///////////////////////////////

import cloneDeep from "lodash/cloneDeep.js"; // esmでは拡張子省略不可

const originalObj2 = { example2: { nested2: "value2" } };
const clonedObj2 = cloneDeep(originalObj2);
console.log("clonedObj2", clonedObj2);
