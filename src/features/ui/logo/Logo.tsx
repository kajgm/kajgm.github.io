import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

export function Logo(props: { children: React.ReactNode }) {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <div className={styles.logoBg}>
          <p className={styles.logoText}>{props.children}</p>
        </div>
      </Link>
    </div>
  );
}
