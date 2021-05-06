[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

一个基于 webpack5 + react 的脚手架。

## 初始化

```
npm install
```

## 启动

```
npm run start
```

## 构建

```
npm run build
```

## 其他指令

```
npm run build:size // 构建体积分析
npm run build:speed // 构建速度分析
npm run serve // 开启一个本地服务器，可用以调试构建包
npm run commit // 使用[commitizen](https://github.com/commitizen-tools/commitizen)提交commit message
npm run release:marjor // 发布marjor版本
npm run release:minor // 发布minor版本
npm run release:patch // 发布patch版本
```

## 特性

- 基于 feature 的项目架构
- Gzip 压缩
- 使用 webpack5 处理打包
- 使用 [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) 处理 react 热更新
- 使用 swr 处理数据请求
- 使用 Hox 管理应用状态
- 使用 less + postcss 处理 css
- 使用[commitizen](https://github.com/commitizen-tools/commitizen)规范 commit message
- 使用[standard-version](https://github.com/conventional-changelog/standard-version)管理版本

## 未来特性？

- 提供命令行选项
- 支持 typescript 和 javascript 切换
- 命令行添加页面和路由
- 多种状态管理工具选择
- 多种目录组织结构
