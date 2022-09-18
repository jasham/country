import React from "react";

const ArrowBack = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 `}
      viewBox="0 0 512 512"
    >
      <title>Arrow Back</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="48"
        d="M244 400L100 256l144-144M120 256h292"
        className="stroke-darkGrayLMInput dark:stroke-whiteDMLMElem"
      />
    </svg>
  );
};

export default ArrowBack;
