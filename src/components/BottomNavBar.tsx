import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavBarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab,
  onSelectTab
}) => {
  const tabs: { tab: ActiveTab; label: string; icon: string }[] = [
    { tab: 'beranda', label: 'Beranda', icon: 'home' },
    { tab: 'profil', label: 'Profil', icon: 'info' },
    { tab: 'layanan', label: 'Layanan', icon: 'apps' },
    { tab: 'berita', label: 'Berita', icon: 'campaign' },
    { tab: 'kontak', label: 'Kontak', icon: 'call' }
  ];

  return (
    <nav
      id="mobile-bottom-nav"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-14 pb-safe bg-white border-t border-[#e0e0e0] shadow-md select-none"
    >
      {tabs.map((item) => {
        const isActive = activeTab === item.tab;
        return (
          <button
            key={item.tab}
            id={`bottom-nav-${item.tab}`}
            onClick={() => onSelectTab(item.tab)}
            className={`flex flex-col items-center justify-center w-full h-full relative cursor-pointer active:bg-[#f4f4f4] transition-colors ${
              isActive ? 'text-[#0f62fe] font-semibold' : 'text-[#6f6f6f]'
            }`}
          >
            {/* Active Indicator Line on top */}
            {isActive && (
              <div className="absolute top-0 w-8 h-[2px] bg-[#0f62fe] rounded-b-xs" />
            )}
            <span
              className={`material-symbols-outlined text-[24px] ${
                isActive ? 'filled text-[#0f62fe]' : 'text-[#6f6f6f]'
              }`}
            >
              {item.icon}
            </span>
            <span className="font-label text-[10px] uppercase tracking-wider mt-1">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
