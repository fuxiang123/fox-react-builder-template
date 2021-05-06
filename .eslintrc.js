module.exports = {
  parser: "@babel/eslint-parser",
  extends: [
    "airbnb-base",
    "airbnb/rules/react",
    "plugin:prettier/recommended",
  ],
  // 提供运行环境变量，如window
  env: {
    browser: true,
  },
  // 自定义全局变量
  globals: {},
  rules: {
    indent: ["error", 2],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true },
    ],
    "global-require": 1,
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx"] },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": 0,
  },
  settings: {
    react: {
      version: "17.999.999",
    },
    "import/resolver": {
      alias: {
        map: [["@", "./src/"]],
      },
    },
  },
};
