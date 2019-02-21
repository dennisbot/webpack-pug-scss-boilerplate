/* global $ */
import '../styles/main.scss'
import saludar from './libs/test'
require('jquery-validation')
require('jquery.alphanum')
var validateFormLogin = require('./libs/validateFormLogin')
var Autofocus = require('./libs/autoFocus.js')

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
}

$(document).ready(function () {
  $('#container').html('reporte dsafsdf:D')
  APP.login.init()
})

saludar()

var APP = {
  login: {
    init: function () {
      /* Invocar Autofocus */
      var autoFocus = new Autofocus(
        'day_born', 'month_born', 'year_born', 'dni'
      )

      /* Autocompleta ceros en campos del login */
      $('#day_born, #month_born').focusout(function () {
        var field = $(this)
        var value = parseInt(field.val())

        if (value < 10 && field.val().length === 1) {
          field.val('0' + field.val())
        }
      })

      /* Filtro numérico para los campos del login */
      $('#login-form .login-form__field input').numeric({
        allowDecSep: false,
        allowMinus: false
      })

      /* Validación del formulario Login */
      var login_validate = $('#login-form').validate(validateFormLogin)

      /* Validación para la fecha de nacimiento */
      $('#dni').on('focus', function () {
        $('#birth_date').val(
          [
            $('#year_born').val(),
            $('#month_born').val(),
            $('#day_born').val()
          ].join('-')
        )
      })

      login_validate.element('input[name="birth_date"]')

      /* Eventos Submit del Login */
      $('#btn_login').on('click', function (e) {
        e.preventDefault()

        var self = $(this)
        self.prop('disabled', 'disabled')

        $('#birth_date').val(
          [
            $('#year_born').val(),
            $('#month_born').val(),
            $('#day_born').val()
          ].join('-')
        )

        if ($('#login__form').valid()) {
          self.removeProp('disabled')
          $('#login__form').submit()
        } else {
          self.removeProp('disabled')
        }
      })
    }
  }
}
