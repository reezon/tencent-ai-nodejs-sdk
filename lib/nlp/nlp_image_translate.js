/**
 * 图片翻译
 * 识别图片中的文字，并进行翻译
 * 详情请见：<http://ai.qq.com/doc/imagetranslate.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} scene 识别类型（word-单词识别，doc-文档识别）
 * @param {String} source
 * @param {String} target
 */
exports.nlpImageTranslate = async function (image, scene = 'doc', source = 'zh', target = 'en') {
  const apiUrl = this.prefix + '/nlp/nlp_imagetranslate'
  // text = await this.encodeGBK(text)
  const sessionId = await this.getSession()
  const params = {
    image: image,
    session_id: sessionId,
    scene: scene,
    source: source,
    target: target
  }
  return this.doHttpPost(apiUrl, params)
}
