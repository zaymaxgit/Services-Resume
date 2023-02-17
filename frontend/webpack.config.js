const htmlPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  //entry point
  entry: path.join(__dirname, "src", "app.ts"),
  //exit point
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    extensions: ["tsx", "ts", "js"],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.css$/,
        use: [miniCss.loader, "css-loader"],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [
    new htmlPlugin({
      template: path.join(__dirname, "src", "index.pug"),
      filename: "index.html",
    }),
    new miniCss({
      filename: "style.css",
    }),
  ],

  //webpack restart server
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 3034,
  },
};
