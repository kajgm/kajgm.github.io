import React from 'react';
import { Link } from 'react-router-dom';

const Logo = (props) => (
  <div id="logo">
    <Link to="/">
      <div id="logo-bg" className="relative">
        <p id="logo-text" className="absolute">
          {props.children}
        </p>
      </div>
    </Link>
  </div>
);

export default Logo;
