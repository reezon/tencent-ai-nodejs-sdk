const tencentAi = require('./tencentAi');

(async () => {
  const result = await tencentAi.nlpTextTranslate('今天深圳的天气怎么样？明天呢')
  console.log(JSON.stringify(result))
})()
