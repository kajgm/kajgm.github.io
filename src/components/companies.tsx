import Image from "next/image";
import { companiesData } from "../data/companies";

type companyType = {
  title: string;
  link: string;
  image: string;
  invert: boolean;
  size: number;
};

export function Companies() {
  return (
    <div className="relative top-40 space-y-10">
      <div className="flex">
        <div className="mx-auto">
          <a href={"https://canonical.com/"}>
            <Image
              alt={"Canonical"}
              src={"/images/content/canonical.svg"}
              width={100}
              height={100}
            />
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-wrap mx-auto space-x-20 items-center">
          {companiesData.map((company: companyType) => (
            <a
              key={company.link}
              href={company.link}
              className={company.invert ? "dark:invert" : "" + " "}
            >
              <Image
                key={company.title}
                alt={company.title}
                src={company.image}
                width={company.size}
                height={company.size}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
