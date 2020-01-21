import React from 'react';
import PropTypes from 'prop-types';
import { withAuth, withLoginRequired } from 'use-auth0-hooks';

const Dashboard = ({ auth }) => {
  const { user } = auth;
  const { sub: authUserID } = user;
  return (
    <>
      <section className="section">
        <h1 className="title">Dashboard</h1>
        <p>Welcome back: {user.given_name}</p>
      </section>
    </>
  );
};

Dashboard.propTypes = {};

export default withLoginRequired(withAuth(Dashboard));
