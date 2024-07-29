import Link from "next/link";
import { Location } from "./location";
import { Time } from "./time";
import { brushData } from "@/data/svg/brush";

export function Header() {
  return (
    <div>
      <Link href="/">
        <h1 className="z-10 relative peer text-7xl desktop:text-8xl font-bold pb-2 text-light-text-color hover:[text-shadow:_8px_6px_12px_rgb(0_0_0_/_40%)] dark:text-dark-text-color desktop:dark:hover:scale-[101%] transition-all duration-500">
          Kaj Grant-Mathiasen
        </h1>
        <svg
          className="z-0 absolute -mt-36 ml-24 rotate-3 transition-all duration-700 opacity-0 dark:desktop:peer-hover:opacity-100 dark:fill-red-900 w-[700px] h-[200px]"
          viewBox="49.98 300 1000.02 186.62"
        >
          <path d={brushData} />
        </svg>
      </Link>
      <div className="pl-1">
        <p
          className="z-10 relative text-md font-medium pb-1 text-light-sub-text-color dark:text-dark-sub-text-color transition duration-500"
          data-testid="subheader"
        >
          Computer Engineer / Cloud Engineer / Full-Stack Developer
        </p>
        <div className="flex flex-wrap">
          <Location
            location="Vancouver, BC. Canada"
            locLink="https://en.wikipedia.org/wiki/Vancouver"
          />{" "}
          <p className="text-md font-medium px-1 text-light-sub-text-color dark:text-dark-sub-text-color transition duration-500">
            -
          </p>{" "}
          <Time timeZone="America/Vancouver" />
        </div>
      </div>
    </div>
  );
}
