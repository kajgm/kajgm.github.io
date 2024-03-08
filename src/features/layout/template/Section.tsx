import React from 'react';

//TODO: Implement collapsable tabs
export function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <section className="content">
      <h1>{props.title}</h1>
      <section className="sub-content">{props.children}</section>
    </section>
  );
}
