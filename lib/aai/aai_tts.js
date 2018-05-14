/**
 * 语音合成（AI Lab）
 * 将文字转换为语音，返回文字的语音数据
 * 详情请见：<http://ai.qq.com/doc/aaitts.shtml>
 * @param {Number} speaker 语音发音人编码
 * @param {Number} format 合成语音格式编码
 * @param {Number} volume 合成语音音量，取值范围[-10, 10]，如-10表示音量相对默认值小10dB，0表示默认音量，10表示音量相对默认值大10dB
 * @param {Number} speed 合成语音语速，默认100
 * @param {String} text 待合成文本
 * @param {Number} aht 合成语音降低/升高半音个数，即改变音高，默认0
 * @param {Number} apc 控制频谱翘曲的程度，改变说话人的音色，默认58
 */
exports.aaiTts = async function (speaker, format, volume, speed, text, aht, apc) {
  const apiUrl = this.prefix + '/aai/aai_tts'

  const params = {
    speaker,
    format,
    volume,
    speed,
    text,
    aht,
    apc
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 语音合成（优图）
 * 将文字转换为语音，返回文字的语音数据
 * 详情请见：<http://ai.qq.com/doc/aaitts.shtml>
 * @param {String} text 待合成文本
 * @param {Number} modelType 发音模型，默认为0
 * @param {Number} speed 语速，默认为0
 */
exports.aaiTta = async function (text, modelType = 0, speed = 0) {
  const apiUrl = this.prefix + '/aai/aai_tta'

  const params = {
    text: text,
    model_type: modelType,
    speed: speed
  }

  return this.doHttpPost(apiUrl, params)
}
