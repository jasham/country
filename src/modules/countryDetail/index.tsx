/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import ArrowBack from "../../images/svgs/arrow_back";
let cdata = {
  svg: "",
  name: "",
  nativeName: "",
  tld: "",
  currencies: "",
  capital: "",
  region: "",
  subregion: "",
  languages: "",
  population: 0,
};
const SpecificCountryDetail = () => {
  const [countryData, setCountryData] = useState({ ...cdata });
  const [borderList, setBorderList] = useState<string[]>([]);
  const router = useRouter();
  const setCountryAPIData = useCallback(() => {
    router.query.country &&
      axios
        .get(
          `https://restcountries.com/v3.1/name/${router.query.country}?fields=name,tld,currencies,region,languages,subregion,capital,borders,flags,population`
        )
        .then(async (res) => {
          let root = res.data[0];
          let nativeNameKeys = Object.keys(root.name.nativeName);
          let currencies = Object.keys(root.currencies)[0];
          setCountryData({
            svg: root.flags.svg,
            name: root.name.common,
            nativeName:
              root.name.nativeName[nativeNameKeys[nativeNameKeys.length - 1]]
                .common,
            tld: root.tld[0],
            currencies: root.currencies[currencies].name,
            capital: root.capital[0],
            region: root.region,
            subregion: root.subregion,
            languages: Object.values(root.languages).join(", "),
            population: root.population,
          });
          root.borders.length > 0 && setBorderAPIData(root.borders.join(","));
        });
  }, [router.query.country]);

  const setBorderAPIData = useCallback(async (codes: string) => {
    let bData: string[] = [];
    await axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${codes}&fields=name`)
      .then((val) => {
        val.data.map((data: { name: { common: string } }) => {
          bData.push(data.name.common);
        });
      });
    setBorderList([...bData]);
  }, []);

  useEffect(() => {
    setCountryAPIData();
  }, [setCountryAPIData]);
  return (
    <main className="flex flex-col pl-10 pr-10  md:pl-10 md:pr-10 lg:pl-20 lg:pr-20 pt-10 sm:pl-5 sm:pr-5 pb-11">
      <nav className="mb-11">
        <Link href="/">
          <span className="flex flex-row gap-2 w-28 item-center  shadow-light dark:bg-darkBlueDMElem dark:shadow-dark dark:hover:shadow-dark_hover pl-4 pr-4 pt-2 pb-2 active:scale-90 cursor-pointer">
            <ArrowBack /> Back
          </span>
        </Link>
      </nav>
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 justify-start">
        <img src={countryData.svg} alt="flag" className="w-[auto]  max-h-72" />
        <div className="flex flex-col justify-center max-w-full">
          <h1 className="text-xl font-bold">{countryData.name}</h1>
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="p-5 pl-0 pb-8 box-border">
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Native Name: &nbsp;</p>
                <p className="">{countryData.nativeName}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold ">Population: &nbsp;</p>
                <p className="">{countryData.population}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Region: &nbsp;</p>
                <p className="">{countryData.region}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Sub Region: &nbsp;</p>
                <p className="">{countryData.subregion}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Capital: &nbsp;</p>
                <p className="">{countryData.capital}</p>
              </div>
            </div>
            <div className="p-5 pl-0 pb-8 box-border">
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Top Level Domain: &nbsp;</p>
                <p className="">{countryData.tld}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold ">Currencies: &nbsp;</p>
                <p className="">{countryData.currencies}</p>
              </div>
              <div className="flex flex-row text-sm pb-1 mb-1">
                <p className="font-semibold">Languages: &nbsp;&nbsp;</p>
                <p className="">{countryData.languages}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col md:flex-row text-sm pb-1 mb-1 gap-2 md:items-center ">
              <p className="font-semibold h-fit	">Border Countries: </p>
              <div className="flex flex-wrap gap-6">
                {borderList.map((data, index) => (
                  <Link
                    key={index.toString()}
                    href={`/countryDetail?country=${data}`}
                  >
                    <span className="shadow-light dark:bg-darkBlueDMElem dark:shadow-dark dark:hover:shadow-dark_hover p-2 active:scale-90 cursor-pointer">
                      {data}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SpecificCountryDetail;
