import React from 'react';
import Layout from '../components/Layout';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig);

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default withAuthenticator(App, true);
