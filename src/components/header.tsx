import Link from "next/link";
import { Location } from "./location";
import { Time } from "./time";

export function Header(props: { text?: string; subheader?: string }) {
  const text = props.text ? props.text : "Kaj Grant-Mathiasen";

  return (
    <div>
      <Link href="/">
        <h1 className="text-7xl font-bold pb-2 text-light-text-color dark:text-dark-text-color">
          {text}
        </h1>
      </Link>
      <div className="pl-1">
        <p className="text-md font-medium pb-1 text-light-sub-text-color dark:text-dark-sub-text-color">
          Cloud Engineer / Computer Engineer / Full-Stack Developer
        </p>
        <div className="flex flex-wrap">
          <Location
            location="Vancouver, BC. Canada"
            locLink="https://en.wikipedia.org/wiki/Vancouver"
          />{" "}
          <p className="text-md font-medium px-1 text-light-sub-text-color dark:text-dark-sub-text-color">
            -
          </p>{" "}
          <Time timeZone="America/Vancouver" />
        </div>
      </div>
    </div>
  );
}
