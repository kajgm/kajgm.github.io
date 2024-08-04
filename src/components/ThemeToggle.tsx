"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleDarkMode = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <DarkModeSwitch
      checked={theme == "dark"}
      style={{
        margin: "0px",
        position: "absolute",
        right: "50px",
        top: "50px",
      }}
      onChange={toggleDarkMode}
      size={40}
      data-testid="theme-toggle"
    />
  );
}
