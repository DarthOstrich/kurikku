import React from 'react';
import PropTypes from 'prop-types';

const createcampaign = props => {
  return (
    <>
      <section className="section">
        <h1 className="title">Create Campaign</h1>
        <form className="form" action="">
          <div className="field">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Joe Dimaggio"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" type="submit">
                Create
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

createcampaign.propTypes = {};

export default createcampaign;
