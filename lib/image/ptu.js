/**
 * 人脸美妆
 * 给定图片和美妆编码，对原图进行人脸美妆特效处理
 * 详情请见：<http://ai.qq.com/doc/facecosmetic.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} cosmetic 美妆编码
 */
exports.ptuFaceCosmetic = async function (image, cosmetic) {
  const apiUrl = this.prefix + '/ptu/ptu_facecosmetic'

  const params = {
    image,
    cosmetic
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 人脸变妆
 * 给定图片和变妆编码，对原图进行人脸变妆特效处理
 * 详情请见：<http://ai.qq.com/doc/facedecoration.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} decoration 变妆编码
 */
exports.ptuFaceDecoration = async function (image, decoration) {
  const apiUrl = this.prefix + '/ptu/ptu_facedecoration'

  const params = {
    image,
    decoration
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 图片滤镜（天天P图）
 * 对原图进行滤镜特效处理，更适合人物图片
 * 详情请见：<http://ai.qq.com/doc/ptuimgfilter.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} filter 滤镜特效编码
 */
exports.ptuImgFilter = async function (image, filter) {
  const apiUrl = this.prefix + '/ptu/ptu_imgfilter'

  const params = {
    image,
    filter
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 人脸融合
 * 给定图片和融合模板，对原图进行人脸融合特效处理
 * 详情请见：<http://ai.qq.com/doc/facemerge.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} model 默认素材模板；自定义素材模板可在应用详情页上传和查询
 */
exports.ptuFaceMerge = async function (image, model) {
  const apiUrl = this.prefix + '/ptu/ptu_facemerge'

  const params = {
    image,
    model
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 大头贴
 * 给定图片和大头贴编码，对原图进行大头贴特效处理
 * 详情请见：<http://ai.qq.com/doc/facesticker.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} sticker 大头贴编码
 */
exports.ptuFaceMerge = async function (image, sticker) {
  const apiUrl = this.prefix + '/ptu/ptu_facesticker'

  const params = {
    image,
    sticker
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 颜龄检测
 * 给定图片，对原图进行人脸颜龄检测处理
 * 详情请见：<http://ai.qq.com/doc/faceage.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} sticker 大头贴编码
 */
exports.ptuFaceAge = async function (image) {
  const apiUrl = this.prefix + '/ptu/ptu_faceage'

  const params = {
    image
  }

  return this.doHttpPost(apiUrl, params)
}
