import React, { useCallback, useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SearchInput } from "../../components/searchInput";
import axios from "axios";
import { FlagDetails } from "../../components/flagDetails";
import DropDown from "../../components/dropdown";

type CountryAPIProps = {
  name: { common: string };
  flags: { svg: string };
  population: string;
  region: string;
  capital: string[];
};

type CountryProps = {
  countryName: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
};
const Main = () => {
  const [countryData, setCountryData] = useState<CountryProps[]>();
  const [currentCountryData, setCurrentCountryData] = useState<CountryProps[]>(
    []
  );
  const [countryValue, setCountryValue] = useState("");
  const [regions, setRegion] = useState<string[]>([]);

  const setCountryAPIData = useCallback(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital"
      )
      .then((res) => {
        let tempArr: CountryProps[] = [];
        res.data.map((data: CountryAPIProps) => {
          tempArr.push({
            countryName: data.name.common,
            flag: data.flags.svg,
            population: data.population,
            region: data.region,
            capital: data.capital[0],
          });
        });
        setCountryData([...tempArr]);
        setCurrentCountryData([...tempArr]);
        let objTemp: { [key: string]: string } = {};
        res.data.map(({ region }: { region: string }) => {
          objTemp[region] = region;
        });
        setRegion(Object.keys(objTemp));
      });
  }, []);

  useEffect(() => {
    setCountryAPIData();
  }, [setCountryAPIData]);

  const onChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCountryValue(event.target.value);
      countryData &&
        setCurrentCountryData(
          countryData.filter((val: { countryName: string }) =>
            val.countryName.includes(event.target.value)
          )
        );
    },
    [countryValue]
  );

  const getSelectedRegion = (region: string) => {
    countryData &&
      setCurrentCountryData(
        countryData.filter((val: { region: string }) => val.region === region)
      );
  };

  const sCountry = () => {
    countryData && setCurrentCountryData(countryData);
  };
  return (
    <Layout>
      <main className="flex flex-row items-center pl-10 pr-10  md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 pt-10 sm:pl-5 sm:pr-5">
        <div className="flex flex-1 flex-col justify-between ">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row">
            <SearchInput
              onChangeInput={onChangeInput}
              countryValue={countryValue}
            />
            <DropDown
              regions={regions}
              getSelectedRegion={getSelectedRegion}
              sCountry={sCountry}
            />
          </div>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 xl:xs:grid-cols-4  ">
            {currentCountryData.length > 0 &&
              currentCountryData.map(
                ({ flag, population, capital, region, countryName }, index) => (
                  <FlagDetails
                    key={index.toString()}
                    image={flag}
                    population={population}
                    capital={capital}
                    region={region}
                    countryName={countryName}
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
