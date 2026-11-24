// shortcut: v2.0.0 ships without its .d.ts; delete this file once upstream publishes types.
declare module "react-toggle-dark-mode" {
  import type { CSSProperties, FC } from "react";
  export const DarkModeSwitch: FC<{
    checked: boolean;
    onChange: (checked: boolean) => void;
    size?: number;
    style?: CSSProperties;
    "data-testid"?: string;
  }>;
}
