import { mailData } from "@/data/svg/mail";
import { linkedInData } from "@/data/svg/linkedin";
import { githubData } from "@/data/svg/github";

export function Links() {
  return (
    <div className="flex flex-wrap mx-auto mt-3">
      <a href="mailto:kajgrant@gmail.com" className="px-1.5">
        <svg
          className="w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125"
          viewBox="0 0 119.45 122.88"
        >
          <path d={mailData} />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/kaj-grant-mathiasen/"
        className="px-1.5"
      >
        <svg
          className="w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125"
          viewBox="0 0 310 310"
        >
          <path d={linkedInData} />
        </svg>
      </a>
      <a href="https://github.com/kajgm" className="px-1.5">
        <svg
          className="w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125"
          viewBox="0 0 98 96"
        >
          <path d={githubData} />
        </svg>
      </a>
    </div>
  );
}
