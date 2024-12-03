const fs = require("fs");
fs.writeFileSync(`${__dirname}/test.txt`, "hello world");

// `../` のようなパス移動をする場合は`path.resolve`を使う

const path = require("path");
pathToDist = path.resolve(__dirname, "../dist");
fs.writeFileSync(`${pathToDist}/test.txt`, "hello world");
