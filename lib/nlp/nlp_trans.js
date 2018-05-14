/**
 * 文本翻译（AI Lab）
 * 对文本进行翻译，支持多种语言之间互译
 * 详情请见：<http://ai.qq.com/doc/nlptrans.shtml>
 * @param {String} text
 * @param {number} type
 */
exports.nlpTextTrans = async function (text, type = 0) {
  const apiUrl = this.prefix + '/nlp/nlp_texttrans'
  // text = await this.encodeGBK(text)
  const params = {
    text,
    type
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 文本翻译（翻译君）
 * 对文本进行翻译，支持多种语言之间互译
 * 详情请见：<http://ai.qq.com/doc/nlptrans.shtml>
 * @param {String} text
 * @param {String} source
 * @param {String} target
 */
exports.nlpTextTranslate = async function (text, source = 'zh', target = 'en') {
  const apiUrl = this.prefix + '/nlp/nlp_texttranslate'
  // text = await this.encodeGBK(text)
  const params = {
    text,
    source,
    target
  }
  return this.doHttpPost(apiUrl, params)
}
