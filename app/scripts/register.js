import '../styles/main.scss'
var $ = require('jquery')
/* esta es la forma sugerida para el startup de root (/) */
import common from './common/'
import register from './register/'

console.log('este es la pagina register')
$(document).ready(() => {
  console.log('mensaje dentro de document ready para register js');
  [common, register].map((module) => module.init());
})
