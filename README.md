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

- 自然语言处理
  - 分词: tencentAi.nlpWordSeg
  - 词性标注: tencentAi.nlpWordPos
  - 专有名词识别: tencentAi.nlpWordNer
  - 同义词识别: tencentAi.nlpWordSyn
  - 意图成分识别: tencentAi.nlpWordCom
  - 情感分析识别: tencentAi.nlpTextPolar
  - 基础闲聊: tencentAi.nlpTextChat
  - 文本翻译（AI Lab）: tencentAi.nlpTextTrans
  - 文本翻译（翻译君）: tencentAi.nlpTextTranslate
  - 图片翻译: tencentAi.nlpImageTranslate
  - 语音翻译: tencentAi.nlpSpeechTranslate
  - 语种识别: tencentAi.nlpTextDetect
- 智能语音
  - 语音识别-echo版: tencentAi.aaiAsr
  - 语音识别-流式版（AI Lab）: tencentAi.aaiAsrs
  - 语音识别-流式版(WeChat AI): tencentAi.aaiWxasrs
  - 长语音识别: tencentAi.aaiWxasrlong
  - 关键词检索: tencentAi.aaiDetectKeyword
  - 语音合成（AI Lab）: tencentAi.aaiTts
  - 语音合成（优图）: tencentAi.aaiTta
- 计算机视觉
  - 智能鉴黄: tencentAi.imagePorn
  - 音频鉴黄: tencentAi.aaiEvilAudio
  - 暴恐图片识别: tencentAi.imageTerrorism
  - 身份证OCR: tencentAi.ocrIdCard
  - 名片OCR: tencentAi.ocrBc
  - 行驶证驾驶证OCR: tencentAi.ocrDriverLicense
  - 车牌OCR: tencentAi.ocrPlate
  - 营业执照OCR: tencentAi.ocrBizLicense
  - 银行卡OCR: tencentAi.ocrCreditCard
  - 通用OCR: tencentAi.ocrGeneral
  - 手写体OCR: tencentAi.ocrHandWriting
  - 人脸检测与分析: tencentAi.faceDetect
  - 多人脸检测: tencentAi.faceDetectMulti
  - 人脸对比: tencentAi.faceCompare
  - 跨年龄人脸识别: tencentAi.faceDetectCrossAge
  - 五官定位: tencentAi.faceShape
  - 人脸识别: tencentAi.faceIdentify
  - 人脸验证: tencentAi.faceVerify
  - 图片场景识别: tencentAi.imageScener
  - 图片物体识别: tencentAi.imageObjectr
  - 图片标签识别: tencentAi.imageTag
  - 图片花草/车辆识别: tencentAi.imageIdentify
  - 看图说话: tencentAi.imageToText
  - 模糊图片检测: tencentAi.imageFuzzy
  - 美食图片识别: tencentAi.imageFood
  - 人脸美妆: tencentAi.ptuFaceCosmetic
  - 人脸变妆: tencentAi.ptuFaceDecoration
  - 图片滤镜（天天P图）: tencentAi.ptuImgFilter
  - 图片滤镜（AI Lab）: tencentAi.imageFilter
  - 人脸融合: tencentAi.ptuFaceMerge
  - 大头贴: tencentAi.ptuFaceMerge
  - 颜龄检测: tencentAi.ptuFaceAge

## Installation
```sh
$ npm install --save tencent-ai-nodejs-sdk
```

## Usage
```js
const TencentAI = require('tencent-ai-nodejs-sdk')

const tencentAi = new TencentAI(appId, appKey)

const result = await tencentAi.nlpWordSeg('今天深圳的天气怎么样？明天呢')

```
