import React, { useState } from 'react';
import { CreditCard, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const SubscriptionTable = ({ subscriptions, filterStatus, setFilterStatus, filterPlanType, setFilterPlanType }) => {
  const tabs = ['All Subs', 'Active', 'Expiring', 'Cancelled'];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(subscriptions.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = subscriptions.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col flex-1 gap-6">
      {/* Table Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Pills */}
        <div className="flex items-center bg-[#0B1221] p-1.5 rounded-full border border-slate-800/80 h-[48px] overflow-x-auto w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => {
                setFilterStatus(tab);
                setCurrentPage(1);
              }}
              className={`px-6 h-full rounded-full text-sm font-medium transition-all whitespace-nowrap ${filterStatus === tab
                ? 'bg-[#A5B4FC] text-[#0B1221] shadow-sm'
                : 'text-slate-400 hover:text-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dropdowns */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative h-[48px] flex-1 md:flex-none">
            <select
              value={filterPlanType}
              onChange={(e) => {
                setFilterPlanType(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-[#0B1221] border border-slate-800/80 rounded-full pl-5 pr-10 h-full w-full text-sm font-medium text-slate-400 outline-none appearance-none cursor-pointer hover:border-slate-700 transition-colors"
            >
              <option>Plan Type</option>
              <option>Monthly Elite</option>
              <option>Yearly Elite</option>
              <option>Monthly Basic</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
          <div className="relative h-[48px] flex-1 md:flex-none">
            <select className="bg-[#0B1221] border border-slate-800/80 rounded-full pl-5 pr-10 h-full w-full text-sm font-medium text-slate-400 outline-none appearance-none cursor-pointer hover:border-slate-700 transition-colors">
              <option>Revenue Range</option>
              <option>$0 - $50</option>
              <option>$50 - $200</option>
              <option>$200+</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#0B1221] rounded-[24px] overflow-hidden flex flex-col flex-1 h-full shadow-lg border border-slate-800/30">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800/60">
                <th className="px-6 py-5 text-xs font-bold text-slate-300 uppercase tracking-widest w-[30%]">USER</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-300 uppercase tracking-widest w-[20%]">PLAN TYPE</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-300 uppercase tracking-widest w-[20%]">RENEWAL DATE</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-300 uppercase tracking-widest w-[15%]">PAYMENT</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-300 uppercase tracking-widest w-[15%]">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {paginatedData.length > 0 ? paginatedData.map(sub => (
                <tr key={sub.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-transparent border border-slate-700 shrink-0"></div>
                      <div>
                        <p className="text-white text-[15px] font-bold">{sub.name}</p>
                        <p className="text-slate-400 text-[13px]">{sub.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-200 text-[15px]">{sub.plan.split(' ')[0]}</p>
                    <p className="text-slate-400 text-[13px]">{sub.plan.split(' ')[1]}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-200 text-[15px]">{sub.date.split(',')[0]},</p>
                    <p className="text-slate-400 text-[13px]">{sub.date.split(',')[1]?.trim()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-300 text-[14px]">
                      {sub.payment.includes('PayPal') ? (
                        <>
                          <div className="w-5 h-5 rounded flex items-center justify-center border border-slate-600 text-[10px] font-bold text-slate-400">P</div>
                          <span>PayPal</span>
                        </>
                      ) : (
                        <>
                          <CreditCard size={18} className="text-slate-400" />
                          <span>{sub.payment.replace(' ', '')}</span>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center justify-center px-4 py-1 rounded-full border text-[12px] font-medium ${sub.status === 'Active'
                      ? 'border-[#0F766E] text-[#2DD4BF] bg-[#042F2E]/60'
                      : 'border-[#991B1B] text-[#FCA5A5] bg-[#450A0A]/60'
                      }`}>
                      {sub.status}
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-slate-400 text-[14px]">
                    No subscriptions found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="mt-auto px-6 py-5 border-t border-slate-800/60 flex items-center justify-between">
          <p className="text-slate-400 text-[13px] font-medium">
            Showing {paginatedData.length} of {subscriptions.length} subscribers
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#334155] text-slate-400 hover:bg-[#1E293B] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-[13px] font-medium transition-colors ${currentPage === page
                  ? 'bg-[#1E293B] text-white'
                  : 'text-slate-400 hover:bg-[#1E293B] hover:text-white'
                  }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#334155] text-slate-400 hover:bg-[#1E293B] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTable;
