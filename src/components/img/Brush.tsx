import { brushData } from "@/data/svg/brush";

export function Brush(props: { className: string }) {
  return (
    <svg className={props.className} viewBox="49.98 300 1000.02 186.62">
      <path d={brushData} />
    </svg>
  );
}
