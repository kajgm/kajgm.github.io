import { Canonical } from "./img/Canonical";
import { Kubernetes } from "./img/Kubernetes";
import { OpenStack } from "./img/OpenStack";

export function Content() {
  return (
    <div className="relative top-14">
      <div className="group w-fit mx-auto space-y-5">
        <div className="flex">
          <div className="mx-auto">
            <Canonical />
          </div>
        </div>
        <div className="flex desktop:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <div className="mx-auto">
            <p
              className="ml-5 mr-5 desktop:ml-0 desktop:mr-0 font-medium text-light-content-text-color dark:text-dark-content-text-color transition duration-500 text-center"
              data-testid="content"
            >
              Currently an Associate Cloud Support Engineer @ <b>Canonical</b>
            </p>
          </div>
        </div>
      </div>
      <div className="group w-fit mx-auto space-y-5">
        <div className="flex flex-wrap mx-auto mt-8 space-x-8 items-center">
          <Kubernetes />
          <OpenStack />
        </div>
      </div>
    </div>
  );
}
