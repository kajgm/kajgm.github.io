import React from 'react';
import Logo from '@ui/logo';
import linkData from '@data';

//TODO: Improve the icon animations
const Links = () => (
  <div id="links">
    <Logo>KGM</Logo>
    <section id="socials">
      {linkData.map((social) => (
        <a key={social.link} href={social.link}>
          <img key={social.title} src={social.image} className="social-icon dark-invert" alt={social.title} />
        </a>
      ))}
    </section>
  </div>
);

export default Links;
