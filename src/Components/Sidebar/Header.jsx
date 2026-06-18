import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import adminImage from "../../assets/image/adminkickclick.jpg";

const Header = ({ showDrawer }) => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [notificationsCount] = useState(5);

  const notifications = [
    { message: "A new user joined your app.", time: "Fri, 12:30pm" },
    { message: "Profile report received.", time: "Fri, 12:30pm" },
    { message: "A new verification request.", time: "Fri, 12:30pm" },
    { message: "New comment on your post.", time: "Fri, 12:30pm" },
  ];

  return (
    <div className="relative bg-[#0b1120] h-[88px] flex items-center justify-between px-4 lg:px-8 shadow-sm">
      
      {/* Mobile Menu Button */}
      <div className="flex items-center lg:hidden">
        <button
          onClick={showDrawer}
          className="text-[#94A3B8] hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 lg:gap-8 ml-auto">
        {/* Notifications */}
        <button
          className="relative text-[#94A3B8] hover:text-white transition-colors"
          onClick={() => setShowNotifications((prev) => !prev)}
        >
          <Bell size={22} />
          {notificationsCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 h-2 w-2 rounded-full border border-[#0A0D14]"></span>
          )}
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-[#E2E8F0]"></div>

        {/* User Profile */}
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[14px] font-bold text-white group-hover:text-gray-200 transition-colors">Alex Sterling</span>
            <span className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">ADMIN</span>
          </div>
          <div className="w-11 h-11 rounded-full border border-gray-600 overflow-hidden shadow-lg p-0.5">
            <img src={adminImage} alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-8 top-[80px] z-[60] p-6 bg-[#131B2F] rounded-2xl shadow-2xl border border-[#1E293B] w-80 animate-in fade-in zoom-in duration-200">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1E293B]">
            <h2 className="text-lg font-bold text-white">Notifications</h2>
            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold rounded-full">5 NEW</span>
          </div>
          <div className="space-y-6">
            {notifications.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-[#1E293B] p-2.5 rounded-xl text-blue-400">
                  <Bell size={18} />
                </div>
                <div className="space-y-1">
                  <p className="text-[13px] font-bold text-gray-200 leading-tight">
                    {item.message}
                  </p>
                  <p className="text-[11px] text-[#94A3B8] font-medium">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={() => {
              setShowNotifications(false);
              navigate('/notifications');
            }}
            className="mt-8 w-full bg-blue-600 text-white py-3.5 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-black/10"
          >
            View All Notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
