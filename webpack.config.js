const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: {
    "large-number": "./src/index.js",
    "large-number.min": "./src/index.js"
  },
  mode: "none",
  output: {
    filename: "[name].js",
    library: "largeNumber",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin({ include: /\.min\.js$/ })]
  }
};
