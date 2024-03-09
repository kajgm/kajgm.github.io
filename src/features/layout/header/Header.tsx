import { Link } from 'react-router-dom';
import { Location } from 'features/ui';
import { Time } from 'features/ui';
import { headerData } from 'data/header';
import { locationData } from 'data/location';

export function Header(props: { text?: string; subheader?: string }) {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subheader = props.subheader ? props.subheader : headerData.roles.join(' / ');

  return (
    <header id="header">
      <Link to="/">
        <h1 id="name-title">{text}</h1>
      </Link>
      <p id="subheader">{subheader}</p>
      <section id="location-time">
        <Location {...locationData} /> <p>-</p> <Time timeZone={locationData.timeZone} />
      </section>
    </header>
  );
}
