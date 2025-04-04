import { pinData } from "@/data/svg/pin";

export function Pin(props: { className: string }) {
  return (
    <svg className={props.className} viewBox="0 0 395.71 395.71">
      <path d={pinData} />
    </svg>
  );
}
