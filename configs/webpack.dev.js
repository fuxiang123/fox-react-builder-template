const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseConfig = require("./webpack.common");
const { srcPath } = require("./constants");

const devConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        use: [
          // 将非常消耗资源的 loader 分流给一个新线程
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              plugins: ["react-refresh/babel"],
            },
          },
        ],
      },
    ],
  },
  // react热模块替换
  plugins: [
    // 将css都写入一个文件里
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // 实时重新加载
  devServer: {
    historyApiFallback: true,
    contentBase: "./dist",
    hot: true,
    stats: "errors-only",
  },
  // 避免hot reload因为browserslist失效
  target: "web",
  // 设置编译后的代码与源码位置的映射方式
  // 方便debug时进行定位
  devtool: "eval-cheap-module-source-map",
};

module.exports = merge(baseConfig, devConfig);
