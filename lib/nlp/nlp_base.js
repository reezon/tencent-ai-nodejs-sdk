/**
 * 分词接口
 * 分词接口提供智能分词功能，支持基础词与混排词粒度两种粒度，其中基础词粒度最小，适合搜索场景，而混合词粒度倾向于保留更多的短语词。
 * 详情请见：<http://ai.qq.com/doc/nlpbase.shtml>
 * @param {String} text
 */
exports.nlpWordSeg = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_wordseg'
  // text = await this.encodeGBK(text)
  const params = {
    text: text
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 词性标注接口
 * 词性标注接口在分词接口的基础上，增加词性标注能力，将分词结果中的每个分词赋予一个正确的词性，例如形容词、动名或者名词等等。
 * 详情请见：<http://ai.qq.com/doc/nlpbase.shtml>
 * @param {String} text
 */
exports.nlpWordPos = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_wordpos'
  // text = await this.encodeGBK(text)
  const params = {
    text: text
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 专有名词识别
 * 对文本进行专有名词的分词识别，找出文本中的专有名词
 * 详情请见：<http://ai.qq.com/doc/nlpbase.shtml>
 * @param {String} text
 */
exports.nlpWordNer = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_wordner'
  // text = await this.encodeGBK(text)
  const params = {
    text: text
  }
  return this.doHttpPost(apiUrl, params)
}

/**
 * 同义词识别
 * 识别文本中存在同义词的分词，并返回相应的同义词
 * 详情请见：<http://ai.qq.com/doc/nlpbase.shtml>
 * @param {String} text
 */
exports.nlpWordSyn = async function (text) {
  const apiUrl = this.prefix + '/nlp/nlp_wordsyn'
  // text = await this.encodeGBK(text)
  const params = {
    text: text
  }
  return this.doHttpPost(apiUrl, params)
}
