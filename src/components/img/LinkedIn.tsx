import { linkedInData } from "@/data/svg/linkedin";

export function LinkedIn() {
  return (
    <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/" target="_blank">
      <svg
        className="w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125"
        viewBox="0 0 310 310"
      >
        <path d={linkedInData} />
      </svg>
    </a>
  );
}
