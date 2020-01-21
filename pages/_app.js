import React from 'react';
import Layout from '../components/Layout';
import { Auth0Provider } from 'use-auth0-hooks';

const App = ({ Component, pageProps }) => {
  const { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_REDIRECT_URL } = process.env;
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_REDIRECT_URL}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
};

export default App;
