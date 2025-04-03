import { openstackData } from "@/data/svg/openstack";

export function OpenStack() {
  return (
    <svg className="h-14 w-14" viewBox="0 -2.5 256 256">
      <path fill="#DA1A32" d={openstackData} />
    </svg>
  );
}
