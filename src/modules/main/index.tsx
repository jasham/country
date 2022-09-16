import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SearchInput } from "../../components/searchInput";
import axios from "axios";
import { FlagDetails } from "../../components/flagDetails";
import { DropDown } from "../../components/dropdown";
const Main = () => {
  const [countryData, setCountryData] = useState([]);
  const [currentCountryData, setCurrentCountryData] = useState([]);
  const [countryValue, setCountryValue] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=flag,name,population,region,capital"
      )
      .then((res) => {
        console.log("Here is country data", res.data);
        setCountryData(res.data);
        setCurrentCountryData(res.data);
      });
  }, []);
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Here is value data", event.target.value);
    setCountryValue(event.target.value);
    setCurrentCountryData(
      countryData.filter((val: { name: string }) =>
        val.name.includes(event.target.value)
      )
    );
  };
  return (
    <Layout>
      <main className="flex flex-row items-center pl-20 pr-20 pt-10">
        <div className="flex flex-1 flex-col justify-between ">
          <div className="mb-14 flex flex-row justify-between">
            <SearchInput
              onChangeInput={onChangeInput}
              countryValue={countryValue}
            />
            <DropDown />
          </div>
          <div className="grid grid-cols-4 gap-8 ">
            {currentCountryData.length > 0 &&
              currentCountryData.map(
                ({ flag, population, capital, region, name }, index) => (
                  <FlagDetails
                    key={index.toString()}
                    image={flag}
                    population={population}
                    capital={capital}
                    region={region}
                    countryName={name}
                  />
                )
              )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
