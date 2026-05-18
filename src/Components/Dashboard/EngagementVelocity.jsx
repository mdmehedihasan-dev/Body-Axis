import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import EngagementDataDetail from './EngagementDataDetail';

const chartData = [
  { label: '01 OCT', height: 40, active: false },
  { label: '02 OCT', height: 60, active: false },
  { label: '03 OCT', height: 35, active: false },
  { label: '04 OCT', height: 50, active: false },
  { label: '05 OCT', height: 45, active: false },
  { label: '06 OCT', height: 65, active: false },
  { label: '07 OCT', height: 55, active: false },
  { label: '08 OCT', height: 75, active: false },
  { label: '09 OCT', height: 45, active: false },
  { label: '10 OCT', height: 58, active: false },
  { label: '11 OCT', height: 38, active: false },
  { label: '12 OCT', height: 55, active: false },
  { label: '13 OCT', height: 45, active: false },
  { label: '14 OCT', height: 95, active: true },
];

const EngagementVelocity = () => {
  const [activeTab, setActiveTab] = useState('Weekly');

  return (
    <div className="bg-[#131B2F] rounded-3xl shadow-lg border border-[#1E293B] overflow-hidden flex flex-col">
      {/* Header Area */}
      <div className="p-8 pb-4 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div>
          <h2 className="text-[20px] font-bold text-white mb-1">Engagement Velocity</h2>
          <p className="text-[13px] text-[#94A3B8]">Global mobility session distribution on a day basis</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Date Picker Mock */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0A0D14]/50 border border-[#1E293B] rounded-xl text-[12px] font-medium text-[#94A3B8]">
            <CalendarIcon size={14} className="text-teal-500" />
            <span>10/14/2024</span>
            <span className="text-[#475569]">to</span>
            <span>10/14/2024</span>
            <CalendarIcon size={14} className="text-[#475569] ml-1" />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 bg-[#0A0D14]/50 p-1 rounded-xl border border-[#1E293B]">
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-[12px] font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-[#94A3B8] hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="px-8 py-6 h-[280px] flex items-end gap-2 sm:gap-4 lg:gap-6 w-full overflow-hidden">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 h-full justify-end group">
            <div 
              className={`w-full max-w-[48px] rounded-t-sm transition-all duration-500 relative ${
                item.active 
                  ? 'bg-gradient-to-b from-[#A855F7] to-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.3)]' 
                  : 'bg-gradient-to-b from-[#4C1D95]/60 to-[#065F46]/60 group-hover:from-[#6D28D9]/80 group-hover:to-[#059669]/80 opacity-70'
              }`}
              style={{ height: `${item.height}%` }}
            >
              {/* Optional tooltip here */}
            </div>
            <span className={`text-[9px] font-bold mt-4 uppercase tracking-wider ${
              item.active ? 'text-[#94A3B8]' : 'text-[#475569]'
            }`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Detail Table */}
      <div className="px-8 pb-8 pt-4">
        <div className="border border-[#1E293B] rounded-2xl overflow-hidden bg-[#0A0D14]/30">
          <EngagementDataDetail />
        </div>
      </div>
    </div>
  );
};

export default EngagementVelocity;
