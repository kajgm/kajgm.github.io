import React from 'react';

import data from '../../data/socials';

const Socials = () => (
  <div id="socials-container">
    {data.map((social) => (
      <a key={social.link} href={social.link}>
        <img key={social.title} src={social.image} className="socials-logos relative" alt={social.title} />
      </a>
    ))}
  </div>
);

export default Socials;
