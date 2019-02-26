import '../styles/main.scss'
var $ = require('jquery')
/* esta es la forma sugerida para el startup de root (/) */
import common from './common/'
import about from './about/'

console.log('este es la pagina about')
$(document).ready(() => {
  console.log('mensaje dentro de document ready para about js');
  [common, about].map((module) => module.init());
})
