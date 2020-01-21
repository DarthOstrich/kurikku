require('dotenv').config();

const withSass = require('@zeit/next-sass');
module.exports = withSass({
  /* config options here */
  env: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  },
});
