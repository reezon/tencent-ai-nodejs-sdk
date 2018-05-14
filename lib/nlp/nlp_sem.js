/**
 * 意图成分识别
 * 对文本进行意图识别，快速找出意图及上下文成分
 * 详情请见：<http://ai.qq.com/doc/nlpsem.shtml>
 * @param {String} text
 */
exports.nlpWordCom = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_wordcom'
  // text = await this.encodeGBK(text)
  const params = {
    text
  }
  return this.doHttpPost(apiUrl, params)
}
