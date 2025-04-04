import { linkedInData } from "@/data/svg/linkedin";

export function LinkedIn(props: { className: string }) {
  return (
    <a href="https://www.linkedin.com/in/kaj-grant-mathiasen/" target="_blank">
      <svg className={props.className} viewBox="0 0 310 310">
        <path d={linkedInData} />
      </svg>
    </a>
  );
}
