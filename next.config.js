require('dotenv').config();
// solution to fixing aws-amplify-react
// global.navigator = () => null;
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = () => {};
//   require.extensions['.css'] = file => {};
// }
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
// const withCSS = require('@zeit/next-css');
module.exports = withCSS(
  withSass({
    env: {
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_REDIRECT_URL: process.env.AUTH0_REDIRECT_URL,
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    },
  }),
);
