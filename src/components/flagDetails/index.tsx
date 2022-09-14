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
    <Link href="https://google.com" className="">
      <article className="w-[15rem] flex flex-col rounded-md bg-whiteDMLMElem shadow-light hover:shadow-light_hover cursor-pointer mb-8 active:scale-90">
        <div className="w-full relative">
          <img
            src={image}
            alt="flag"
            className="rounded-t-md aspect-video object-cover w-full"
          />
        </div>
        <div className="p-5 pb-8 box-border ">
          <h6 className="font-bold pb-3 whitespace-nowrap w-full overflow-hidden text-ellipsis">
            {countryName}
          </h6>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold">Population: </p>
            <p className="">{population}</p>
          </div>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold ">Region: </p>
            <p className="">{region}</p>
          </div>
          <div className="flex flex-row text-sm pb-1">
            <p className="font-semibold">Capital: </p>
            <p>{capital}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export { FlagDetails };
