import React from 'react';
import { User, Mail, Phone, Camera, Moon } from 'lucide-react';
import adminImage from "../../assets/image/adminkickclick.jpg";
import { useTheme } from '../../context/ThemeContext';

const GeneralSettings = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [profileImage, setProfileImage] = React.useState(adminImage);
  const fileInputRef = React.useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="max-w-5xl space-y-6 animate-in fade-in duration-500">
      <div className="mb-6 px-1">
        <h2 className="text-[26px] font-bold text-[#1A1A4B] dark:text-white">General Settings</h2>
        <p className="text-[14px] text-[#64748B] font-medium mt-1">Manage your profile</p>
      </div>

      {/* Profile Information Section */}
      <div className="bg-white dark:bg-[#1E1E2D] rounded-[24px] p-8 shadow-sm border border-[#F1F5F9] dark:border-gray-800">
        <div className="mb-8">
          <h3 className="text-[18px] font-bold text-[#1A1A4B] dark:text-white mb-1">Profile Information</h3>
          <p className="text-[13px] text-[#64748B] font-medium">Update your photo and personal details.</p>
        </div>

        <div className="flex gap-10 items-start pb-8 border-b border-[#F1F5F9] dark:border-gray-800">
          {/* Avatar Section */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-[#2D2D3F] shadow-sm">
              <img src={profileImage} className="w-full h-full object-cover" />
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden" 
              accept="image/*"
            />
            <button 
              onClick={triggerFileInput}
              className="absolute bottom-1 right-1 p-2 bg-white dark:bg-[#2D2D3F] text-[#64748B] rounded-full shadow-md border border-[#F1F5F9] dark:border-gray-700 hover:scale-110 transition-all"
            >
              <Camera size={14} />
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider px-1">NAME</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    <User size={18} />
                  </div>
                  <input 
                    type="text" 
                    defaultValue="John Doe" 
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#2D2D3F] border border-[#E2E8F0] dark:border-gray-700 rounded-xl text-[15px] font-medium text-[#1E293B] dark:text-white outline-none focus:border-[#433E6F] transition-colors" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider px-1">EMAIL</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    defaultValue="example@gmail.com" 
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#2D2D3F] border border-[#E2E8F0] dark:border-gray-700 rounded-xl text-[15px] font-medium text-[#1E293B] dark:text-white outline-none focus:border-[#433E6F] transition-colors" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-bold text-[#64748B] uppercase tracking-wider px-1">CONTACT</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <Phone size={18} />
                </div>
                <input 
                  type="text" 
                  defaultValue="+1 265 665 2266" 
                  className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#2D2D3F] border border-[#E2E8F0] dark:border-gray-700 rounded-xl text-[15px] font-medium text-[#1E293B] dark:text-white outline-none focus:border-[#433E6F] transition-colors" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6">
          <button className="px-7 py-2.5 border border-[#E2E8F0] dark:border-gray-700 text-[#64748B] dark:text-gray-400 text-[14px] font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-[#2D2D3F] transition-all">
            Cancel
          </button>
          <button className="px-7 py-2.5 bg-[#433E6F] text-white text-[14px] font-bold rounded-xl hover:bg-[#343058] transition-all shadow-md">
            Save
          </button>
        </div>
      </div>

      {/* Password Settings Section */}
      <div className="bg-white dark:bg-[#1E1E2D] rounded-[24px] p-8 shadow-sm border border-[#F1F5F9] dark:border-gray-800">
        <div className="mb-8">
          <h3 className="text-[18px] font-bold text-[#1A1A4B] dark:text-white mb-1">Password settings</h3>
          <p className="text-[13px] text-[#64748B] font-medium">Keep your account secure with a strong password</p>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-[#F1F5F9] dark:border-gray-800">
          <div>
            <p className="text-[15px] font-bold text-[#1A1A4B] dark:text-white">Password</p>
            <p className="text-[12px] text-[#94A3B8] font-medium mt-0.5">Last changed 4 months ago</p>
          </div>
          <button className="px-5 py-2.5 bg-white dark:bg-[#2D2D3F] border border-[#E2E8F0] dark:border-gray-700 rounded-xl text-[13px] font-bold text-[#64748B] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#3D3D4F] transition-all">
            Update Password
          </button>
        </div>
      </div>

      {/* Miscellanies Settings Section */}
      <div className="bg-white dark:bg-[#1E1E2D] rounded-[24px] p-8 shadow-sm border border-[#F1F5F9] dark:border-gray-800">
        <div className="mb-8">
          <h3 className="text-[18px] font-bold text-[#1A1A4B] dark:text-white mb-1">Miscellanies settings</h3>
          <p className="text-[13px] text-[#64748B] font-medium">Personalized your dashboard</p>
        </div>
        <div className="flex items-center justify-between pt-6 border-t border-[#F1F5F9] dark:border-gray-800">
          <p className="text-[15px] font-bold text-[#1A1A4B] dark:text-white">Dark Mode</p>
          <button 
            onClick={toggleDarkMode}
            className={`relative w-11 h-6 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#433E6F]' : 'bg-[#CBD5E1]'}`}
          >
            <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-5' : 'translate-x-0'} shadow-sm`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
