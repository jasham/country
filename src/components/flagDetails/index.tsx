/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FlagDetails = {
  image?: string;
  countryName?: string;
  population?: string;
  region?: string;
  capital?: string;
};
const FlagDetails = ({
  image,
  countryName,
  population,
  region,
  capital,
}: FlagDetails) => {
  return (
    <Link href={`/countryDetail?country=${countryName}`} className="">
      <article className="flex-1 flex flex-col rounded-md bg-whiteDMLMElem dark:bg-veryDarkBlueDMBg dark:shadow-dark dark:hover:shadow-dark_hover shadow-light hover:shadow-light_hover cursor-pointer active:scale-90">
        <div className="w-full relative">
          <img
            src={image}
            alt="flag"
            className="rounded-t-md aspect-video object-cover w-full"
          />
        </div>
        <div className="p-5 pb-8 box-border">
          <h6 className="font-bold pb-3 whitespace-nowrap w-full overflow-hidden text-ellipsis">
            {countryName}
          </h6>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold">Population: &nbsp; </p>
            <p className="">{population}</p>
          </div>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold ">Region: &nbsp;</p>
            <p className="">{region}</p>
          </div>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold">Capital: &nbsp;</p>
            <p>{capital}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export { FlagDetails };
