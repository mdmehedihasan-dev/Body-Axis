import React from 'react';
import { LayoutGrid, BadgeCheck } from 'lucide-react';

const ActivePlans = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-white text-xl mb-2">Active Plans</h2>
      
      {/* Monthly Membership */}
      <div className="bg-[#043e8d] rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </div>
          <LayoutGrid className="text-white/40" size={28} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-white text-xl font-bold mb-4">Monthly Membership</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-white text-[56px] leading-none font-bold tracking-tight">$29</span>
          <span className="text-white/70 text-lg font-medium ml-1">.99/mo</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white/70 text-xs font-medium mb-1">Subscribers</p>
            <p className="text-white font-bold text-base">8,420</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white/70 text-xs font-medium mb-1">Conversion</p>
            <p className="text-white font-bold text-base">12%</p>
          </div>
        </div>
      </div>

      {/* Yearly Membership */}
      <div className="bg-[#053d2d] rounded-2xl p-6 relative overflow-hidden group">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
            Best Value
          </div>
          <BadgeCheck className="text-white/40" size={28} strokeWidth={1.5} />
        </div>
        
        <h3 className="text-white text-xl font-bold mb-4">Yearly Membership</h3>
        <div className="flex items-baseline mb-6">
          <span className="text-white text-[56px] leading-none font-bold tracking-tight">$299</span>
          <span className="text-white/70 text-lg font-medium ml-1">.99/yr</span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white/70 text-xs font-medium mb-1">Subscribers</p>
            <p className="text-white font-bold text-base">4,038</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3">
            <p className="text-white/70 text-xs font-medium mb-1">Conversion</p>
            <p className="text-white font-bold text-base">28%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePlans;
