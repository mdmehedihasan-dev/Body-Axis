import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  ChevronDown,
  PanelLeftClose
} from "lucide-react";
import adminlogo from "../../assets/image/Body-Axis.png";

const Sidebar = ({ closeDrawer }) => {
  const location = useLocation();
  const sections = [
    {
      title: "MAIN",
      items: [
        { icon: <LayoutGrid size={20} />, label: "Dashboard", Link: "/" },
      ]
    },
    {
      title: "CORE",
      items: [
        { icon: <Users size={20} />, label: "User Management", Link: "/user-management" },
      ]
    }
  ];

  const user = {
    name: "Tuval Ramsey",
    email: "paul@ramsey.com",
    avatar: "https://i.pravatar.cc/150?u=tuval"
  };

  return (
    <div className="w-72 bg-[#0C0B10] h-screen flex flex-col border-r border-white/5 shadow-2xl">
      {/* Sidebar Header */}
      <div className="p-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={adminlogo} alt="Body-Axis" className="w-40 h-10" />
          <div className="hidden">
            <h1 className="text-white font-black text-lg tracking-tight italic">Mooment</h1>
            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Super Admin</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-white transition-colors">
          <PanelLeftClose size={20} />
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
        {sections.map((section, idx) => (
          <div key={section.title} className={idx !== 0 ? "mt-8" : ""}>
            <p className="px-4 text-[10px] font-bold text-gray-600 mb-4 tracking-[0.2em]">{section.title}</p>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = location.pathname === item.Link ||
                  (item.Link !== '/' && location.pathname.startsWith(item.Link));
                return (
                  <Link
                    key={item.label}
                    to={item.Link}
                    onClick={closeDrawer}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                      ? "bg-[#B2ABBA] text-[#1A1A1A] font-bold shadow-lg shadow-black/20"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    <span className={`${isActive ? "text-[#1A1A1A]" : "text-gray-500 group-hover:text-white"} transition-colors`}>
                      {item.icon}
                    </span>
                    <span className="text-[15px]">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Footer / User Profile */}
      <div className="p-6 border-t border-white/5">
        <div className="flex items-center justify-between p-2 rounded-2xl hover:bg-white/5 transition-all cursor-pointer group">
          <div className="flex items-center gap-3">
            <img
              src={user.avatar}
              alt="User"
              className="w-10 h-10 rounded-full border border-white/10"
            />
            <div className="hidden lg:block overflow-hidden max-w-[120px]">
              <p className="text-white text-sm font-bold truncate">{user.name}</p>
              <p className="text-gray-500 text-[11px] truncate">{user.email}</p>
            </div>
          </div>
          <ChevronDown size={16} className="text-gray-500 group-hover:text-white transition-all" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
