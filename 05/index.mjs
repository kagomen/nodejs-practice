console.log(import.meta.url); // file:///Users/~/nodejs-practice/05/index.mjs

console.log(import.meta);
/*
[Object: null prototype] {
  dirname: '/Users/~/nodejs-practice/05',
  filename: '/Users/~/nodejs-practice/05/index.mjs',
  resolve: [Function: resolve],
  url: 'file:///Users/~/nodejs-practice/05/index.mjs'
}
*/

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
// '/Users/~/nodejs-practice/05/index.mjs'

// v22では `import.meta.dirname` や `import.meta.filename` で書いた方が良い？
