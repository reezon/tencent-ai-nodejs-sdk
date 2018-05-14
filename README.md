nodejs sdk for Tencent AI
===========

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/tencent-ai-nodejs-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/tencent-ai-nodejs-sdk
[download-image]: https://img.shields.io/npm/dm/tencent-ai-nodejs-sdk.svg?style=flat-square
[download-url]: https://npmjs.org/package/tencent-ai-nodejs-sdk

## 功能模块
见[腾讯ai文档中心](http://ai.qq.com/doc/index.shtml)

## Installation
```sh
$ npm install --save tencent-ai-nodejs-sdk
```

## Usage
```js
const TencentAI = require('tencent-ai-nodejs-sdk')

const tencentAi = new TencentAI(appId, appKey)

const result = await tencentAi.wordSeg('今天深圳的天气怎么样？明天呢')

```
