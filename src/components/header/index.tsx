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
    <header className="pl-10 pr-10 md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 pt-5 pb-5 bg-whiteDMLMElem flex flex-row justify-center items-center  dark:bg-darkBlueDMElem shadow-light dark:shadow-dark ">
      <div className="flex flex-1 flex-row justify-between items-center">
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
