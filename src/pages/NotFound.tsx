import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styles from './NotFound.module.scss';

const PageNotFound = () => {
  return (
    <HelmetProvider>
      <div className={styles.notFound}>
        <Helmet title="404 Not Found">
          <meta name="description" content="Hey! There's nothing here!" />
        </Helmet>
        <h1>Oops! There's nothing here...</h1>
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
