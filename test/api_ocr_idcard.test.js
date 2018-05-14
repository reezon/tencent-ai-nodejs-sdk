const tencentAi = require('./tencentAi');
const fs = require('fs');

(async () => {
  const file = fs.readFileSync('./files/demo_idcard.jpg')
  const result = await tencentAi.ocrIdCard(file.toString('base64'))
  console.log(JSON.stringify(result))
})()
