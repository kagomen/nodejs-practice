// import data from "./test.json";
// cjsではrequireでjsonを読み込めるが、esmではimportでjsonを読み込めない

// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const data = require("./test.json");
// console.log(data);

// より新しい記法（実験段階）は以下

import data2 from "./test.json" with { type: "json" };
console.log(data2);