const path = require("path");

module.exports = {
  entry: { bundle: path.resolve(__dirname, "src/index.js") },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
};
