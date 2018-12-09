const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  
  entry: "./src/index.tsx",
  
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  devServer: {
    contentBase: [
      path.resolve(__dirname, "dist"),
      path.resolve(__dirname, "node_modules")
    ],
    publicPath: "/"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  mode: "development",

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

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
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
};
