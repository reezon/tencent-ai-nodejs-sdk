const tencentAi = require('./tencentAi');

(async () => {
  const result = await tencentAi.aaiWxasrlong('https://instaud.io/2JmY/download')
  console.log(JSON.stringify(result))
})()
