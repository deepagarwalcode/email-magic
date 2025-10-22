import React from "react";
import { NumberTicker } from "../../magicui/number-ticker";

interface StatProps {
  label: string;
  value: number;
  beforeString?: string;
  afterString?: string;
  boldLabel?: string;
}

const Stats: React.FC<StatProps> = ({
  label,
  value,
  beforeString,
  afterString,
boldLabel,
}) => (
  <div className="flex-1 flex flex-col items-center text-center">
    <h3 className="text-4xl font-semibold text-white min-w-min text-nowrap">
      {beforeString}
      <NumberTicker className="text-white tracking-normal text-nowrap" value={value} />
      {afterString}
    </h3>
    <p className="text-gray-300 font-light mt-2 max-w-[200px]">
      <span className="font-semibold text-gray-200">{boldLabel}</span> {label}
    </p>
  </div>
);

export default Stats;
