import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Amplify, { Auth, Hub, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-jz'; // using this because main repo is BROKE

import * as mutations from '../src/graphql/mutations';

Amplify.configure(awsconfig);

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    Hub.listen('auth', data => {
      const { payload } = data;
      if (payload.event === 'signUp') {
        console.log('a user has signed up!');
      }
      // console.log('A new auth event has happened: ', data);
      if (payload.event === 'signIn') {
        const cognitoID = payload.data.attributes.sub;
        const userDetails = {
          input: {
            cognitoID,
            role: 'ADMIN',
          },
        };
        const newUser = API.graphql(
          graphqlOperation(mutations.createUser, userDetails),
        )
          .then(data => {
            console.log(data);
          })
          .catch(err => console.error(err));
        // API.graphql(graphqlOperation(mutations.createUser, userDetails))
        //   .then(data => {
        //     console.log(data);
        //   })
        //   .catch(err => console.error(err));
        // get user info
        // API.graphql(graphqlOperation(queries.getUser, { id: cognitoID }));
        // set to state?
        console.log('a user has signed in!');
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!');
      }
    });
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default withAuthenticator(App, true);
