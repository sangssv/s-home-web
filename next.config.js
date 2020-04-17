const withSass = require('@zeit/next-sass')
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack')

module.exports = withSass({
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  }
})