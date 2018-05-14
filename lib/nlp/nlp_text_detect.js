/**
 * 语种识别
 * 识别给出文本的语种
 * 详情请见：<http://ai.qq.com/doc/textdetect.shtml>
 * @param {String} text UTF-8编码，非空且长度上限1024字节
 * @param {String} candidate_langs 语言缩写，多种语言间用“|”分隔
 * @param {Number} force 是否强制从候选语言中选择（只对二选一有效）
 */
exports.nlpTextDetect = async function (text, candidate_langs = 'zh', force = 0) {
  const apiUrl = this.prefix + '/nlp/nlp_textdetect'
  // text = await this.encodeGBK(text)
  const params = {
    text,
    candidate_langs,
    force
  }
  return this.doHttpPost(apiUrl, params)
}
