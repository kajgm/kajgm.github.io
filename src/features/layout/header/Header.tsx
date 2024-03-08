import React from 'react';
import { Link } from 'react-router-dom';
import { LocationTime } from 'features/ui';
import { headerData } from 'data/header';

export function Header(props: { text?: string; subheader?: string }) {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subheader = props.subheader ? props.subheader : headerData.roles.join(' / ');

  return (
    <header id="header">
      <Link to="/">
        <h1 id="name-title">{text}</h1>
      </Link>
      <p id="subheader">{subheader}</p>
      <LocationTime />
    </header>
  );
}
