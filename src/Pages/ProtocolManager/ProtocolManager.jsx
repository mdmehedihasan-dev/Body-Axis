import React, { useState } from 'react';
import { PlusCircle, TrendingUp, Flame, Dumbbell, Activity, Users, Edit3, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';

const ProtocolManager = () => {
  const stats = [
    {
      title: "TOTAL PROTOCOLS",
      value: "412",
      increase: "12%",
      icon: <Flame size={20} className="text-[#38BDF8]" />,
      bgIcon: <Flame size={120} strokeWidth={1} className="text-[#1E293B] opacity-50 absolute -right-6 -bottom-6" />,
    },
    {
      title: "TOTAL EXERCISES",
      value: "2,854",
      increase: "12%",
      icon: <Dumbbell size={20} className="text-[#818CF8]" />,
      bgIcon: <Dumbbell size={120} strokeWidth={1} className="text-[#1E293B] opacity-50 absolute -right-6 -bottom-6" />,
    },
    {
      title: "AVERAGE DURATION",
      value: "14,285",
      increase: "12%",
      icon: <Activity size={20} className="text-[#34D399]" />,
      bgIcon: <Activity size={120} strokeWidth={1} className="text-[#1E293B] opacity-50 absolute -right-6 -bottom-6" />,
    },
    {
      title: "ACTIVE USERS",
      value: "8,912",
      increase: "12%",
      icon: <Users size={20} className="text-[#A78BFA]" />,
      bgIcon: <Users size={120} strokeWidth={1} className="text-[#1E293B] opacity-50 absolute -right-6 -bottom-6" />,
    }
  ];

  const initialProtocols = [
    { id: '001', name: "The Rotator Cuff Reset", duration: "15m", active: true },
    { id: '002', name: "The Lower Back Performance Flow", duration: "30m", active: true },
    { id: '003', name: "The Lower Back Deep Performance", duration: "45m", active: true },
    { id: '004', name: "The Rotator Cuff Reset", duration: "60m", active: false },
    { id: '005', name: "The Hip Rotation Deep Performance", duration: "45m", active: true },
    { id: '006', name: "The Hip Flexor Strength Full Build", duration: "30m", active: false },
    { id: '007', name: "The Upper Back Ache Full Protocol", duration: "30m", active: false },
    { id: '008', name: "The Shoulder ER Reset", duration: "15m", active: true },
  ];

  const [protocols, setProtocols] = useState(initialProtocols);

  const toggleStatus = (id) => {
    setProtocols(protocols.map(p => p.id === id ? { ...p, active: !p.active } : p));
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
          <div key={idx} className="bg-[#131B2F] rounded-2xl p-6 relative overflow-hidden border border-[#1E293B]">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-[#0A0D14] p-3 rounded-xl z-10 border border-[#1E293B]">
                {stat.icon}
              </div>
              <div className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full text-[11px] font-bold z-10">
                <TrendingUp size={12} strokeWidth={3} />
                {stat.increase}
              </div>
            </div>
            <div className="z-10 relative">
              <p className="text-[#64748B] text-[11px] font-bold uppercase tracking-[0.15em] mb-1.5">{stat.title}</p>
              <h3 className="text-3xl font-bold tracking-tight">{stat.value}</h3>
            </div>
            {stat.bgIcon}
          </div>
        ))}
      </div>

      {/* Manage Protocols Table */}
      <div className="bg-[#131B2F] rounded-2xl border border-[#1E293B] overflow-hidden">
        <div className="p-6 border-b border-[#1E293B]">
          <h2 className="text-[15px] font-bold">Manage Protocols</h2>
        </div>
        
        <div className="overflow-x-auto">
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
              {protocols.map((protocol) => (
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
        <div className="px-8 py-6 flex items-center justify-between text-[13px] text-[#64748B] font-medium">
          <p>Showing 1-8 of 124 protocols</p>
          <div className="flex items-center gap-3">
            <button className="p-1 hover:text-white transition-colors"><ArrowLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center bg-[#1E293B] text-white rounded-lg font-bold">1</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-[#1E293B]/50 rounded-lg transition-colors text-[#94A3B8] hover:text-white">2</button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-[#1E293B]/50 rounded-lg transition-colors text-[#94A3B8] hover:text-white">3</button>
            <button className="p-1 hover:text-white transition-colors"><ArrowRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProtocolManager;
