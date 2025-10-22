"use client"
import React, { useState } from 'react';
import { Progress } from "@/components/ui/progress";

const MIN_EMPLOYEES = 1;
const MAX_EMPLOYEES = 10000;
const DEFAULT_EMPLOYEES = 500;
const WEEKLY_HOURS_PER_EMPLOYEE = 25;
const YEARLY_LOSS = 4200;

const Calculator = () => {
  const [employees, setEmployees] = useState(DEFAULT_EMPLOYEES);

  const weeklyHours = employees * WEEKLY_HOURS_PER_EMPLOYEE;
  const monthlyHours = weeklyHours * 4;
  const estimatedCost = employees * YEARLY_LOSS;

  // For progress bar
  const percent = ((employees - MIN_EMPLOYEES) / (MAX_EMPLOYEES - MIN_EMPLOYEES)) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value.replace(/\D/g, ''));
    if (isNaN(val)) val = MIN_EMPLOYEES;
    if (val < MIN_EMPLOYEES) val = MIN_EMPLOYEES;
    if (val > MAX_EMPLOYEES) val = MAX_EMPLOYEES;
    setEmployees(val);
  };

  // Click-to-set for progress bar
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newPercent = x / rect.width;
    const newEmployees = Math.round(newPercent * (MAX_EMPLOYEES - MIN_EMPLOYEES) + MIN_EMPLOYEES);
    setEmployees(newEmployees);
  };

  return (
    <div
      className="w-[480px] max-w-full h-max rounded-2xl p-1 bg-gradient-to-r from-[#306de2] to-[#1c67f7] shadow-lg"
      style={{ minHeight: 372 }}
    >
      <div className="bg-primary rounded-2xl h-full flex flex-col justify-between p-1" style={{ minHeight: 370 }}>
        {/* Top: Employees input and progress */}
        <div className="mb-8 px-6 pt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-semibold text-white">Enter Number of Employees:</span>
            <input
              type="number"
              min={MIN_EMPLOYEES}
              max={MAX_EMPLOYEES}
              value={employees}
              onChange={handleInputChange}
              className="w-20 h-9 rounded-full bg-white border border-white/40 text-center text-lg font-semibold text-black shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
            //   style={{ background: 'rgba(255,255,255,0.2)' }}
            />
          </div>
          {/* Progress bar using shadcn/ui */}
          <div className="mt-2" onClick={handleBarClick} style={{ cursor: 'pointer' }}>
            <Progress value={percent} className="h-4 bg-white/10" />
          </div>
        </div>
        {/* Stats */}
        <div className="flex flex-col gap-6 bg-white rounded-xl p-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-600 font-medium">Hours Employees Spend on Email (Weekly)</span>
            <span className="text-2xl font-bold text-gray-900">{weeklyHours.toLocaleString()}</span>
          </div>
          <div className="border-t border-black/10" />
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-600 font-medium">Hours Employees Spend on Email (Monthly)</span>
            <span className="text-2xl font-bold text-gray-900">{monthlyHours.toLocaleString()}</span>
          </div>
          <div className="border-t border-black/10" />
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-600 font-medium">Estimated Loss (at $4,200 per employee per year)</span>
            <span className="text-2xl font-bold text-red-500">${estimatedCost.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;