import React from 'react';
import Stats from './Stats';

const StatsSection: React.FC = () => (
  <div className="flex md:flex-row flex-col gap-12 md:gap-24 md:max-w-6xl mx-auto justify-between">
    <Stats boldLabel="Success" label="Stories" value={100} afterString='+' />
    <Stats boldLabel="in Revenue" label="Generated" value={5000000} beforeString='$' afterString='+' />
    <Stats boldLabel="Years" label="of Experience" value={10} afterString='+' />
    <Stats boldLabel="Client Satisfaction" label="rate" value={94} afterString='%' />
  </div>
);

export default StatsSection