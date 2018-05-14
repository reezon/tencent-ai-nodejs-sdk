/**
 * 情感分析识别
 * 对文本进行情感分析，快速判断情感倾向（正面或负面）
 * 详情请见：<http://ai.qq.com/doc/nlpemo.shtml>
 * @param {String} text
 */
exports.nlpTextPolar = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_textpolar'
  // text = await this.encodeGBK(text)
  const params = {
    text: text
  }
  return this.doHttpPost(apiUrl, params)
}
