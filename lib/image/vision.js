/**
 * 智能鉴黄
 * 识别一个图像是否为色情图像
 * 详情请见：<http://ai.qq.com/doc/jianhuang.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} imageUrl 如果image和image_url都提供，仅支持image_url，image和image_url必须至少提供一个
 */
exports.imagePorn = async function (image, imageUrl) {
  const apiUrl = this.prefix + '/vision/vision_porn'

  const params = {}

  if (image) {
    params.image = image
  } else {
    params.image_url = imageUrl
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 暴恐图片识别
 * 识别一个图像是否为暴恐图像
 * 详情请见：<http://ai.qq.com/doc/imageterrorism.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} imageUrl 如果image和image_url都提供，仅支持image_url，image和image_url必须至少提供一个
 */
exports.imageTerrorism = async function (image, imageUrl) {
  const apiUrl = this.prefix + '/image/image_terrorism'

  const params = {}

  if (image) {
    params.image = image
  } else {
    params.image_url = imageUrl
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 场景识别
 * 对图片进行场景识别，快速找出图片中包含的场景信息
 * 详情请见：<http://ai.qq.com/doc/visionimgidy.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} topk 返回结果个数（已按置信度倒排）
 * @param {Number} format 图片格式
 */
exports.imageScener = async function (image, topk, format = 1) {
  const apiUrl = this.prefix + '/vision/vision_scener'

  const params = {
    image,
    topk,
    format
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 物体识别
 * 对图片进行物体识别，快速找出图片中包含的物体信息
 * 详情请见：<http://ai.qq.com/doc/visionimgidy.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} topk 返回结果个数（已按置信度倒排）
 * @param {Number} format 图片格式
 */
exports.imageObjectr = async function (image, topk, format = 1) {
  const apiUrl = this.prefix + '/vision/vision_objectr'

  const params = {
    image,
    topk,
    format
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 图像标签识别
 * 识别一个图像的标签信息,对图像分类
 * 详情请见：<http://ai.qq.com/doc/imagetag.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.imageTag = async function (image) {
  const apiUrl = this.prefix + '/image/image_tag'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 模糊图片检测
 * 判断一个图像的模糊程度
 * 详情请见：<http://ai.qq.com/doc/imagefuzzy.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.imageFuzzy = async function (image) {
  const apiUrl = this.prefix + '/image/image_fuzzy'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 美食图片识别
 * 识别一个图像是否为美食图像
 * 详情请见：<http://ai.qq.com/doc/imagefood.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.imageFood = async function (image) {
  const apiUrl = this.prefix + '/image/image_food'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 花草/车辆识别
 * 根据用户选择的场景，识别出图片中的花草或车辆信息
 * 详情请见：<http://ai.qq.com/doc/imgidentify.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} scene 识别场景，1-车辆识别，2-花草识别
 */
exports.imageIdentify = async function (image, scene) {
  const apiUrl = this.prefix + '/vision/vision_imgidentify'

  const params = {
    image,
    scene
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 看图说话
 * 用一句话描述图片
 * 详情请见：<http://ai.qq.com/doc/imgtotext.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 */
exports.imageToText = async function (image) {
  const apiUrl = this.prefix + '/vision/vision_imgtotext'

  const sessionId = await this.getSession()

  const params = {
    image: image,
    session_id: sessionId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 图片滤镜（AI Lab）
 * 对原图进行滤镜特效处理，更适合风景图片
 * 详情请见：<http://ai.qq.com/doc/ptuimgfilter.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} filter 滤镜特效编码
 */
exports.imageFilter = async function (image, filter) {
  const apiUrl = this.prefix + '/vision/vision_imgfilter'

  const sessionId = await this.getSession()

  const params = {
    image: image,
    filter: filter,
    session_id: sessionId
  }

  return this.doHttpPost(apiUrl, params)
}
