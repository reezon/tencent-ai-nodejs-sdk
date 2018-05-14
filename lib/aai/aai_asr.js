/**
 * 语音识别-echo版
 * 对音频进行语音识别，并返回语音的文字内容
 * 详情请见：<http://ai.qq.com/doc/aaiasr.shtml>
 * @param {String} speech 语音数据的Base64编码，非空且长度上限8MB
 * @param {Number} format 语音压缩格式编码
 * @param {Number} rate 语音采样率编码，默认即16KHz
 */
exports.aaiAsr = async function (speech, format, rate = 16000) {
  const apiUrl = this.prefix + '/aai/aai_asr'
  // text = await this.encodeGBK(text)
  const params = {
    speech,
    format,
    rate
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 语音识别-流式版（AI Lab）
 * 对音频进行语音识别，并返回语音的文字内容
 * 详情请见：<http://ai.qq.com/doc/aaiasr.shtml>
 * @param {String} speech_chunk 语音分片数据的Base64编码，非空且长度上限8MB
 * @param {String} speech_id 语音唯一标识（同一应用内）
 * @param {Number} format 语音压缩格式编码
 * @param {Number} rate 语音采样率编码，默认即16KHz
 * @param {Number} seq 语音分片所在语音流的偏移量（字节）
 * @param {Number} len 语音分片长度（字节）
 * @param {Number} end 语音采样率编码，是否结束分片标识
 */
exports.aaiAsrs = async function (speech_chunk, speech_id, format, rate, seq, len, end) {
  const apiUrl = this.prefix + '/aai/aai_asrs'
  // text = await this.encodeGBK(text)
  const params = {
    speech_chunk,
    speech_id,
    format,
    rate,
    seq,
    len,
    end
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 语音识别-流式版（WeChat AI)
 * 对音频进行语音识别，并返回语音的文字内容
 * 详情请见：<http://ai.qq.com/doc/aaiasr.shtml>
 * @param {String} speech_chunk 语音分片数据的Base64编码，非空且长度上限8MB
 * @param {String} speech_id 语音唯一标识（同一应用内）
 * @param {Number} format 语音压缩格式编码
 * @param {Number} rate 语音采样率编码，默认即16KHz
 * @param {Number} bits 音频采样位数
 * @param {Number} seq 语音分片所在语音流的偏移量（字节）
 * @param {Number} len 语音分片长度（字节）
 * @param {Number} end 语音采样率编码，是否结束分片标识
 * @param {Number} cont_res 是否获取中间识别结果
 */
exports.aaiWxasrs = async function (speech_chunk, speech_id, format, rate, bits, seq, len, end, cont_res) {
  const apiUrl = this.prefix + '/aai/aai_wxasrs'
  // text = await this.encodeGBK(text)
  const params = {
    speech_chunk,
    speech_id,
    format,
    rate,
    bits,
    seq,
    len,
    end,
    cont_res
  }
  return this.doHttpPost(apiUrl, params)
}
