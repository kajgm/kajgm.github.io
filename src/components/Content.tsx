import { Canonical } from "./img/Canonical";
import { Kubernetes } from "./img/Kubernetes";
import { OpenStack } from "./img/OpenStack";
import { AWS } from "./img/AWS";

export function Content() {
  const certificationClass =
    "hover:drop-shadow-xl duration-500 hover:duration-500 hover:ease-in-out transition-all hover:scale-110";
  return (
    <div className="group mx-auto space-y-5">
      <div className="flex">
        <div className="mx-auto">
          <Canonical className="w-16 h-16 group-hover:drop-shadow-xl duration-500 group-hover:duration-500 group-hover:ease-in-out transition-all group-hover:scale-110" />
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
        <div className="mx-auto mt-6 text-center">
          <p>Certifications</p>
          <div className="flex flex-wrap w-fit mx-auto mt-2 space-x-8 items-center">
            <a href="https://kubernetes.io/" target="_blank">
              <div className="text-center max-h-10">
                <Kubernetes
                  className={"mx-auto h-12 w-12 " + certificationClass}
                />
                <div className="w-12">
                  <b className="relative top-1">CKA CKAD CKS</b>
                </div>
              </div>
            </a>
            <a href="https://www.openstack.org/" target="_blank">
              <div className="text-center mt-3 max-h-10">
                <OpenStack
                  className={"mx-auto h-10 w-10 " + certificationClass}
                />
                <b className="relative top-1">COA</b>
              </div>
            </a>
            <a href="https://aws.amazon.com/" target="_blank">
              <div className="text-center mt-3 max-h-10">
                <AWS className={"mx-auto h-10 w-12 " + certificationClass} />
                <b className="relative top-1">CCP</b>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
