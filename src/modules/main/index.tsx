import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SearchInput } from "../../components/searchInput";
import axios from "axios";
import { FlagDetails } from "../../components/flagDetails";
const Main = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=flag,name,population,region,capital"
      )
      .then((res) => {
        console.log("Here is country data", res.data);
        setCountryData(res.data);
      });
  }, []);
  return (
    <Layout>
      <main className="flex flex-row items-center pl-20 pr-20 pt-10">
        <div className="flex flex-1 flex-col justify-between ">
          <div className="mb-14">
            <SearchInput />
          </div>
          <div className="flex flex-row flex-wrap justify-between items-center gap-4">
            {countryData.map((data, index) => {
              return (
                <FlagDetails
                  key={index.toString()}
                  image={data.flag}
                  population={data.population}
                  capital={data?.capital}
                  region={data.region}
                  countryName={data.name}
                />
              );
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Main;
