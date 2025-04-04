import { openstackData } from "@/data/svg/openstack";

export function OpenStack(props: { className: string }) {
  return (
    <svg className={props.className} viewBox="0 -2.5 256 256">
      <path fill="#DA1A32" d={openstackData} />
    </svg>
  );
}
