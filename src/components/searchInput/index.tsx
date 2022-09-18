import React from "react";
import Search from "../../images/svgs/search";

type SearchInputProps = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryValue: string;
};
const SearchInput = ({ onChangeInput, countryValue }: SearchInputProps) => {
  return (
    <div className="flex flex-row bg-whiteDMLMElem dark:bg-darkBlueDMElem dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light relative h-11 pl-6 pr-10 rounded-md w-72">
      <Search />
      <input
        className="outline-none p-1 pl-14 pr-5 dark:text-whiteDMLMElem absolute bg-tra flex flex-1 top-2/4 left-0 bg-transparent translate-y-[-50%] font-semibold text-darkGrayLMInput h-20 "
        placeholder="Search for a country..."
        onChange={onChangeInput}
        value={countryValue}
      />
    </div>
  );
};

export { SearchInput };
