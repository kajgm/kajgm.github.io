import React from 'react';
import { Link } from 'react-router-dom';

import DateTime from './DateTime';

import data from '../../data/header';

const Header = (props) => {
  const subtitle = data.roles.toString().replaceAll(',', ' - ');

  return (
    <div id="main-header" className="relative">
      <Link to="/" className="no-decoration">
        <h1 id="name-title" className="no-margin">
          {props.children}
        </h1>
      </Link>
      <p id="subheader-text" className="no-margin">
        {subtitle}
      </p>

      <div id="location-time-container" className="no-margin">
        {data.locations.map((value) => (
          <a key={value.link} className="no-decoration" id="location-time-container" href={value.link}>
            <img key={value.name} src={value.image} id="location" className="relative" alt={value.name} />
            <p key={value.locaion} id="location-text" className="no-margin">
              {value.name} -{' '}
            </p>
          </a>
        ))}

        <DateTime />
      </div>
    </div>
  );
};

export default Header;
