import React from 'react';

import DateTime from './DateTime';

import data from '../../data/location';

const LocationTime = () => (
  <section id="location-time">
    <a href={data.link} id="location-link">
      <img src={data.image} id="location-icon" alt={data.name} />
      <p id="location-text">{data.name}</p>
    </a>
    <DateTime timeZone={data.timeZone} />
  </section>
);

export default LocationTime;
