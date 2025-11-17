import Link from "next/link";
import { Location } from "./Location";
import { Brush } from "./img/Brush";

export function Header() {
  const textStyleClass =
    "text-md font-medium text-light-sub-text-color dark:text-dark-sub-text-color transition-all";
  return (
    <div className="relative overflow-clip">
      <Link className="peer" href="/">
        <h1 className="mt-1 desktop:mt-0 z-10 relative text-7xl desktop:text-8xl font-bold pb-2 text-light-text-color hover:[text-shadow:_8px_6px_12px_rgb(0_0_0_/_30%)] dark:text-dark-text-color transition-all duration-500">
          Kaj Grant-Mathiasen
        </h1>
      </Link>
      <Brush className="z-0 absolute -mt-36 ml-24 rotate-3 transition-all duration-700 opacity-0 dark:desktop:peer-hover:opacity-100 dark:fill-red-900 w-[700px] h-[200px]" />
      <div className="z-10 relative pl-1">
        <div className="pb-1">
          <span className={textStyleClass} data-testid="subheader">
            Computer Engineer / Cloud Engineer / Full-Stack Developer /{" "}
          </span>
          <a
            className="group transition-all duration-500 ease-in-out"
            href="https://www.cncf.io/training/kubestronaut/?p=kaj-grant-mathiasen"
            target="_blank"
          >
            <span
              className={
                textStyleClass +
                " bg-left-bottom bg-gradient-to-r from-light-sub-text-color to-light-sub-text-color dark:from-dark-sub-text-color dark:to-dark-sub-text-color bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] duration-700 ease-out"
              }
            >
              Kubestronaut
            </span>
          </a>
        </div>
        <Location location="Toronto, ON. Canada" />
      </div>
    </div>
  );
}
