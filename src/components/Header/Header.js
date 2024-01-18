import React from 'react';
import { Link } from 'react-router-dom';

import DateTime from './DateTime';

import data from '../../data/header';

const Header = (props) => {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subtext = props.subtext ? props.subtext : data.roles.join(' - ');
  const location = data.location;

  return (
    <header id="header">
      <Link to="/">
        <h1 id="name-title">{text}</h1>
      </Link>
      <p id="subheader">{subtext}</p>

      <div id="location-time">
        <a href={location.link} id="location-link">
          <img src={location.image} id="location-icon" alt={location.name} />
          <p id="location-text">{location.name} - </p>
        </a>

        <DateTime />
      </div>
    </header>
  );
};

export default Header;
