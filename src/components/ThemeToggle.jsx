"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors duration-300 ${
        isDark ? "bg-zinc-800" : "bg-slate-200"
      } ${className}`}
    >
      <Sun size={14} className="absolute left-1.5 text-amber-500" />
      <Moon size={14} className="absolute right-1.5 text-zinc-400" />

      <span
        className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-all duration-300 ${
          isDark ? "left-[28px] text-zinc-900" : "left-1 text-amber-500"
        }`}
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  );
}
