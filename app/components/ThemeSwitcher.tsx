"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex items-center gap-2 group"
    >
      {/* Dark label */}
      <span
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: theme === "dark" ? "var(--gold)" : "var(--fg-faint)",
          transition: "color 0.3s",
          fontWeight: 400,
        }}
      >
        Dark
      </span>

      {/* Toggle track */}
      <span
        style={{
          position: "relative",
          display: "inline-flex",
          width: "28px",
          height: "14px",
          borderRadius: "7px",
          border: "1px solid var(--border-mid)",
          backgroundColor: "transparent",
          transition: "border-color 0.3s",
          alignItems: "center",
          padding: "2px",
        }}
      >
        {/* Toggle thumb */}
        <span
          style={{
            display: "block",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--gold)",
            transform: theme === "light" ? "translateX(14px)" : "translateX(0)",
            transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s",
          }}
        />
      </span>

      {/* Light label */}
      <span
        style={{
          fontSize: "11px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: theme === "light" ? "var(--gold)" : "var(--fg-faint)",
          transition: "color 0.3s",
          fontWeight: 400,
        }}
      >
        Light
      </span>
    </button>
  );
}
