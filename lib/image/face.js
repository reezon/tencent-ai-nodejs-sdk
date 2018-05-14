/**
 * 人脸检测与分析
 * 识别上传图像上面的人脸信息
 * 详情请见：<http://ai.qq.com/doc/detectface.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} mode 检测模式，0-正常，1-大脸模式（默认1）
 */
exports.faceDetect = async function (image, mode) {
  const apiUrl = this.prefix + '/image/face/face_detectface'

  const params = {
    image,
    mode
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 多人脸检测
 * 识别上传图像上面的人脸位置，支持多人脸识别
 * 详情请见：<http://ai.qq.com/doc/detectmultiface.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.faceDetectMulti = async function (image) {
  const apiUrl = this.prefix + '/image/face/face_detectmultiface'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 人脸对比
 * 对请求图片进行人脸对比
 * 详情请见：<http://ai.qq.com/doc/facecompare.shtml>
 * @param {String} imageA 待对比人脸图片A, 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} imageB 待对比人脸图片B, 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.faceCompare = async function (imageA, imageB) {
  const apiUrl = this.prefix + '/image/face/face_facecompare'

  const params = {
    image_a: imageA,
    image_b: imageB
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 跨年龄人脸识别
 * 上传两张人脸照，返回最相似的两张人脸及相似度
 * 详情请见：<http://ai.qq.com/doc/detectcrossageface.shtml>
 * @param {String} sourceImage 待对比人脸图片A, 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} targetImage 待对比人脸图片B, 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.faceDetectCrossAge = async function (sourceImage, targetImage) {
  const apiUrl = this.prefix + '/image/face/face_detectcrossageface'

  const params = {
    source_image: sourceImage,
    target_image: targetImage
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 五官定位
 * 对请求图片进行五官定位
 * 详情请见：<http://ai.qq.com/doc/faceshape.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} mode 检测模式，0-正常，1-大脸模式（默认1）
 */
exports.faceShape = async function (image, mode) {
  const apiUrl = this.prefix + '/image/face/face_faceshape'

  const params = {
    image,
    mode
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 人脸识别
 * 对请求图片中的人脸进行识别
 * 详情请见：<http://ai.qq.com/doc/faceidentify.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} groupId 候选人组ID（个体创建时设定）
 * @param {Number} topn 返回的候选人个数（默认9个）
 */
exports.faceIdentify = async function (image, groupId, topn) {
  const apiUrl = this.prefix + '/image/face/face_faceidentify'

  const params = {
    image: image,
    group_id: groupId,
    topn: topn
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 人脸验证
 * 对请求图片进行人脸验证
 * 详情请见：<http://ai.qq.com/doc/faceverify.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} personId 待验证的个体（Person）ID
 */
exports.faceVerify = async function (image, personId) {
  const apiUrl = this.prefix + '/image/face/face_faceverify'

  const params = {
    image: image,
    person_id: personId
  }

  return this.doHttpPost(apiUrl, params)
}
