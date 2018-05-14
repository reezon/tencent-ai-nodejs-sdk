const tencentAi = require('./tencentAi');

(async () => {
  const result = await tencentAi.wordCom('今天深圳的天气怎么样？明天呢')
  console.log(JSON.stringify(result))
  const r = await tencentAi.encode2UTF8(result.data.base_tokens[0].word)
  console.log(r)
})()
