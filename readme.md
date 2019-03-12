# Webpack Pug SCSS Skeleton

Skeleton basado en webpack 4 para construir aplicaciones web.

## Características:
* [Pug](https://pugjs.org) como motor de plantillas
* [SCSS](http://sass-lang.com) preprocesador para CSS ([autoprefixer](https://github.com/postcss/autoprefixer) incluido)
* JS linting con [Eslint](https://eslint.org), extiende [eslint-config-standard](https://github.com/standard/eslint-config-standard), incluye los siguientes plugins:
  * [import](https://github.com/benmosher/eslint-plugin-import)
  * [node](https://github.com/mysticatea/eslint-plugin-node)
  * [promise](https://github.com/xjamundx/eslint-plugin-promise)
  * [compat](https://github.com/amilajack/eslint-plugin-compat)
* CSS linting con [Stylelint](http://stylelint.io)

## Uso:
* Clona el repo via `git clone https://github.com/alexnoz/webpack-pug-scss-boilerplate.git`
* `cd skeleton-frontend`
* `git checkout webpack`
* Ejecuta `npm install` para descargar todas las dependencias
* Ejecuta `npm run start` para iniciar el [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (`localhost:8080` se abrirá automáticamente)
* Empieza a desarrollar
* Cuándo completes tu desarrollo, ejecuta `npm run build` para obtener la versión de producción de tu app
* Si quieres analizar tu bundle de producción, ejecuta `npm run analyze` para iniciar el [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

## Multiples páginas:

Con algunos ajustes, puedes usar este skeleton para aplicaciones de múltiples páginas. Supongamos que tienes la siguiente estructura de proyecto:

```
app/
|-index.pug
|-index.js
|
|-about/
|   |-about.pug
|   |-index.js
|
...
```

1. Has los siguientes ajustes al archivo `webpack.config.js`:
  ```javascript
  // webpack.config.js

  // ...

  const pages = [
    parts.page({
      title: "Home",
      favicon: `${paths.app}/images/favicon.ico`,
      entry: {
        home: `${paths.app}/scripts/index.js`
      },
      template: path.join(paths.app, "index.pug"),
      chunks: ["home"]
    }),
    parts.page({
      title: "About",
      path: "about",
      favicon: `${paths.app}/images/favicon.ico`,
      entry: {
        about: `${paths.app}/scripts/about.js`
      },
      template: path.join(paths.app, "about.pug"),
      chunks: ["about"]
    }),

    // ...

  // ...
  ```

  Añade/quita entradas en pages con la función `parts.page` según el número de páginas que quieras añadir/quitar.

2. Para que funcione el Live Reload, necesitas incluir el siguiente snippet en cada archivo `index.js` (para cada página):

  ```javascript
  if (process.env.NODE_ENV !== 'production') {
    require('./path/to/page.pug');
  }
  ```
