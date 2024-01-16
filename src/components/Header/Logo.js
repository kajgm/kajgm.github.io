import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => (
  <div id="personal-logo">
    <Link to="/">
      <div id="personal-logo-bg" className="relative">
        <p id="personal-logo-text" className="absolute">
          {props.children}
        </p>
      </div>
    </Link>
  </div>
);

export default Logo;
