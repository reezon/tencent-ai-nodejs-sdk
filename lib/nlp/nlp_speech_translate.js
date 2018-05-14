/**
 * 语音翻译
 * 识别出音频中的文字，并进行翻译
 * 详情请见：<http://ai.qq.com/doc/speechtranslate.shtml>
 * @param {String} speechChunk 语音分片数据的Base64编码，非空且长度上限8MB
 * @param {Number} format 语音压缩格式编码
 * @param {Number} seq 语音分片所在语音流的偏移量（字节）
 * @param {Number} end 是否结束分片标识
 * @param {String} source
 * @param {String} target
 */
exports.nlpSpeechTranslate = async function (speechChunk, format, seq, end, source = 'zh', target = 'en') {
  const apiUrl = this.prefix + '/nlp/nlp_speechtranslate'
  // text = await this.encodeGBK(text)
  const sessionId = await this.getSession()
  const params = {
    speech_chunk: speechChunk,
    session_id: sessionId,
    format: format,
    seq: seq,
    end: end,
    source: source,
    target: target
  }
  return this.doHttpPost(apiUrl, params)
}
