import React from 'react';
import { Eye, User, Flame, Activity } from 'lucide-react';
import StatsCard from '../../Components/Dashboard/StatsCard';
import EngagementVelocity from '../../Components/Dashboard/EngagementVelocity';
import LiveActivity from '../../Components/Dashboard/LiveActivity';

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '14,285',
      change: '↗ 12%',
      icon: Eye,
      bgIcon: Eye,
    },
    {
      title: 'Active Users',
      value: '8,912',
      change: '↗ 12%',
      icon: User,
      bgIcon: User,
    },
    {
      title: 'Total Protocols',
      value: '412',
      change: '↗ 12%',
      icon: Flame,
      bgIcon: Flame,
    },
    {
      title: 'Total Exercises',
      value: '2,854',
      change: '↗ 12%',
      icon: Activity,
      bgIcon: Activity,
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#0A0D14]">
      <div className="mx-auto max-w-[1600px]">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-white mb-2">Dashboard Home</h1>
          <p className="text-[14px] text-[#94A3B8]">
            Visualizing movement integrity and platform growth monitoring across the Body Axis ecosystem.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Engagement section */}
        <div className="w-full mb-8">
          <EngagementVelocity />
        </div>

        {/* Live Activity section */}
        <div className="w-full mb-8">
          <LiveActivity />
        </div>

      </div>
    </div>
  );
}
