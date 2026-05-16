import React from 'react';
import { Percent } from 'lucide-react';

const Pricing = () => {
  const fields = [
    { key: 'tax', label: 'TAX' },
    { key: 'creditCardFee', label: 'CREDIT CARD FEE' },
    { key: 'applePayoutFee', label: 'APPLE PAYOUT FEE' },
    { key: 'platformFee', label: 'PLAFORM FEE' },
    { key: 'productPercentage', label: 'PRODUCT PERCENTAGE' },
    { key: 'ticketPercentage', label: 'TICKET PERCENTAGE' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1A1A4B] dark:text-white transition-colors">Pricing</h2>
          <p className="text-sm text-[#5E598B] font-medium">Manage pricing of your app</p>
        </div>
        <p className="text-[11px] text-[#64748B] font-bold uppercase tracking-widest mt-2">Last modified by Admin on Oct 24, 2023</p>
      </div>


      <div className="bg-white dark:bg-[#1E1E2D] rounded-[32px] p-10 shadow-sm border border-gray-50 dark:border-gray-800 space-y-8 transition-colors">
        {fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="text-[10px] font-bold text-[#16123E] uppercase tracking-widest px-1">{field.label}</label>
            <div className="relative">
              <Percent className="absolute right-6 top-1/2 -translate-y-1/2 text-[#454070]" size={16} />
              <input
                type="text"
                defaultValue="5"
                className="w-full px-6 py-3.5 bg-white dark:bg-[#2D2D3F] border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-bold text-[#1A1A4B] dark:text-white outline-none focus:ring-2 focus:ring-[#4B4B8A]/10 shadow-sm transition-colors"
              />
            </div>
          </div>
        ))}


        <div className="flex justify-end gap-4 pt-8">
          <button className="px-8 py-2.5 bg-gray-200/50 dark:bg-[#2D2D3F] text-gray-500 dark:text-gray-400 text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-[#3D3D4F] transition-all">Cancel</button>
          <button className="px-8 py-2.5 bg-[#1A1A4B] dark:bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-black dark:hover:bg-indigo-700 transition-all shadow-lg shadow-black/10">
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
