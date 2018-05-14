/**
 * 身份证OCR识别
 * 识别身份证图像上面的详细身份信息
 * 详情请见：<http://ai.qq.com/doc/ocridcardocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} cardType 身份证图片类型，0-正面，1-反面
 */
exports.ocrIdCard = async function (image, cardType) {
  const apiUrl = this.prefix + '/ocr/ocr_idcardocr'

  const params = {
    image: image,
    card_type: cardType
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 名片OCR识别
 * 识别名片图像上面的字段信息
 * 详情请见：<http://ai.qq.com/doc/ocrbcocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
 */
exports.ocrBc = async function (image) {
  const apiUrl = this.prefix + '/ocr/ocr_bcocr'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 行驶证驾驶证OCR识别
 * 识别行驶证或驾驶证图像上面的字段信息
 * 详情请见：<http://ai.qq.com/doc/ocrdriverlicenseocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
 * @param {Number} type 识别类型，0-行驶证识别，1-驾驶证识别
 */
exports.ocrDriverLicense = async function (image, type) {
  const apiUrl = this.prefix + '/ocr/ocr_driverlicenseocr'

  const params = {
    image,
    type
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 营业执照OCR识别
 * 识别营业执照上面的字段信息
 * 详情请见：<http://ai.qq.com/doc/ocrbizlicenseocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
 */
exports.ocrBizLicense = async function (image) {
  const apiUrl = this.prefix + '/ocr/ocr_bizlicenseocr'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 银行卡OCR识别
 * 识别银行卡上面的字段信息
 * 详情请见：<http://ai.qq.com/doc/ocrcreditcardocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
 */
exports.ocrCreditCard = async function (image) {
  const apiUrl = this.prefix + '/ocr/ocr_creditcardocr'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 通用OCR识别
 * 识别上传图像上面的字段信息
 * 详情请见：<http://ai.qq.com/doc/ocrgeneralocr.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式）
 */
exports.ocrGeneral = async function (image) {
  const apiUrl = this.prefix + '/ocr/ocr_generalocr'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}
