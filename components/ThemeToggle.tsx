"use client";

import { useTheme } from "./ThemeProvider";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Đổi giao diện sáng / tối"
      className="liquid-button flex h-11 w-11 items-center justify-center rounded-full p-0"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
