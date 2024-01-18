import React from 'react';
import { Link } from 'react-router-dom';

import DateTime from './DateTime';

import data from '../../data/header';

const Header = (props) => {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subtext = props.subtext ? props.subtext : data.roles.join(' - ');

  return (
    <div id="header">
      <Link to="/" className="no-decoration">
        <h1 id="name-title" className="no-margin">
          {text}
        </h1>
      </Link>
      <p id="subheader-text" className="no-margin">
        {subtext}
      </p>

      <div id="location-time-container" className="no-margin">
        {!props.location
          ? data.locations.map((value) => (
              <a key={value.link} className="no-decoration" id="location-time-container" href={value.link}>
                <img key={value.name} src={value.image} id="location" className="relative" alt={value.name} />
                <p key={value.locaion} id="location-text" className="no-margin">
                  {value.name} -{' '}
                </p>
              </a>
            ))
          : null}

        <DateTime />
      </div>
    </div>
  );
};

export default Header;
