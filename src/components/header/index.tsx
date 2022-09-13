import React from "react";
import { useTheme } from "next-themes";
import { useState } from "react";
import Moon from "../../images/svgs/monn";
const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark" ? true : false;

  const [checked, setChecked] = useState(dark);

  const changeTheme = () => {
    setTheme(!checked ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <header className=" bg-whiteDMLMElem flex flex-row justify-center items-center p-5 dark:bg-veryDarkBlueDMBg shadow-light dark:shadow-dark ">
      <div className="max-w-6xl flex flex-1 flex-row justify-between items-center">
        <h1 className="text-lg font-bold dark:text-whiteDMLMElem">
          Where in the world?
        </h1>
        <button
          className="text-veryDarkBluLMText text-sm font-semibold dark:text-whiteDMLMElem flex flex-row items-center"
          onClick={changeTheme}
        >
          <Moon />
          Dark Mode
        </button>
      </div>
    </header>
  );
};

export { Header };
