import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Account = props => {
  return (
    <>
      <section className="section">
        <h1 className="title">Account</h1>
        <h2 className="title is-4">Personal Info</h2>
        <h3 className="title is-5">First Name</h3>
        <p>{user.given_name}</p>
        <h3 className="title is-5">Last Name</h3>
        <p>{user.family_name}</p>
      </section>
      <section className="section">
        <h2 className="title is-4">Agency Info</h2>
      </section>
      <section className="section">
        <h2 className="title is-4">Secrets</h2>
        <p>Secrets here.</p>
      </section>
      <section className="section">
        <h2 className="title is-4">Danger Zone</h2>
        <p>Delete your account</p>
      </section>
    </>
  );
};

Account.propTypes = {};

export default Account;
