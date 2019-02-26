const Navegador = require('../libs/browser.js');

const home = {
  init: () => {

    var browser = new Navegador();
    
    if ( browser.isVersion('tablet') ) {
      console.log("Es Android Tablet");
    }

    if ( browser.isVersion('chrome') ) {
      console.log("Es Chrome");
    }

    console.log('welcome to common/index');
  }
}

export default home