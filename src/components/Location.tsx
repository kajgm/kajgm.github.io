import { Pin } from "./img/Pin";
import { Time } from "./Time";

export function Location(props: { location: string }) {
  const { location } = props;
  return (
    <div className="flex flex-wrap">
      <a
        className="group flex"
        href="https://wikipedia.org/wiki/Toronto"
        target="_blank"
      >
        <a className="flex flex-wrap">
          <Pin />
          <p
            className="m-0 text-md font-medium pl-1 text-light-sub-text-color dark:text-dark-sub-text-color transform transition duration-500"
            data-testid="location"
          >
            {location}
          </p>
        </a>
        <p className="text-md font-medium px-1 text-light-sub-text-color dark:text-dark-sub-text-color transition duration-500">
          -
        </p>{" "}
        <Time timeZone="America/Toronto" />
      </a>
    </div>
  );
}
