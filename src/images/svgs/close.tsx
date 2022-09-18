import React from "react";
type CloseProps = {
  className: string;
  onClick: () => void;
};
const Close = ({ className, onClick }: CloseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 ${className}`}
      viewBox="0 0 512 512"
      onClick={onClick}
    >
      <title>Close</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
        className="stroke-darkGrayLMInput dark:stroke-whiteDMLMElem"
      />
    </svg>
  );
};

export default Close;
