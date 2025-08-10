import { AWSData1, AWSData2, AWSData3 } from "@/data/svg/aws";

export function AWS(props: { className: string }) {
  return (
    <svg className={props.className} viewBox="0 0 304 182">
      <path d={AWSData1} className="dark:fill-white" fill="#252f3e" />
      <path d={AWSData2} fill="#f90" />
      <path d={AWSData3} fill="#f90" />
    </svg>
  );
}
