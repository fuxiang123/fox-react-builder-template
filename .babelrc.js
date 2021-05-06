module.exports = {
  presets: [["@babel/preset-env",{
      // 只转化源码里用到的polyfill api
      // 如果第三方库质量比较差，有未转化的代码，可能会出报错
      // 这时候可以切换成entry,将polyfill全部导入
      useBuiltIns: "usage",
      // 使用core-js@3版本
      corejs: 3,
  }],
  "@babel/preset-react"],
};
