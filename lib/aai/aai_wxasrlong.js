/**
 * 长语音识别
 * 对上传长音频，提供回调接口，异步获取识别结果
 * 详情请见：<http://ai.qq.com/doc/wxasrlong.shtml>
 * @param {Number} format 语音压缩格式编码
 * @param {String} callbackUrl 用户回调url，需用户提供，用于平台向用户通知识别结果
 * @param {String} speech 语待识别语音（时长上限15min）
 * @param {String} speechUrl 待识别语音下载地址（时长上限15min）
 */
exports.aaiWxasrlong = async function (format, callbackUrl, speech, speechUrl) {
  const apiUrl = this.prefix + '/aai/aai_wxasrlong'

  let params = {
    format: format,
    callback_url: callbackUrl
  }

  if (speech) {
    params.speech = speech
  } else {
    params.speech_url = speechUrl
  }

  return this.doHttpPost(apiUrl, params)
}
