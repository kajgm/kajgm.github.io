import { kubernetesData1, kubernetesData2 } from "@/data/svg/kubernetes";

export function Kubernetes() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 722.846 701.966">
      <path
        d={kubernetesData1}
        fill="#326ce5"
        fill-opacity="1"
        stroke="#fff"
        stroke-width="0"
        stroke-miterlimit="4"
        stroke-opacity="1"
        stroke-dasharray="none"
        transform="translate(-6.326 -174.752)"
      />
      <path
        d={kubernetesData2}
        font-size="medium"
        font-style="normal"
        font-variant="normal"
        font-weight="400"
        font-stretch="normal"
        text-indent="0"
        text-align="start"
        text-decoration="none"
        line-height="normal"
        letter-spacing="normal"
        word-spacing="normal"
        text-transform="none"
        direction="ltr"
        block-progression="tb"
        writing-mode="lr-tb"
        text-anchor="start"
        baseline-shift="baseline"
        color="#000"
        fill="#fff"
        fill-opacity="1"
        stroke="#fff"
        stroke-width=".25"
        stroke-miterlimit="4"
        stroke-opacity="1"
        stroke-dasharray="none"
        visibility="visible"
        display="inline"
        overflow="visible"
        enable-background="accumulate"
        font-family="Sans"
        inkscape-font-specification="Sans"
        transform="translate(-6.326 -174.752)"
      />
    </svg>
  );
}
