import React, { useState } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

// Sub-components
import SettingsTabs from '../../Components/Settings/SettingsTabs';
import GeneralSettings from '../../Components/Settings/GeneralSettings';
import MoomentCredit from '../../Components/Settings/MoomentCredit';
import Pricing from '../../Components/Settings/Pricing';
import DynamicLegalEditor from '../../Components/Settings/DynamicLegalEditor';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('General');
  const [editingText, setEditingText] = useState('');

  // States that need to persist across tab switches
  const [creditPackages, setCreditPackages] = useState([
    { id: 1, name: '25 Mooments credit for', credit: '25', usd: '26.25', commission: '5' }
  ]);

  const [termsContent, setTermsContent] = useState([
    { id: 1, title: 'Introduction', body: 'Our platform unifies all customer communication channels: WhatsApp, Twilio (SMS), and Gmail into a single shared inbox. Teams can collaborate, assign conversations, and respond to customers without switching tools, making customer support faster, simpler, and more organized.' }
  ]);

  const [privacyContent, setPrivacyContent] = useState([
    { id: 1, title: 'Data Collection', body: 'We value your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information when you use our Mooment application and services.' }
  ]);

  return (
    <div className="min-h-screen bg-[#13131F] p-8">
      <div className="mx-auto max-w-[1400px] flex gap-12">

        {/* Workspace Sidebar Navigation */}
        <SettingsTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setEditingText={setEditingText}
        />

        {/* Settings Content Area */}
        <div className="flex-1">
          {activeTab === 'General' && (
            <GeneralSettings />
          )}


          {activeTab === 'Mooment Credit' && (
            <MoomentCredit
              creditPackages={creditPackages}
              setCreditPackages={setCreditPackages}
            />
          )}

          {activeTab === 'Pricing' && (
            <Pricing />
          )}

          {activeTab === 'Terms & Conditions' && (
            <DynamicLegalEditor
              type="terms"
              title="Terms & Conditions"
              subtitle="Set terms & conditions of your Mooment app"
              content={termsContent}
              setContent={setTermsContent}
              editingText={editingText}
              setEditingText={setEditingText}
            />
          )}

          {activeTab === 'Privacy & Policy' && (
            <DynamicLegalEditor
              type="privacy"
              title="Privacy & Policy"
              subtitle="Set privacy & policy of your Mooment app"
              content={privacyContent}
              setContent={setPrivacyContent}
              editingText={editingText}
              setEditingText={setEditingText}
            />
          )}

          {/* Placeholder for future settings */}
          {activeTab === 'Settings' && (
            <div className="flex flex-col items-center justify-center h-[400px] text-gray-300 animate-in zoom-in duration-500">
              <SettingsIcon size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-bold">This section is coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;