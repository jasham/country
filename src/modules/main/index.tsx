import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SearchInput } from "../../components/searchInput";
import axios from "axios";
import { FlagDetails } from "../../components/flagDetails";
import DropDown from "../../components/dropdown";

const Main = () => {
  const [countryData, setCountryData] = useState([]);
  const [currentCountryData, setCurrentCountryData] = useState([]);
  const [countryValue, setCountryValue] = useState("");
  const [regions, setRegion] = useState<string[]>([]);

  const setCountryAPIData = useCallback(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=flag,name,population,region,capital"
      )
      .then((res) => {
        setCountryData(res.data);
        setCurrentCountryData(res.data);
        let objTemp: { [key: string]: string } = {};
        res.data.map(({ region }: { region: string }) => {
          objTemp[region] = region;
        });
        setRegion(Object.keys(objTemp));
        console.log("Calling 45");
      });
  }, []);

  useEffect(() => {
    setCountryAPIData();
  }, []);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountryValue(event.target.value);
    setCurrentCountryData(
      countryData.filter((val: { name: string }) =>
        val.name.includes(event.target.value)
      )
    );
  };

  const getSelectedRegion = (region: string) => {
    setCurrentCountryData(
      countryData.filter((val: { region: string }) => val.region === region)
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
            <DropDown regions={regions} getSelectedRegion={getSelectedRegion} />
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

export default React.memo(Main);
