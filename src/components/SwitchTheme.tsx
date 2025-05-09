import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const SwitchTheme = () => {
  // erro de tema toda vez que volto pra principal ele muda pro valor original
  const [IsDark, setIsDark] = useState(
    window.localStorage.getItem("Dark") || false
  );

  const toggleTheme = () => {
    if (IsDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const themeLocal = () => {
    const storedTheme = window.localStorage.getItem("Dark");

    if (storedTheme !== null) {
      setIsDark(storedTheme === "true");
    } else {
      window.localStorage.setItem("Dark", "false");
      setIsDark(false);
    }
  };

  const handleClick = () => {
    setIsDark(!IsDark);
  };

  useEffect(() => {
    themeLocal();
  }, []);

  useEffect(() => {
    toggleTheme();
    window.localStorage.setItem("Dark", IsDark.toString());
  }, [IsDark]);

  return (
    <FontAwesomeIcon
      icon={IsDark ? faMoon : faSun}
      className="text-xl cursor-pointer text-white"
      onClick={handleClick}
    />
  );
};

export default SwitchTheme;
