import { Link } from 'react-router-dom';
import { Location } from 'features/ui';
import { Time } from 'features/ui';
import { headerData } from 'data/header';
import { locationData } from 'data/location';
import styles from './Header.module.scss';

export function Header(props: { text?: string; subheader?: string }) {
  const text = props.text ? props.text : 'Kaj Grant-Mathiasen';
  const subheader = props.subheader ? props.subheader : headerData.roles.join(' / ');

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>{text}</h1>
      </Link>
      <p>{subheader}</p>
      <div className={styles.locationTime}>
        <Location {...locationData} /> <p>-</p> <Time timeZone={locationData.timeZone} />
      </div>
    </header>
  );
}
