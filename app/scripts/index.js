import '../styles/main.scss'

var $ = require('jquery')

/* sintaxis import y require, es mejor usar de un solo tipo */
import saludar from './libs/test'
/* esta es la forma sugerida para el startup de root (/) */
import common from './common/'
import home from './home/'

$(document).ready(function () {
  $('#container').html('mensaje dentro de document ready function');
  [common, home].map((module) => module.init());
})

/* probando nuestro mensaje desde un modulo personalizado */
saludar()
