const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    autoprefixer,
    {
      // 浏览器尺寸适配工具：px自动转vw
      // 文档: https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
      "postcss-px-to-viewport": {
        viewportWidth: 750,
        viewportHeight: 1334,
        propList: ["*"],
        unitPrecision: 5,
        viewportUnit: "vw",
        selectorBlackList: [".ignore", ".hairlines"],
        minPixelValue: 1,
        mediaQuery: false,
        exclude: /(\/|\\)(node_modules)(\/|\\)/,
      },
    },
  ],
};
