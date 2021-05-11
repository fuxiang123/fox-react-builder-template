const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { srcPath, rootPath } = require("./constants");

module.exports = {
  entry: {
    app: path.resolve(srcPath, "./index.js"),
  },
  output: {
    path: path.resolve(rootPath, "./dist"),
    filename: "static/js/[name].[contenthash:8].js",
    // 在每次构建前清理 /dist 文件夹
    clean: true,
    publicPath: "/",
  },
  cache: {
    // 将缓存写入本地硬盘
    type: "filesystem",
    buildDependencies: {
      // 通过获取 webpack 的所有依赖项构建哈希值，来决定是否使缓存失效
      config: [__filename],
    },
  },
  module: {
    rules: [
      // webpack5自带静态资源处理功能，无需file-loader等
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        include: srcPath,
        type: "asset/resource",
        generator: {
          filename: "static/assets/[hash:8].[name][ext]",
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    // 自动生成模板index.html，将打包好的js插入script标签
    new HtmlWebpackPlugin({
      template: "public/index.html",
      inject: "body",
      favicon: "public/favicon.ico",
    }),
    // 支持eslint
    new ESLintPlugin(),
  ],
  resolve: {
    alias: {
      "@": srcPath,
    },
  },
  // 日志级别
  stats: {
    preset: "errors-warnings",
    moduleTrace: true,
    errorDetails: true,
  },
};
