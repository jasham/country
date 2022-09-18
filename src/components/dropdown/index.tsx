/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import Caret from "../../images/svgs/caret";
import Close from "../../images/svgs/close";

type DropDownProps = {
  regions: string[];
  getSelectedRegion?: (region: string) => void;
  sCountry?: () => void;
};

const DropDown = ({ regions, getSelectedRegion, sCountry }: DropDownProps) => {
  const [selectedRegion, setSelectedRegion] = useState<string>();

  const onSelectRegion = (index: number) => {
    setSelectedRegion(regions[index]);
    getSelectedRegion && getSelectedRegion(regions[index]);
  };

  const clearRegion = () => {
    setSelectedRegion("");
    sCountry && sCountry();
  };
  return (
    <div className="flex flex-col group relative pb-1">
      <button className="flex flex-row justify-between font-semibold dark:text-whiteDMLMElem dark:bg-darkBlueDMElem text-sm bg-whiteDMLMElem w-52 text-left p-3 pl-4 pr-4 dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light relative max-w-sm flex-1 rounded-md mb-2">
        <span className="self-start">
          {selectedRegion || "Filter by Region"}
        </span>
        <span className="flex flex-row gap-2">
          <Close
            className="hover:animate-spin duration-[2s] active:scale-75"
            onClick={clearRegion}
          />
          <Caret />
        </span>
      </button>
      {
        <ul
          className={`[&_li]:pt-1.5 [&_li]:pb-1.5 [&_li]:pl-3 [&_li]:pr-3 [&_li]:cursor-pointer max-h-40 overflow-y-auto absolute z-20 top-14 left-0 font-semibold text-sm dark:text-veryDarkBluLMText hidden ${
            regions.length > 0
              ? `group-hover:animate-slowOpen group-hover:block`
              : null
          }  bg-whiteDMLMElem w-52 text-left overflow-hidden dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light max-w-sm flex-1 rounded-md dark:text-whiteDMLMElem dark:bg-darkBlueDMElem`}
        >
          {regions &&
            regions.map((data, index) => (
              <li
                onClick={() => onSelectRegion(index)}
                key={index.toString()}
                className="active:scale-95 hover:bg-veryLightGrayLMB dark:hover:bg-veryDarkBlueDMBg dark:text-whiteDMLMElem"
              >
                {data}
              </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default React.memo(DropDown);
