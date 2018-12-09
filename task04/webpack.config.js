const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpack = require("webpack");

const config = {
  
  entry: {
    app: "./src/index.js",
  },

  devtool: "inline-source-map",

  devServer: {
    contentBase: [
      path.resolve(__dirname, "dist"),
      path.resolve(__dirname, "node_modules")
    ],
    publicPath:  "/"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  watch: false, //disabled for seeing output from 'node bundle' command from 'npm run dev', set 'true' for continous compilation

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              removeAttributeQuotes: false
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
