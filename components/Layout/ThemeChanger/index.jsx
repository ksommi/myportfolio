import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChanger = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="themeChanger">
      <p>Dark</p>
      <label className="switch">
        <input
          type="checkbox"
          onChange={handleChanger}
          checked={theme === "light" ? "checked" : ""}
        />
        <span className="slider"></span>
      </label>
      <p>Light</p>
    </div>
  );
};

export default ThemeChanger;
