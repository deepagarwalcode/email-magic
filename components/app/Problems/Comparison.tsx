import React from 'react';

const data = [
  {
    label: 'Response Speed',
    team: 'Medium: “Sorry for the delay…”',
    competitor: 'Fast: “Just sent you options.”',
  },
  {
    label: 'Tone',
    team: 'Polished but flat',
    competitor: 'Warm, confident, human',
  },
  {
    label: 'Follow-up',
    team: 'Missed or late',
    competitor: 'Timely and proactive',
  },
  {
    label: 'Perception',
    team: 'Busy, reactive, unreliable',
    competitor: 'Sharp, trustworthy, in control',
  },
];

const Comparison = () => {
  return (
    <div className="w-full top-0 max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white">
      <div className="grid grid-cols-8 bg-primary text-white">
        <div className="py-4 px-6 font-bold text-white text-left border-r border-white/20 col-span-2"> </div>
        <div className="py-4 px-6 font-bold text-white text-left border-r border-white/20 col-span-3  ">Your Team</div>
        <div className="py-4 px-6 font-bold text-white text-left col-span-3">Your Competitor</div>
      </div>
      {data.map((row, idx) => (
        <div
          key={row.label}
          className={`grid grid-cols-8 items-center ${idx % 2 === 0 ? 'bg-white' : 'bg-white'} border-t border-gray-200`}
        >
          <div className="py-4 px-6 font-semibold text-gray-600 border-r border-gray-200 min-h-full flex items-center col-span-2">{row.label}</div>
          <div className="py-4 px-6 border-r border-gray-200 bg-red-50/0 text-red-600 font-medium col-span-3">{row.team}</div>
          <div className="py-4 px-6 bg-green-50/0 text-green-600 font-medium min-h-full flex items-center col-span-3">{row.competitor}</div>
        </div>
      ))}
    </div>
  );
};

export default Comparison;