import React from 'react';
import Layout from '../components/Layout';
import { Auth0Provider } from 'use-auth0-hooks';

const App = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={process.env.AUTH0_REDIRECT_URL}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
};

export default App;
