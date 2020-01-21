require('dotenv').config();

const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* config options here */
  env: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_REDIRECT_URL: process.env.AUTH0_REDIRECT_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  },
});
