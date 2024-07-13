import Link from "next/link";
import { Location } from "./location";
import { Time } from "./time";
import { headerData } from "../data/header";
import { locationData } from "../data/location";

export function Header(props: { text?: string; subheader?: string }) {
  const text = props.text ? props.text : "Kaj Grant-Mathiasen";
  const subheader = props.subheader
    ? props.subheader
    : headerData.roles.join(" / ");

  return (
    <div>
      <Link href="/">
        <h1 className="text-7xl font-bold pb-2 text-body-color">{text}</h1>
      </Link>
      <div className="pl-1">
        <p className="text-md font-medium pb-1 text-content-text-color">
          {subheader}
        </p>
        <div className="flex flex-wrap">
          <Location {...locationData} />{" "}
          <p className="text-md font-medium px-1 text-sub-text-color">-</p>{" "}
          <Time timeZone={locationData.timeZone} />
        </div>
      </div>
    </div>
  );
}
