import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layout";
import { SearchInput } from "../../components/searchInput";
import axios from "axios";
import { FlagDetails } from "../../components/flagDetails";
const Main = () => {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      console.log("Here is country data", res.data);
      setCountryData(res.data);
    });
  }, []);
  return (
    <Layout>
      <main className="flex flex-row justify-center items-center p-5 pt-10">
        <div className="max-w-6xl flex flex-1 flex-col justify-between ">
          <div className="mb-14">
            <SearchInput />
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-11">
            {countryData.map((data, index) => {
              return (
                <FlagDetails
                  key={index.toString()}
                  image={data.flags.svg}
                  population={data.population}
                  capital={data?.capital}
                  region={data.region}
                  countryName={data.name.common}
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
