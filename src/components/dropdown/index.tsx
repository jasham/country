/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
let region = [
  "Filter by region",
  "Select 1",
  "Select 2",
  "Select 3",
  "Select 4",
  "Select 5",
];
const DropDown = () => {
  const [selectedRegion, setSelectedRegion] = useState(region[0]);
  const onSelectRegion = (index: number) => {
    setSelectedRegion(region[index]);
  };
  return (
    <div className="flex flex-col group relative pb-1">
      <button className="flex flex-row  justify-between font-semibold dark:text-veryDarkBluLMText text-sm bg-whiteDMLMElem w-52 text-left p-3 pl-4 pr-4 dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light relative max-w-sm flex-1 rounded-md mb-2">
        {selectedRegion}
        <img
          src="/caret-down-outline.svg"
          alt="arrow"
          width={20}
          className=""
        />
      </button>
      {
        <ul
          className={`[&_li]:pt-1.5 [&_li]:pb-1.5 [&_li]:pl-3 [&_li]:pr-3 [&_li]:cursor-pointer absolute z-20 top-14 left-0 font-semibold text-sm dark:text-veryDarkBluLMText hidden group-hover:animate-slowOpen group-hover:block  bg-whiteDMLMElem w-52 text-left overflow-hidden dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light max-w-sm flex-1 rounded-md`}
        >
          {region.map((data, index) => (
            <li
              onClick={() => onSelectRegion(index)}
              key={index.toString()}
              className="active:scale-95 hover:bg-veryLightGrayLMB"
            >
              {data}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export { DropDown };
