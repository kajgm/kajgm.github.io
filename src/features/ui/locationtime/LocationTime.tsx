import { DateTime } from 'features/ui';
import { locationData } from 'data/location';

export function LocationTime() {
  return (
    <section id="location-time">
      <a href={locationData.link} id="location-link">
        <img src={locationData.image} id="location-icon" alt={locationData.name} />
        <p id="location-text">{locationData.name}</p>
      </a>
      <DateTime timeZone={locationData.timeZone} />
    </section>
  );
}
