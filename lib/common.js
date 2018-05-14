const axios = require('axios')
const md5 = require('md5')
const qs = require('querystring')
const uuid = require('uuid')
const Iconv = require('iconv').Iconv

class API {
  constructor (
    appId,
    appKey,
    getSession
  ) {
    this.appId = appId
    this.appKey = appKey
    this.getSession =
    getSession ||
    async function () {
      return 'chat_session'
    }
    this.prefix = 'https://api.ai.qq.com/fcgi-bin'
  }

  async doHttpPost (url, params) {
    params.app_id = this.appId
    params.time_stamp = parseInt(new Date().getTime() / 1000)
    params.nonce_str = uuid().replace(/-/g, '')

    const sign = await this.getReqSign(params)

    params.sign = sign
    console.log(params)
    const requestParams = {
      method: 'post',
      url: url,
      data: qs.stringify(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const res = await axios(requestParams)

    return res.data
  }

  async getReqSign (params) {
    // 1. 字典升序排序
    params = await this.objKeySort(params)

    // 2. 拼按URL键值对
    let sign = ''

    Object.keys(params).forEach(function (key) {
      sign += key + '=' + encodeURIComponent(params[key]) + '&'
    })

    // 3. 拼接app_key
    sign += 'app_key' + '=' + this.appKey

    // 4. MD5运算+转换大写，得到请求签名
    sign = md5(sign).toUpperCase()

    return sign
  }

  async objKeySort (obj) {
    // 排序的函数
    var newkey = Object.keys(obj).sort()
    // 先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newObj = {}
    for (var i = 0; i < newkey.length; i++) {
      // 遍历newkey数组
      newObj[newkey[i]] = obj[newkey[i]]// 向新创建的对象中按照排好的顺序依次增加键值对
    }
    return newObj
  }

  async encode2GBK (str) {
    var iconv = new Iconv('UTF-8', 'GBK')
    var from = iconv.convert(str)
    var rt = ''
    for (var i = 0; i < from.length; i++) {
      var c = from.readUInt8(i)
      if (c > 127) {
        i++
        var c2 = from.readUInt8(i)
        rt += '%' + c.toString(16) + '%' + c2.toString(16)
      } else {
        rt += String.fromCharCode(c)
      }
    }
    return rt
  }

  async encode2UTF8 (str) {
    console.log(str)
    var iconv = new Iconv('GBK', 'UTF-8')
    var from = iconv.convert(str)
    console.log(from)
    var rt = ''
    for (var i = 0; i < from.length; i++) {
      var c = from.readUInt8(i)
      if (c > 127) {
        i++
        var c2 = from.readUInt8(i)
        rt += '%' + c.toString(16) + '%' + c2.toString(16)
      } else {
        rt += String.fromCharCode(c)
      }
    }
    return rt
  }
}

/**
 * 用于支持对象合并。将对象合并到API.prototype上，使得能够支持扩展
 * @param {Object} obj 要合并的对象
 */
API.mixin = function (obj) {
  for (const key in obj) {
    if (API.prototype.hasOwnProperty(key)) {
      throw new Error(
        "Don't allow override existed prototype method. method: " + key
      )
    }
    API.prototype[key] = obj[key]
  }
}

module.exports = API
