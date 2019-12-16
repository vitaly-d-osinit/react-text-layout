const path = require("path");

const REPO_NAME = 'react-text-layout';

const commonRuntimeConfig = {
  ASSET_PREFIX: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '',
};

module.exports = {
  env: commonRuntimeConfig,
  publicRuntimeConfig: commonRuntimeConfig,
  assetPrefix: commonRuntimeConfig.ASSET_PREFIX,

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src")
    };
    return config;
  }
};
