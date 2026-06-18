import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const RevenueGrowth = () => {
  const data = [
    { name: 'JAN', bottom: 25, top: 30 },
    { name: 'FEB', bottom: 45, top: 40 },
    { name: 'MAR', bottom: 35, top: 35 },
    { name: 'APR', bottom: 65, top: 60 },
    { name: 'MAY', bottom: 55, top: 50 },
    { name: 'JUN', bottom: 85, top: 85 },
    { name: 'JUL', bottom: 100, top: 100 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1E293B] border border-slate-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-medium mb-1">{label}</p>
          <div className="flex flex-col gap-1 text-sm">
            <p className="text-[#A5B4FC]">Monthly: {payload[0].value}</p>
            <p className="text-[#1E2B41]">Projected: {payload[1].value}</p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[#0A1121] rounded-[24px] p-6 lg:p-8 flex flex-col mb-6 h-full">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-white text-2xl font-medium">Revenue Growth</h2>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A5B4FC]"></div>
            Monthly
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2DD4BF]"></div>
            Yearly
          </div>
        </div>
      </div>
      
      {/* Chart Area */}
      <div className="flex-1 w-full min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} maxBarSize={64}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#475569', fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }}
            />
            <Bar dataKey="bottom" stackId="a">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index >= 5 ? '#2DD4BF' : '#63728E'} />
              ))}
            </Bar>
            <Bar dataKey="top" stackId="a" fill="#1E2B41" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueGrowth;
