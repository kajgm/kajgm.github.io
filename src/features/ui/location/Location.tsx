type LocationProps = {
  name: string;
  link: string;
  timeZone: string;
  image: string;
};

export function Location(props: LocationProps) {
  return (
    <a href={props.link} id="location-link">
      <img src={props.image} id="location-icon" alt={props.name} />
      <p id="location-text">{props.name}</p>
    </a>
  );
}
