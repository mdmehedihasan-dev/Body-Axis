import React, { useState } from 'react';
import { Download } from 'lucide-react';
import MetricCards from '../../Components/Subscription/MetricCards';
import ActivePlans from '../../Components/Subscription/ActivePlans';
import RecentActivity from '../../Components/Subscription/RecentActivity';
import RevenueGrowth from '../../Components/Subscription/RevenueGrowth';
import SubscriptionTable from '../../Components/Subscription/SubscriptionTable';

const mockSubscriptions = [
  {
    id: 1,
    name: 'Sophia Roberts',
    email: 'sophia.r@example.com',
    plan: 'Yearly Elite',
    date: 'Dec 12, 2024',
    payment: '•••• 4242',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Jordan Smith',
    email: 'j.smith@corp.com',
    plan: 'Monthly Basic',
    date: 'Oct 18, 2024',
    payment: 'PayPal',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Thompson',
    email: 'alice.t@wellness.org',
    plan: 'Yearly Elite',
    date: 'Sep 05, 2024',
    payment: '•••• 9901',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Liam Carter',
    email: 'liam@creativestudio.io',
    plan: 'Monthly Elite',
    date: 'Oct 02, 2024',
    payment: '•••• 5112',
    status: 'Cancelled'
  }
];

const SubscriptionManagement = () => {
  const [filterStatus, setFilterStatus] = useState('All Subs');

  return (
    <div className="min-h-screen p-8 bg-[#0A0D14] text-white font-sans">
      <div className="max-w-[1600px] mx-auto animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight mb-1">Subscription Management</h1>
            <p className="text-[#94A3B8] text-[13px] font-medium">Manage memberships, billing activity, and subscription performance.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#131B2F] border border-[#1E293B] hover:bg-[#1E293B] transition-colors text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm whitespace-nowrap">
            <Download size={16} />
            Export Report
          </button>
        </div>

        {/* Metrics Row */}
        <MetricCards />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ActivePlans />
            <RecentActivity />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 flex flex-col h-full">
            <RevenueGrowth />
            <SubscriptionTable 
              subscriptions={mockSubscriptions}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SubscriptionManagement;
