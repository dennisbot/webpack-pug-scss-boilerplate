require('jquery-validation')
require('jquery.alphanum')
var validateFormRegister = require('../libs/validateFormRegister')
var Autofocus = require('../libs/autoFocus.js')

var init = function () {
  /* Filtrado de caracteres numéricos */
  $('#mobile, #dni, #day_born, #month_born, #year_born').numeric();

  /* Filtrado de caracteres alpha */
  $('#name, #lastname_mother, #lastname_father').alpha({
      allowSpace: " "
  });

  /* Validacion del formulario Registro */
  $('#register-form').validate( validateFormRegister );


  /* Configuración para enviar el Token CSRF por AJAX */
  function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie != '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) == (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  };

  var csrftoken = getCookie('csrftoken');

  function csrfSafeMethod(method) {
      // these HTTP methods do not require CSRF protection
      return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
  };


  /* Eventos Submit del Register */
  $('#btn_register').on('click', function(e) {
      e.preventDefault();
      var self = $(this);

      self.prop('disabled', 'disabled');

      if ( $('#register-form').valid() )  {

          self.removeProp('disabled');

          /* AJAX POST */
           $.ajax({
              type : 'POST',
              url  : '/register/process/', // the url where we want to POST
              data : JSON.stringify(data.form), // our data object
              dataType    : 'json',
              contentType : "application/json; charset=utf-8",

              beforeSend: function(xhr, settings) {
                  if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                      xhr.setRequestHeader("X-CSRFToken", csrftoken);
                  }
              },

              error:function (a1, a2, a3){
                  console.log('Server request error : '+a1+' | '+a2);
              },

              success:  function(data) {
              }
          });

      } else {

          self.removeProp('disabled');
      }
  });
  console.log('welcome to register/index');
}

module.exports = {
  init
};
