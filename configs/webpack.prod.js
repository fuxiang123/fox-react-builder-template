const { merge } = require("webpack-merge");
const AnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const baseConfig = require("./webpack.common");
const { srcPath } = require("./constants");

const prodConfig = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: srcPath,
        use: [
          // 将非常消耗资源的 loader 分流给一个新线程
          "thread-loader",
          "babel-loader",
        ],
      },
    ],
  },
  plugins: [
    // 将css都写入一个文件里
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:8].css",
      chunkFilename: "static/css/[id].[contenthash].css",
    }),
    // css 压缩
    new CssMinimizerPlugin(),
    // css tree-shaking
    new PurgecssPlugin({
      paths: glob.sync(`${srcPath}/**/*`, { nodir: true }),
    }),
    new CompressionPlugin({
      // brotli压缩，压缩效果更好，但需要服务器支持
      // filename: "[path][base].br",
      // algorithm: "brotliCompress",
      // compressionOptions: {
      //   params: {
      //     [require("zlib").constants
      //       .BROTLI_PARAM_QUALITY]: 11,
      //   },
      // },
      algorithm: "gzip", // gzip压缩
      test: /\.(js|css)$/,
      // 只处理大于xx字节 的文件，默认：0
      threshold: 10240,
      // 只有压缩后的压缩比比这个值小的文件才会进行压缩
      minRatio: 0.8, // 默认: 0.8
      // 是否删除源文件，默认: false
      deleteOriginalAssets: false,
    }),
  ],
  performance: {
    // 单个资源体积超过限制的时候，报出警告
    hints: "warning",
    assetFilter: (assetFilename) => {
      return assetFilename.endsWith(".gz");
    },
  },
  devtool: "cheap-module-source-map",
  optimization: {
    minimize: true,
    minimizer: [
      (compiler) => {
        const TerserPlugin = require("terser-webpack-plugin");
        new TerserPlugin().apply(compiler);
      },
    ],
    // 单独提取runtime，防止因为runtime改变导致其他模块重新编译
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
    // 代码分割
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "reactvendor",
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
        },
      },
    },
  },
};

module.exports = (env) => {
  if (env.size) {
    // 显示各个包的体积
    prodConfig.plugins.push(
      new AnalyzerPlugin({
        analyzerMode: "static",
        defaultSizes: "gzip",
      })
    );
  }
  if (env.speed) {
    const smp = new SpeedMeasurePlugin();
    // 显示打包速度耗时
    return smp.wrap(merge(baseConfig, prodConfig));
  }
  return merge(baseConfig, prodConfig);
};
