import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <HelmetProvider>
      <div className="not-found">
        <Helmet title="404 Not Found">
          <meta name="description" content="Hey! There's nothing here!" />
        </Helmet>
        <h1>Page Not Found</h1>
        <p>
          How about we go{' '}
          <strong>
            <Link to="/">home</Link>
          </strong>
          ?
        </p>
      </div>
    </HelmetProvider>
  );
};

export default PageNotFound;