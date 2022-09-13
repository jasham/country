import Image from "next/image";
import React from "react";

type FlagDetails = {
  image: string;
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
    <article className="max-w-[12rem] rounded-md bg-whiteDMLMElem shadow-light hover:shadow-light_hover cursor-pointer ">
      <div className="h-28 w-48 relative">
        <Image
          src={image}
          alt="flag"
          loading="eager"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-t-md"
        />
      </div>
      <div className="p-5 pb-7 box-border ">
        <h6 className="font-bold pb-1 break-words">{countryName}</h6>
        <div className="flex flex-row text-xs">
          <p className="font-semibold">Population: </p>
          <p className="">{population}</p>
        </div>
        <div className="flex flex-row text-xs">
          <p className="font-semibold ">Region: </p>
          <p className="">{region}</p>
        </div>
        <div className="flex flex-row text-xs">
          <p className="font-semibold">Capital: </p>
          <p>{capital}</p>
        </div>
      </div>
    </article>
  );
};

export { FlagDetails };
