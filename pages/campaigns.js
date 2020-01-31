import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../src/graphql/queries';

const campaigns = props => {
  let user = {};
  const session = Auth.currentSession()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  const data = API.graphql(graphqlOperation(queries.listCampaigns)).then(
    data => {
      console.log(data);
    },
  );
  return (
    <>
      <section className="section">
        <h1 className="title">Campaigns</h1>
        <h2>Active Campaigns</h2>
        <ul>
          <li>
            <Link href="/">
              <a>Link</a>
            </Link>
          </li>
        </ul>
        <Link href="/createcampaign">
          <a className="button ">Create New</a>
        </Link>
      </section>
    </>
  );
};

campaigns.propTypes = {};

export default campaigns;
