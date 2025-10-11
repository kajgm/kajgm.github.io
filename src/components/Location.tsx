import { Pin } from "./img/Pin";
import { Time } from "./Time";

export function Location(props: { location: string }) {
  const { location } = props;
  return (
    <div className="flex flex-wrap">
      <a
        className="group flex"
        href="https://www.youtube.com/watch?v=nmCm3jrYR74"
        target="_blank"
      >
        <div className="flex flex-wrap items-center">
          <Pin className="mb-0.5 w-4 h-4 fill-light-sub-text-color group-hover:fill-red-800 dark:fill-dark-sub-text-color dark:group-hover:fill-red-800 group-hover:transition-color group-hover:duration-500 group-hover:ease-in-out ease-in-out transition duration-500" />
          <p
            className="m-0 text-md font-medium pl-1 text-light-sub-text-color dark:text-dark-sub-text-color transform transition duration-500"
            data-testid="location"
          >
            {location}
          </p>
        </div>
        <p className="text-md font-medium px-1 text-light-sub-text-color dark:text-dark-sub-text-color transition duration-500">
          -
        </p>{" "}
        <Time timeZone="America/Toronto" />
      </a>
    </div>
  );
}
