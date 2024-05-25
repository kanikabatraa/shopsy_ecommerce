import { useEffect, useState } from "react";
import dark_button from "../../assets/web/dark-mode-button.png";
import light_button from "../../assets/web/light-mode-button.png";

const Darkmode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  console.log(theme);
  const element = document.documentElement;

  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
        
    if (theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={light_button}
        alt=""
        className="w-12 cursor-pointer drop-shadow transition-all duration-300 absolute right-0 z-10"
        onClick={changeTheme}
      />

      <img
        src={dark_button}
        alt=""
        className="w-12 cursor-pointer drop-shadow transition-all duration-300"
        onClick={changeTheme}
      />
    </div>
  );
};

export default Darkmode;
