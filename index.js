const API = require('./lib/common')

API.mixin(require('./lib/nlp/nlp_base'))
API.mixin(require('./lib/nlp/nlp_sem'))
API.mixin(require('./lib/nlp/nlp_emo'))
API.mixin(require('./lib/nlp/nlp_chat'))
API.mixin(require('./lib/nlp/nlp_trans'))
API.mixin(require('./lib/nlp/nlp_image_translate'))
API.mixin(require('./lib/nlp/nlp_speech_translate'))
API.mixin(require('./lib/nlp/nlp_text_detect'))
API.mixin(require('./lib/aai/aai_asr'))

module.exports = API
