import { mailData } from "@/data/svg/mail";

export function Mail(props: { className: string }) {
  return (
    <a href="mailto:kajgrant@gmail.com">
      <svg className={props.className} viewBox="0 0 119.45 122.88">
        <path d={mailData} />
      </svg>
    </a>
  );
}
