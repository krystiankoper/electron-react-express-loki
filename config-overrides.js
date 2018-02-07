const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  // eslint-disable-next-line no-param-reassign
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  // eslint-disable-next-line no-param-reassign
  config = rewireLess.withLoaderOptions({
    modifyVars: { '@primary-color': '#FF0000' },
  })(config, env);
  return config;
};
