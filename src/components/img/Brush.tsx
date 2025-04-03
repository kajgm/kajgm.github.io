import { brushData } from "@/data/svg/brush";

export function Brush() {
  return (
    <svg
      className="z-0 fixed -mt-36 ml-24 rotate-3 transition-all duration-700 opacity-0 dark:desktop:peer-hover:opacity-100 dark:fill-red-900 w-[700px] h-[200px]"
      viewBox="49.98 300 1000.02 186.62"
    >
      <path d={brushData} />
    </svg>
  );
}
