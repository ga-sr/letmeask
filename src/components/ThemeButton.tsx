import { useTheme } from "../hooks/useTheme";

import "../styles/themeButton.scss";

import moonImg from "../assets/images/moon.svg";
import sunImg from "../assets/images/sun.svg";

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button id="theme" className={theme} onClick={toggleTheme}>
      {theme === "light" ? (
        <img src={moonImg} alt="" />
      ) : (
        <img src={sunImg} alt="" />
      )}
    </button>
  );
}
