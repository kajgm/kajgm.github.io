import React from 'react';

//TODO: Implement collapsable tabs
const Section = (props) => (
  <div id={props.sectionType} className="content">
    <h1 className="content-headers side-bar no-margin">{props.title}</h1>
    <div className="sub-content">{props.children}</div>
  </div>
);

export default Section;
