const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const nextConfig = {
  target: "serverless",
  env: {
    githubApiEndpoint: "https://api.github.com",
  },
};

module.exports = withPlugins([[withCSS], [withSass], [withImages]], nextConfig);
