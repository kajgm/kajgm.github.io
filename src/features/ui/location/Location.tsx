import styles from './Location.module.scss';

type LocationProps = {
  name: string;
  link: string;
  timeZone: string;
  image: string;
};

export function Location(props: LocationProps) {
  return (
    <a href={props.link}>
      <img src={props.image} className={styles.locationIcon} alt={props.name} />
      <p>{props.name}</p>
    </a>
  );
}
