import React, { useState } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
  const [startDate, setStartDate] = useState(new Date('2024-10-14'));
  const [endDate, setEndDate] = useState(new Date('2024-10-14'));
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-[#0B1220] rounded-3xl shadow-lg border border-[#1E293B] overflow-hidden flex flex-col">
      {/* Header Area */}
      <div className="p-8 pb-4 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
        <div>
          <h2 className="text-[20px] font-bold text-white mb-1">Engagement Velocity</h2>
          <p className="text-[13px] text-[#94A3B8]">Global mobility session distribution on a day basis</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Date Picker */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#0A0D14]/50 border border-[#1E293B] rounded-xl text-[12px] font-medium text-[#94A3B8]">
            <div className="relative flex items-center gap-2">
              <CalendarIcon
                size={14}
                className="text-teal-500 cursor-pointer"
                onClick={() => {
                  setShowStartCalendar(!showStartCalendar);
                  setShowEndCalendar(false);
                }}
              />
              <span className="cursor-pointer" onClick={() => {
                setShowStartCalendar(!showStartCalendar);
                setShowEndCalendar(false);
              }}>{formatDate(startDate)}</span>
              {showStartCalendar && (
                <div className="absolute top-full left-0 mt-3 z-[100] shadow-2xl rounded-2xl overflow-hidden border border-[#1E293B] animate-in fade-in slide-in-from-top-2 duration-200">
                  <Calendar
                    onChange={(date) => {
                      setStartDate(date);
                      setShowStartCalendar(false);
                    }}
                    value={startDate}
                    className="premium-calendar !bg-[#131B2F] !text-white !border-none"
                  />
                </div>
              )}
            </div>
            <span className="text-[#475569]">to</span>
            <div className="relative flex items-center gap-2">
              <span className="cursor-pointer" onClick={() => {
                setShowEndCalendar(!showEndCalendar);
                setShowStartCalendar(false);
              }}>{formatDate(endDate)}</span>
              <CalendarIcon
                size={14}
                className="text-[#475569] cursor-pointer hover:text-gray-300 transition-colors"
                onClick={() => {
                  setShowEndCalendar(!showEndCalendar);
                  setShowStartCalendar(false);
                }}
              />
              {showEndCalendar && (
                <div className="absolute top-full right-0 mt-3 z-[100] shadow-2xl rounded-2xl overflow-hidden border border-[#1E293B] animate-in fade-in slide-in-from-top-2 duration-200">
                  <Calendar
                    onChange={(date) => {
                      setEndDate(date);
                      setShowEndCalendar(false);
                    }}
                    value={endDate}
                    className="premium-calendar !bg-[#131B2F] !text-white !border-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 ml-4">
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-xl text-[12px] font-bold transition-all ${activeTab === tab
                  ? 'bg-[#3B82F6] text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]'
                  : 'text-[#64748B] hover:text-gray-300'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Area */}
      <div className="px-8 py-6 h-[280px] flex items-end gap-3 w-full overflow-hidden">
        {chartData.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1 h-full justify-end group">
            <div
              className={`w-full rounded-t-lg transition-all duration-500 relative ${item.active
                ? 'bg-gradient-to-b from-[#A855F7] via-[#3B82F6] to-[#34D399] shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                : 'bg-gradient-to-b from-[#3730A3]/70 to-[#0F766E]/70 group-hover:from-[#4338CA]/80 group-hover:to-[#0D9488]/80'
                }`}
              style={{ height: `${item.height}%` }}
            >
              {/* Optional tooltip here */}
            </div>
            <span className={`text-[10px] font-bold mt-4 uppercase tracking-wider ${item.active ? 'text-[#94A3B8]' : 'text-[#475569]'
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
