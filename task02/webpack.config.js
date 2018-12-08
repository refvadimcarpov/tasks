const path = require("path");

const webpack = require("webpack");

const config = {
  
  entry: {
    app: "./index.js"
  },

  output: {
    path: __dirname,
    filename: "bundle.js"
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
      }
    ]
  }

};

module.exports = config;
