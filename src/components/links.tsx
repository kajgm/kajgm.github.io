import Image from "next/image";
import { Logo } from "./logo";
import { linksData } from "../data/links";

type socialType = {
  title: string;
  link: string;
  image: string;
};

export function Links() {
  return (
    <div className="mt-3 w-24 mr-24 mb-12 flex flex-wrap">
      <Logo>KGM</Logo>
      <div className="flex flex-wrap mx-auto mt-2 dark:invert">
        {linksData.map((social: socialType) => (
          <a key={social.link} href={social.link} className="px-1.5">
            <Image
              key={social.title}
              alt={social.title}
              src={social.image}
              width={20}
              height={20}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
