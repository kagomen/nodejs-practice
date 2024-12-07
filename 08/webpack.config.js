export default {
  mode: "development", // or "production"
  entry: "./main.js",
  output: {
    path: `${import.meta.dirname}/dist`,
    filename: "bundle.js",
  },
  devServer: {
    port: 9000,
    open: true,
    static: {
      directory: `${import.meta.dirname}`,
    },
  },
};

// 以下で記述する際は webpack.config.cjs にする
// const path = require("path");
// module.exports = {
//   mode: "development", // or "production"
//   entry: "./main.js",
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
// };
