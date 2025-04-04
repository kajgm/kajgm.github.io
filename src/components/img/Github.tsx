import { githubData } from "@/data/svg/github";

export function Github(props: { className: string }) {
  return (
    <a href="https://github.com/kajgm" target="_blank">
      <svg className={props.className} viewBox="0 0 98 96">
        <path d={githubData} />
      </svg>
    </a>
  );
}
