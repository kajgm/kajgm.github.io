import { githubData } from "@/data/svg/github";

export function Github() {
  return (
    <a href="https://github.com/kajgm" target="_blank">
      <svg
        className="w-5 h-5 fill-black hover:fill-red-800 dark:fill-white dark:hover:fill-red-800 transition-color hover:transition-color duration-500 hover:duration-500 hover:ease-in-out transform transition hover:scale-125"
        viewBox="0 0 98 96"
      >
        <path d={githubData} />
      </svg>
    </a>
  );
}
