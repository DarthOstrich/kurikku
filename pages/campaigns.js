import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const campaigns = props => {
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
