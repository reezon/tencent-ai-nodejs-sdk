/**
 * 音频鉴黄
 * 识别一段音频是否为色情音频。
 * 详情请见：<https://ai.qq.com/doc/aaievilaudio.shtml>
 * @param {String} speechId 语音唯一标识
 * @param {String} speechUrl 音频URL，建议音频时长不超过3分钟
 */
exports.aaiEvilAudio = async function (speechId, speechUrl) {
  const apiUrl = this.prefix + '/aai/aai_evilaudio'

  let params = {
    speed_id: speechId,
    speech_url: speechUrl
  }

  return this.doHttpPost(apiUrl, params)
}
