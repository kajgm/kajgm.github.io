"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const noop = () => () => {};

export function ThemeToggle() {
  // false during prerender/hydration, true on the client: theme is unknown until then
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  const { theme, setTheme } = useTheme();

  if (!mounted) return null;

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <DarkModeSwitch
      checked={theme == "dark"}
      style={{
        marginLeft: "auto",
        position: "relative",
        right: "50px",
        top: "80px",
        marginTop: "-30px",
      }}
      onChange={toggleDarkMode}
      size={40}
      data-testid="theme-toggle"
    />
  );
}
