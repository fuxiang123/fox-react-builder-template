[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

一个基于 webpack5 + react 的脚手架。

## 基础命令

```
npm install // 初始化
npm run start // 开发模式
npm run build // 打包
```

## 其他指令

```
npm run build:size // 构建体积分析
npm run build:speed // 构建速度分析
npm run serve // 开启一个本地服务器，可用以调试构建包
npm run commit // 使用[commitizen](https://github.com/commitizen-tools/commitizen)提交commit message
```

## 特性

- 基于 feature 的项目架构
- travis 持续集成
- Gzip 压缩
- 使用 webpack5 处理打包
- 使用 [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) 处理 react 热更新
- 使用 swr 处理数据请求
- 使用 Hox 管理应用状态
- 使用 less + postcss 处理 css
- 使用[commitizen](https://github.com/commitizen-tools/commitizen)规范 commit message
- 使用[standard-version](https://github.com/conventional-changelog/standard-version)管理版本
- 使用[jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)进行单元测试

## 未来特性？

- 提供更多命令行选项
- 支持 typescript 和 javascript 切换
- 命令行添加页面和路由
- 多种状态管理工具选择
- 多种目录组织结构选择
- 多种 ci 工具选择
