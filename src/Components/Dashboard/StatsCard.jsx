import React from 'react';

const StatsCard = ({ title, value, change, pillColor, icon: Icon, showIcon }) => {
  return (
    <div className="bg-[#1E1E2D] p-6 rounded-[24px] shadow-sm border border-gray-800 flex flex-col justify-between h-[140px] relative overflow-hidden">
      <div className="flex justify-between items-start">
        <span className="text-[14px] font-medium text-gray-400">{title}</span>
        {change && (
          <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${pillColor || 'bg-green-50 dark:bg-green-900/20 text-green-500'}`}>
            {change}
          </span>
        )}
        {showIcon && Icon && (
          <div className="p-2 bg-[#2D2D3F] rounded-lg text-gray-400">
            {React.isValidElement(Icon) ? Icon : <Icon size={16} />}
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-[28px] font-bold text-[#1A1A4B] dark:text-white transition-colors">{value}</h3>
      </div>
    </div>

  );
};

export default StatsCard;
