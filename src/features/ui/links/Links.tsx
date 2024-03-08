import React from 'react';
import { Logo } from 'features/ui';
import { linksData } from 'data/links';

type socialType = {
  title: string;
  link: string;
  image: string;
};

export function Links() {
  return (
    <div id="links">
      <Logo>KGM</Logo>
      <section id="socials">
        {linksData.map((social: socialType) => (
          <a key={social.link} href={social.link}>
            <img key={social.title} src={social.image} className="social-icon dark-invert" alt={social.title} />
          </a>
        ))}
      </section>
    </div>
  );
}
