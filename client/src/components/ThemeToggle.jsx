import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setIsDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: "none",
        border: "none",
        color: "var(--text-color)",
        fontSize: "1.3rem",
        cursor: "pointer",
        padding: "0.5rem",
      }}
      aria-label="Toggle theme"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}
