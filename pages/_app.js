import React from 'react';
import Layout from '../components/Layout';
import { Auth0Provider } from 'use-auth0-hooks';

const App = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      domain={'designnutt.auth0.com'}
      clientId={process.env.AUTH0_CLIENT_ID}
      redirectUri={'http://localhost:3000'}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
};

export default App;
