const tencentAi = require('./tencentAi');
const fs = require('fs');

(async () => {
  const file = fs.readFileSync('./files/demo_face.jpg')
  const result = await tencentAi.imagePorn(file.toString('base64'))
  console.log(JSON.stringify(result))
})()
