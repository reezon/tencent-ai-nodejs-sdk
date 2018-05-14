/**
 * 基础闲聊
 * 对文本进行情感分析，快速判断情感倾向（正面或负面）
 * 详情请见：<http://ai.qq.com/doc/nlpchat.shtml>
 * @param {String} question
 */
exports.nlpTextChat = async function (question) {
  const apiUrl = this.prefix + '/nlp/nlp_textchat'
  // text = await this.encodeGBK(text)
  const session = await this.getSession()
  const params = {
    question,
    session
  }
  return this.doHttpPost(apiUrl, params)
}
