import React from 'react';
import { ActiveTab } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  activeTab: ActiveTab;
  onClose: () => void;
  onSelectTab: (tab: ActiveTab) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  activeTab,
  onClose,
  onSelectTab
}) => {
  const navItems: { tab: ActiveTab; label: string; icon: string }[] = [
    { tab: 'beranda', label: 'Beranda', icon: 'home' },
    { tab: 'profil', label: 'Profil Desa', icon: 'account_balance' },
    { tab: 'layanan', label: 'Layanan Publik', icon: 'grid_view' },
    { tab: 'berita', label: 'Berita & Pengumuman', icon: 'newspaper' },
    { tab: 'kontak', label: 'Hubungi Kami', icon: 'contact_support' }
  ];

  return (
    <>
      {/* Drawer Overlay */}
      {isOpen && (
        <div
          id="drawer-overlay"
          onClick={onClose}
          className="fixed inset-0 bg-[#161616]/50 z-[55] transition-opacity duration-300"
        />
      )}

      {/* Drawer Panel */}
      <aside
        id="side-drawer"
        className={`fixed inset-y-0 left-0 z-[60] flex flex-col p-4 bg-white h-full w-[280px] border-r border-[#e0e0e0] shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e0e0e0]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6f6f6f]">
              Pemerintah Desa
            </span>
            <h2 className="text-xl font-bold text-[#0f62fe] font-headline">Portal Desa Rau</h2>
          </div>
          <button
            id="btn-close-drawer"
            aria-label="Tutup Menu"
            onClick={onClose}
            className="p-2 hover:bg-[#f4f4f4] transition-colors text-[#161616] cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.tab;
            return (
              <button
                key={item.tab}
                id={`drawer-link-${item.tab}`}
                onClick={() => {
                  onSelectTab(item.tab);
                  onClose();
                }}
                className={`flex items-center gap-3 px-3 py-3 text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                    : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[22px] ${isActive ? 'text-[#0f62fe]' : 'text-[#6f6f6f]'}`}
                >
                  {item.icon}
                </span>
                <span className="font-body text-sm tracking-normal">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Quick Emergency / Village Status in Drawer */}
        <div className="p-3 bg-[#f4f4f4] border-t border-[#e0e0e0] text-xs text-[#525252] space-y-1">
          <div className="font-semibold text-[#161616] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#da1e28]">emergency</span>
            Panggilan Darurat
          </div>
          <p>Polsek: <strong>110</strong> | Puskesmas: <strong>119</strong></p>
          <div className="pt-2 text-[11px] text-[#6f6f6f]">
            Kec. Kedung, Kab. Jepara, Jawa Tengah
          </div>
        </div>
      </aside>
    </>
  );
};
