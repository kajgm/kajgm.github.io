import React from 'react';

import Logo from './Logo';

import data from '../../data/links';

//TODO: Improve the icon animations
const Links = () => (
  <div id="links">
    <Logo>KGM</Logo>
    <section id="socials">
      {data.map((social) => (
        <a key={social.link} href={social.link}>
          <img key={social.title} src={social.image} className="social-icon" alt={social.title} />
        </a>
      ))}
    </section>
  </div>
);

export default Links;
