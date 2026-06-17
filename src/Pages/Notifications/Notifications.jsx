import React, { useState } from 'react';
import { Bell, Check, Trash2 } from 'lucide-react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "A new user joined your app.", time: "Fri, 12:30pm", read: false },
    { id: 2, message: "Profile report received.", time: "Fri, 12:30pm", read: false },
    { id: 3, message: "A new verification request.", time: "Fri, 12:30pm", read: false },
    { id: 4, message: "New comment on your post.", time: "Fri, 12:30pm", read: false },
    { id: 5, message: "System maintenance scheduled for tonight.", time: "Thu, 8:00pm", read: true },
    { id: 6, message: "Payment successful for Premium plan.", time: "Wed, 2:15pm", read: true },
    { id: 7, message: "New workout protocol added.", time: "Tue, 9:00am", read: true },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto text-white space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[28px] font-bold tracking-tight">All Notifications</h1>
          <p className="text-[#94A3B8] text-[13px] mt-1 font-medium">Stay updated with the latest alerts and activities.</p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="flex items-center gap-2 bg-[#1E293B] hover:bg-slate-700 transition-colors text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md focus:outline-none"
        >
          <Check size={18} className="text-[#10B981]" />
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-[#0A1120]/80 rounded-2xl border border-[#1E293B] overflow-hidden">
        <div className="px-8 py-5 border-b border-[#1E293B]">
          <h2 className="text-[15px] font-bold text-white">Recent Alerts</h2>
        </div>
        
        <div className="divide-y divide-[#1E293B]/55">
          {notifications.length > 0 ? (
            notifications.map((item) => (
              <div 
                key={item.id} 
                className={`p-6 flex items-start justify-between gap-4 transition-colors ${
                  item.read ? 'bg-transparent' : 'bg-[#1E293B]/30'
                } hover:bg-[#1E293B]/50`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3 rounded-xl ${item.read ? 'bg-[#1E293B] text-[#64748B]' : 'bg-blue-500/20 text-blue-400'}`}>
                    <Bell size={20} />
                  </div>
                  <div className="space-y-1.5 mt-0.5">
                    <p className={`text-[14px] leading-tight ${item.read ? 'text-[#94A3B8] font-medium' : 'text-gray-100 font-bold'}`}>
                      {item.message}
                    </p>
                    <p className="text-[12px] text-[#64748B] font-medium">{item.time}</p>
                  </div>
                </div>
                <button 
                  onClick={() => deleteNotification(item.id)}
                  className="text-[#64748B] hover:text-[#EF4444] transition-colors p-2 rounded-lg focus:outline-none"
                  title="Delete Notification"
                >
                  <Trash2 size={18} strokeWidth={1.5} />
                </button>
              </div>
            ))
          ) : (
            <div className="px-8 py-16 text-center text-[#475569] text-[14px]">
              You have no notifications.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
