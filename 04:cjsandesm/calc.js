function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

module.exports = {
  plus,
  minus,
};

// package.jsonに `"type": "module"` を追加した場合は、このファイルの拡張子を.cjsにする
