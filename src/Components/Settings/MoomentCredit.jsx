import React from 'react';
import { Plus, Trash2, DollarSign, Percent } from 'lucide-react';

const MoomentCredit = ({ creditPackages, setCreditPackages }) => {
  const handleAddPackage = () => {
    const newId = creditPackages.length > 0 ? Math.max(...creditPackages.map(p => p.id)) + 1 : 1;
    setCreditPackages([...creditPackages, { id: newId, name: '', credit: '', usd: '', commission: '' }]);
  };

  const handleDeletePackage = (id) => {
    setCreditPackages(creditPackages.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#1A1A4B] dark:text-white transition-colors">Mooment Credit</h2>
          <p className="text-sm text-gray-400 font-medium">Manage Mooment credit of your app</p>
        </div>
        <p className="text-[11px] text-gray-300 font-bold uppercase tracking-widest mt-2">Last modified by Admin on Oct 24, 2023</p>
      </div>


      {creditPackages.map((pkg, index) => (
        <div key={pkg.id} className="bg-[#1E1E2D] rounded-[32px] p-10 shadow-sm border border-gray-800 space-y-8 relative group">
          {index > 0 && (
            <button
              onClick={() => handleDeletePackage(pkg.id)}
              className="absolute top-8 right-8 p-2.5 bg-red-50 dark:bg-red-900/10 text-red-400 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
            >
              <Trash2 size={18} />
            </button>
          )}

          <h3 className="text-lg font-bold text-[#1A1A4B] dark:text-white transition-colors">Mooment Credit Package</h3>


          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-1">PACKAGE NAME</label>
              <input
                type="text"
                defaultValue={pkg.name}
                placeholder="25 Mooments credit for"
                className="w-full px-6 py-3.5 bg-[#2D2D3F] border border-gray-800 rounded-2xl text-sm font-bold text-[#1A1A4B] dark:text-white outline-none focus:ring-2 focus:ring-[#4B4B8A]/10 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-1">MOOMENT CREDIT</label>
              <input
                type="text"
                defaultValue={pkg.credit}
                placeholder="25"
                className="w-full px-6 py-3.5 bg-[#2D2D3F] border border-gray-800 rounded-2xl text-sm font-bold text-[#1A1A4B] dark:text-white outline-none focus:ring-2 focus:ring-[#4B4B8A]/10 shadow-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-1">USD</label>
              <div className="relative">
                <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input
                  type="text"
                  defaultValue={pkg.usd}
                  placeholder="26.25"
                  className="w-full pl-14 pr-6 py-3.5 bg-[#2D2D3F] border border-gray-800 rounded-2xl text-sm font-bold text-[#1A1A4B] dark:text-white outline-none focus:ring-2 focus:ring-[#4B4B8A]/10 shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-1">COMISSION</label>
              <div className="relative">
                <Percent className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                <input
                  type="text"
                  defaultValue={pkg.commission}
                  placeholder="5"
                  className="w-full px-6 py-3.5 bg-[#2D2D3F] border border-gray-800 rounded-2xl text-sm font-bold text-[#1A1A4B] dark:text-white outline-none focus:ring-2 focus:ring-[#4B4B8A]/10 shadow-sm"
                />
              </div>
            </div>

          </div>

          <div className="flex items-center justify-between pt-4">
            <button
              onClick={handleAddPackage}
              className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#4B4B8A] dark:hover:text-white transition-colors"
            >
              <Plus size={18} /> Add Package
            </button>
            <div className="flex gap-4">
              <button className="px-8 py-2.5 bg-gray-200/50 dark:bg-[#2D2D3F] text-gray-500 dark:text-gray-400 text-sm font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-[#3D3D4F] transition-all">Cancel</button>
              <button className="px-8 py-2.5 bg-[#4B4B8A] dark:bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-[#3B3B7A] dark:hover:bg-indigo-700 transition-all shadow-lg shadow-[#4B4B8A]/20">
                {index === 0 ? 'Update Package' : 'Add Package'}
              </button>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default MoomentCredit;
