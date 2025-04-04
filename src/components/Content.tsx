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
        <div className="desktop:opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">
          <div className="mx-auto">
            <p
              className="ml-5 mr-5 desktop:ml-0 desktop:mr-0 font-medium text-light-content-text-color dark:text-dark-content-text-color transition duration-500 text-center"
              data-testid="content"
            >
              Currently an Associate Cloud Support Engineer @ <b>Canonical</b>
            </p>
          </div>
          <div className="w-fit mx-auto mt-6 text-center">
            <p>Certifications</p>
            <div className="flex flex-wrap w-fit mx-auto mt-2 space-x-8 items-center">
              <a
                href="https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/"
                target="_blank"
              >
                <div className="text-center">
                  <Kubernetes />
                  <b className="relative top-1">CKA</b>
                </div>
              </a>
              <a href="https://www.openstack.org/coa/" target="_blank">
                <div className="text-center mt-1">
                  <OpenStack />
                  <b className="relative top-1">COA</b>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
