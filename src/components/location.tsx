import Image from "next/image";

type LocationProps = {
  name: string;
  link: string;
  timeZone: string;
  image: string;
};

export function Location(props: LocationProps) {
  return (
    <a href={props.link} className="flex flex-wrap">
      <Image
        src={props.image}
        width={15}
        height={15}
        alt={props.name}
        className="pb-0.5 dark:invert"
      />
      <p className="m-0 text-md font-medium pl-1 text-sub-text-color">
        {props.name}
      </p>
    </a>
  );
}
