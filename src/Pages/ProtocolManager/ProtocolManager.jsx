import React, { useState } from 'react';
import { PlusCircle, Flame, Dumbbell, Activity, Users, Edit3, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';
import StatsCard from '../../Components/Dashboard/StatsCard';

// Generate dynamic dataset for pagination demo
const generateMockProtocols = (count) => {
  const names = [
    "The Rotator Cuff Reset",
    "The Lower Back Performance Flow",
    "The Lower Back Deep Performance",
    "The Hip Rotation Deep Performance",
    "The Hip Flexor Strength Full Build",
    "The Upper Back Ache Full Protocol",
    "The Shoulder ER Reset",
    "The Knee Stabilization Drill"
  ];
  const durations = ["15m", "30m", "45m", "60m"];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `00${(i + 1).toString().padStart(2, '0')}`,
    name: names[i % names.length],
    duration: durations[i % durations.length],
    active: i % 3 !== 0 // Some active, some inactive
  }));
};

const ProtocolManager = () => {
  const stats = [
    {
      title: "TOTAL PROTOCOLS",
      value: "412",
      change: "↗ 12%",
      icon: <Flame size={20} className="text-[#38BDF8]" />,
      bgIcon: Flame,
    },
    {
      title: "TOTAL EXERCISES",
      value: "2,854",
      change: "↗ 12%",
      icon: <Dumbbell size={20} className="text-[#818CF8]" />,
      bgIcon: Dumbbell,
    },
    {
      title: "AVERAGE DURATION",
      value: "14,285",
      change: "↗ 12%",
      icon: <Activity size={20} className="text-[#34D399]" />,
      bgIcon: Activity,
    },
    {
      title: "ACTIVE USERS",
      value: "8,912",
      change: "↗ 12%",
      icon: <Users size={20} className="text-[#A78BFA]" />,
      bgIcon: Users,
    }
  ];

  const [protocols, setProtocols] = useState(generateMockProtocols(24));
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalPages = Math.ceil(protocols.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProtocols = protocols.slice(indexOfFirstItem, indexOfLastItem);

  const toggleStatus = (id) => {
    setProtocols(protocols.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(p => p + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto text-white space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold tracking-tight">Protocol Manager</h1>
          <p className="text-[#94A3B8] text-[13px] mt-1 font-medium">Design and oversee corrective movement sequences.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#3B82F6] hover:bg-blue-600 transition-colors text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
          Create New Protocol
          <PlusCircle size={18} />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      {/* Manage Protocols Table */}
      <div className="bg-[#131B2F] rounded-2xl border border-[#1E293B] overflow-hidden">
        <div className="p-6 border-b border-[#1E293B]">
          <h2 className="text-[15px] font-bold text-white">Manage Protocols</h2>
        </div>
        
        <div className="overflow-x-auto min-h-[500px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#172136] text-[10px] font-bold text-[#64748B] uppercase tracking-[0.1em]">
                <th className="px-8 py-4">#</th>
                <th className="px-6 py-4">PROTOCOL NAME</th>
                <th className="px-6 py-4">DURATION</th>
                <th className="px-6 py-4">STATUS</th>
                <th className="px-8 py-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E293B]">
              {currentProtocols.map((protocol) => (
                <tr key={protocol.id} className="hover:bg-[#1E293B]/40 transition-colors">
                  <td className="px-8 py-5 text-[#64748B] text-[13px] font-medium">{protocol.id}</td>
                  <td className="px-6 py-5 text-[14px] font-bold text-gray-100">{protocol.name}</td>
                  <td className="px-6 py-5 text-[#94A3B8] text-[13px]">{protocol.duration}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {/* Toggle Switch */}
                      <button 
                        onClick={() => toggleStatus(protocol.id)}
                        className={`relative w-11 h-[22px] rounded-full transition-colors duration-300 ${protocol.active ? 'bg-[#10B981]' : 'bg-[#334155]'}`}
                      >
                        <span className={`absolute top-1 left-1 bg-white w-[14px] h-[14px] rounded-full transition-transform duration-300 ${protocol.active ? 'translate-x-6' : 'translate-x-0'}`}></span>
                      </button>
                      <span className={`text-[11px] font-bold tracking-wider uppercase ${protocol.active ? 'text-[#10B981]' : 'text-[#475569]'}`}>
                        {protocol.active ? 'ACTIVE' : 'INACTIVE'}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center justify-end gap-3 text-[#94A3B8]">
                      <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                        <Edit3 size={18} strokeWidth={1.5} />
                      </button>
                      <button className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
                        <Trash2 size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="px-8 py-6 flex items-center justify-between text-[13px] text-[#64748B] font-medium border-t border-[#1E293B]">
          <p>Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, protocols.length)} of {protocols.length} protocols</p>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`p-1 transition-colors ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'hover:text-white'}`}
            >
              <ArrowLeft size={16} />
            </button>
            
            {getPageNumbers().map(num => (
              <button 
                key={num}
                onClick={() => handlePageClick(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold transition-colors ${
                  currentPage === num 
                    ? 'bg-[#1E293B] text-white' 
                    : 'text-[#94A3B8] hover:bg-[#1E293B]/50 hover:text-white'
                }`}
              >
                {num}
              </button>
            ))}
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`p-1 transition-colors ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'hover:text-white'}`}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolManager;
