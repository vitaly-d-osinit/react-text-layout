const path = require("path");

const REPO_NAME = 'react-text-layout'

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '',

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, "src")
    };
    return config;
  }
};
