import React, { createContext, useState } from 'react';

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

export const ProtocolContext = createContext();

export const ProtocolProvider = ({ children }) => {
  const [protocols, setProtocols] = useState(generateMockProtocols(24));

  const addProtocol = (newProtocol) => {
    setProtocols([
      {
        id: `00${(protocols.length + 1).toString().padStart(2, '0')}`,
        ...newProtocol,
        active: true
      },
      ...protocols
    ]);
  };

  const toggleStatus = (id) => {
    setProtocols(protocols.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  return (
    <ProtocolContext.Provider value={{ protocols, addProtocol, toggleStatus }}>
      {children}
    </ProtocolContext.Provider>
  );
};
