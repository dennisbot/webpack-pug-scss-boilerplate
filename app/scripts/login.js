import '../styles/main.scss'
var $ = require('jquery')
/* esta es la forma sugerida para el startup de root (/) */
import common from './common/'
import login from './login/'

console.log('este es la pagina login')
$(document).ready(() => {
  console.log('mensaje dentro de document ready para login js');
  [common, login].map((module) => module.init());
})
