import React from 'react';
import { Link } from 'react-router-dom';
import { LocationTime } from '@features/ui';
import { headerData } from '@data/header';

export function Header(props: { text: string; subtext: string }) {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subtext = props.subtext ? props.subtext : headerData.roles.join(' / ');

  return (
    <header id="header">
      <Link to="/">
        <h1 id="name-title">{text}</h1>
      </Link>
      <p id="subheader">{subtext}</p>
      <LocationTime />
    </header>
  );
}
