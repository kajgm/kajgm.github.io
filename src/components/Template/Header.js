import React from 'react';

import DateTime from './DateTime';

import data from '../../data/header';

const Header = () => (
  <div id="main-header" className="relative">
    <a className="no-decoration" href="https://kajgrant.github.io/">
      <h1 id="name-title" className="no-margin">
        Kaj Grant-Mathiasen
      </h1>
    </a>
    <p id="subheader-text" className="no-margin">
      Computer Engineer - Software Engineer - Videographer - Photographer
    </p>

    <div id="location-time-container" className="no-margin">
      <a className="no-decoration" id="location-time-container" href="https://en.wikipedia.org/wiki/Vancouver">
        <img src={data[0].image} id="location" className="relative" alt="Location" />
        <p id="location-text" className="no-margin">
          Vancouver, BC. Canada -{' '}
        </p>
      </a>
      <DateTime />
    </div>
  </div>
);

export default Header;
