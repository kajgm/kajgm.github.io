import React from 'react';

//TODO: Implement collapsable tabs
export function Section(props: { title: string; children: React.ReactNode }) {
  return (
    <div className="content">
      <h1>{props.title}</h1>
      <div className="sub-content">{props.children}</div>
    </div>
  );
}
