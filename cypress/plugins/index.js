const webpack = require('@cypress/webpack-dev-server');
const webpackConfig = require('../../webpack.config'); // Caminho para a sua configuração do webpack

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    webpack({ ...options, webpackConfig }) // Inicializa o webpack com a configuração
  );
  return config;
};
