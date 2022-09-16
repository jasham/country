import React from "react";
import Search from "../../images/svgs/search";

type SearchInputProps = {
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  countryValue: string;
};
const SearchInput = ({ onChangeInput, countryValue }: SearchInputProps) => {
  return (
    <div className="flex flex-row bg-whiteDMLMElem dark:shadow-dark dark:hover:shadow-dark_hover items-center shadow-light relative max-w-sm flex-1 h-12 pl-6 pr-10 rounded-md">
      <Search />
      <input
        className="outline-none p-1 pl-14 pr-5 absolute bg-tra flex flex-1 top-2/4 left-0 bg-transparent translate-y-[-50%] w-full font-semibold text-darkGrayLMInput"
        placeholder="Search for a country..."
        onChange={onChangeInput}
        value={countryValue}
      />
    </div>
  );
};

export { SearchInput };
