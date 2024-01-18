import React from 'react';

//TODO: Implement collapsable tabs
const Section = (props) => (
  <section className="content">
    <h1>{props.title}</h1>
    <section className="sub-content">{props.children}</section>
  </section>
);

export default Section;
