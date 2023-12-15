const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const manifest = require("../public/manifest.json");
module.exports = {
  watch: true,
  mode: "production",
  entry: {
    background: path.resolve(__dirname, "..", "src", "background.ts"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].json",
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].png",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: ".", to: ".", context: "public" }],
    }),
  ],
};
