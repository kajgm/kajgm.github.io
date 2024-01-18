import React from 'react';
import { Link } from 'react-router-dom';

//TODO: Improve logo animation
const Logo = (props) => (
  <div id="logo">
    <Link to="/">
      <div id="logo-bg">
        <p id="logo-text">{props.children}</p>
      </div>
    </Link>
  </div>
);

export default Logo;
