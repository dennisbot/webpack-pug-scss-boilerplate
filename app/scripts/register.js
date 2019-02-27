// required for livereload to work (*.pug files, this is trimmed in prod)
if (process.env.NODE_ENV !== 'production') {
  require('../register.pug')
}

import '../styles/main.scss'
var $ = require('jquery')
/* esta es la forma sugerida para el startup de root (/) */
import common from './common/'
import register from './register/'


$(document).ready(() => {
  console.log('mensaje dentro de document ready para register js');
  [common, register].map((module) => module.init());
})
