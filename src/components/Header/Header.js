import React from 'react';
import { Link } from 'react-router-dom';

import LocationTime from '../LocationTime/LocationTime';

import data from '../../data/header';

const Header = (props) => {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subtext = props.subtext ? props.subtext : data.roles.join(' / ');

  return (
    <header id="header">
      <Link to="/">
        <h1 id="name-title">{text}</h1>
      </Link>
      <p id="subheader">{subtext}</p>
      <LocationTime />
    </header>
  );
};

export default Header;
