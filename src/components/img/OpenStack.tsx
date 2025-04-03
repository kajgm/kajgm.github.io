import { openstackData } from "@/data/svg/openstack";

export function OpenStack() {
  return (
    <svg
      className="h-10 w-10 hover:drop-shadow-xl duration-500 hover:duration-500 hover:ease-in-out transition-all hover:scale-110"
      viewBox="0 -2.5 256 256"
    >
      <path fill="#DA1A32" d={openstackData} />
    </svg>
  );
}
