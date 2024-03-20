import React from 'react';
import styles from './Section.module.scss';

//TODO: Implement collapsable tabs
export function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.content}>
      <h1>{props.title}</h1>
      <div className={styles.subContent}>{props.children}</div>
    </div>
  );
}
