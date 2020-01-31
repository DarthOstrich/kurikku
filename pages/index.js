import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';

const Index = () => {
  // const data = API.graphql(graphqlOperation(queries.listTasks)).then(data => {
  //   console.log(data);
  // });
  return (
    <section className="section">
      <h1 className="title">Welcome to kurikku</h1>
    </section>
  );
};

export default Index;
