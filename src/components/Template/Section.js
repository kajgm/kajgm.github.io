import React from 'react';

import '../../static/css/main.css';
import '../../static/css/globals.css';
import '../../static/css/extras.css';
import '../../static/css/animations.css';
import '../../static/css/colors.css';
import '../../static/css/personal-logo.css';
import '../../static/css/scrollbar.css';

const Section = (props) => (
  <div id={props.sectionType} className="content homepage">
    <h1 className="content-headers side-bar no-margin">{props.title}</h1>
    <div className="sub-content">{props.children}</div>
  </div>
);

export default Section;
