module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    console.log('cra webpack-config:', config, env);
    return config;
  },
};
