/**
 * 关键词检索
 * 上传长音频，提供回调接口，异步获取识别结果
 * 详情请见：<https://ai.qq.com/doc/detectword.shtml>
 * @param {Number} format 语音压缩格式编码
 * @param {String} callbackUrl 用户回调url，需用户提供，用于平台向用户通知识别结果
 * @param {String} keyWords 待识别关键词，非空，多个关键词之间用“|”分隔，每个词长度不低于两个字，上限500个词
 * @param {String} speech 语待识别语音（时长上限15min）
 * @param {String} speechUrl 待识别语音下载地址（时长上限15min）
 */
exports.aaiWxasrlong = async function (format, callbackUrl, keyWords, speech, speechUrl) {
  const apiUrl = this.prefix + '/aai/aai_detectkeyword'

  let params = {
    format: format,
    callback_url: callbackUrl,
    key_words: keyWords
  }

  if (speech) {
    params.speech = speech
  } else {
    params.speech_url = speechUrl
  }

  return this.doHttpPost(apiUrl, params)
}
