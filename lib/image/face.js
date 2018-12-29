/**
 * 人脸检测与分析
 * 识别上传图像上面的人脸信息
 * 详情请见：<http://ai.qq.com/doc/detectface.shtml>
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {Number} mode 检测模式，0-正常，1-大脸模式（默认1）
 */
exports.faceDetect = async function (image, mode) {
  const apiUrl = this.prefix + '/face/face_detectface'

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
  const apiUrl = this.prefix + '/face/face_detectmultiface'

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
  const apiUrl = this.prefix + '/face/face_facecompare'

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
  const apiUrl = this.prefix + '/face/face_detectcrossageface'

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
  const apiUrl = this.prefix + '/face/face_faceshape'

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
  const apiUrl = this.prefix + '/face/face_faceidentify'

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
  const apiUrl = this.prefix + '/face/face_faceverify'

  const params = {
    image: image,
    person_id: personId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-个体创建
 * 创建一个个体（Person）
 * 详情请见：<http://ai.qq.com/doc/newperson.shtml>
 * @param {String} groupIds
 * @param {String} image 原始图片的base64编码数据（原图大小上限1MB）
 * @param {String} personId 指定的个体（Person）ID
 * @param {String} personName 名字
 * @param {String} tag 备注信息
 */
exports.faceNewPerson = async function (groupIds, image, personId, personName, tag) {
  const apiUrl = this.prefix + '/face/face_newperson'

  const params = {
    group_ids: groupIds,
    image: image,
    person_id: personId,
    person_name: personName,
    tag: tag
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-删除个体
 * 删除一个个体（Person）
 * 详情请见：<http://ai.qq.com/doc/delperson.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 */
exports.faceDelPerson = async function (personId) {
  const apiUrl = this.prefix + '/face/face_delperson'

  const params = {
    person_id: personId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-增加人脸
 * 将一组人脸（Face）加入到一个个体（Person）中
 * 详情请见：<http://ai.qq.com/doc/addface.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 * @param {String} images 多个人脸图片之间用“|”分隔
 * @param {String} tag 备注信息
 */
exports.faceAddFace = async function (personId, images, tag) {
  const apiUrl = this.prefix + '/face/face_addface'

  const params = {
    person_id: personId,
    images: images,
    tag: tag
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-删除人脸
 * 从一个个体（Person）中删除一组人脸（Face）
 * 详情请见：<http://ai.qq.com/doc/delface.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 * @param {String} faceIds 需要删除的人脸（Face）ID（多个之间用“\
 */
exports.faceDelFace = async function (personId, faceIds) {
  const apiUrl = this.prefix + '/face/face_delface'

  const params = {
    person_id: personId,
    face_ids: faceIds
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-设置信息
 * 设置个体（Person）的名字或备注
 * 详情请见：<http://ai.qq.com/doc/setinfo.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 * @param {String} personName 名字
 * @param {String} tag 备注信息
 */
exports.faceSetPersonInfo = async function (personId, personName, tag) {
  const apiUrl = this.prefix + '/face/face_setinfo'

  const params = {
    person_id: personId,
    person_name: personName,
    tag: tag
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 个体管理-获取信息
 * 获取一个个体（Person）的信息
 * 详情请见：<http://ai.qq.com/doc/getinfo.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 */
exports.faceGetPersonInfo = async function (personId) {
  const apiUrl = this.prefix + '/face/face_getinfo'

  const params = {
    person_id: personId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 信息查询-获取组列表
 * 获取应用下所有的组（Group）ID列表
 * 详情请见：<http://ai.qq.com/doc/getgroupids.shtml>
 * @param {String} personId 需要删除的个体（Person）ID
 */
exports.faceGetGroupIds = async function () {
  const apiUrl = this.prefix + '/face/face_getgroupids'

  const params = {}

  return this.doHttpPost(apiUrl, params)
}

/**
 * 信息查询-获取个体列表
 * 获取一个组（Group）中的所有个体（Person）ID
 * 详情请见：<http://ai.qq.com/doc/getpersonids.shtml>
 * @param {String} groupId
 */
exports.faceGetPersonIds = async function (groupId) {
  const apiUrl = this.prefix + '/face/face_getpersonids'

  const params = {
    group_id: groupId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 信息查询-获取人脸列表
 * 根据个体（Person）ID 获取人脸（Face）ID列表
 * 详情请见：<http://ai.qq.com/doc/getfaceids.shtml>
 * @param {String} personId
 */
exports.faceGetFaceIds = async function (personId) {
  const apiUrl = this.prefix + '/face/face_getfaceids'

  const params = {
    person_id: personId
  }

  return this.doHttpPost(apiUrl, params)
}

/**
 * 信息查询-获取人脸信息
 * 根据人脸（Face）ID 获取人脸（Face）信息
 * 详情请见：<http://ai.qq.com/doc/getfaceinfo.shtml>
 * @param {String} faceId
 */
exports.faceGetFaceInfo = async function (faceId) {
  const apiUrl = this.prefix + '/face/face_getfaceinfo'

  const params = {
    face_id: faceId
  }

  return this.doHttpPost(apiUrl, params)
}
