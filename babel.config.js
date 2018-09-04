module.exports = function babelConfig(api) {
  api.cache(false);

  return {
    presets: ['@babel/env', '@babel/flow'],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
    ],
  };
};
