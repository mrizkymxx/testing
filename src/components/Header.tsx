import React from 'react';
import { IMAGES } from '../data/villageData';
import { ActiveTab } from '../types';

interface HeaderProps {
  onToggleDrawer: () => void;
  onOpenLogin: () => void;
  onNavigate: (tab: ActiveTab) => void;
  isLoggedIn?: boolean;
  userName?: string;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onToggleDrawer,
  onOpenLogin,
  onNavigate,
  isLoggedIn = false,
  userName = "Warga Desa",
  onLogout
}) => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 h-12 w-full bg-white border-b border-[#e0e0e0] shadow-xs">
      <div className="flex items-center gap-3">
        <button
          id="btn-header-menu"
          aria-label="Menu"
          onClick={onToggleDrawer}
          className="p-1 text-[#161616] hover:bg-[#f4f4f4] transition-colors cursor-pointer active:opacity-80 flex items-center justify-center"
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>

        <button
          id="btn-header-home-logo"
          onClick={() => onNavigate('beranda')}
          className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity text-left"
        >
          <img
            src={IMAGES.jeparaLogo}
            alt="Lambang Kabupaten Jepara"
            className="h-6 w-6 object-contain rounded-full border border-[#e0e0e0]"
          />
          <span className="font-headline font-semibold text-[20px] tracking-tight text-[#161616]">
            Desa Rau
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs text-[#525252] font-medium">
              Halo, <strong className="text-[#161616]">{userName}</strong>
            </span>
            <button
              id="btn-header-user-avatar"
              onClick={onOpenLogin}
              title="Profil Pengguna"
              className="w-8 h-8 rounded-full bg-[#d0e2ff] text-[#001d6c] flex items-center justify-center font-bold text-xs border border-[#0f62fe] hover:bg-[#a7f0ba] transition-colors cursor-pointer"
            >
              {userName.charAt(0).toUpperCase()}
            </button>
            {onLogout && (
              <button
                id="btn-header-logout"
                onClick={onLogout}
                className="text-xs text-[#da1e28] hover:underline hidden sm:block ml-1"
                title="Keluar"
              >
                Keluar
              </button>
            )}
          </div>
        ) : (
          <>
            <button
              id="btn-header-login-desktop"
              onClick={onOpenLogin}
              className="px-3 py-1.5 hover:bg-[#f4f4f4] text-[#0f62fe] font-semibold text-sm transition-colors cursor-pointer hidden md:block"
            >
              Masuk
            </button>
            <button
              id="btn-header-login-mobile"
              onClick={onOpenLogin}
              title="Masuk ke Layanan Warga"
              className="w-8 h-8 bg-[#f4f4f4] hover:bg-[#e0e0e0] flex items-center justify-center text-[#6f6f6f] hover:text-[#0f62fe] cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
          </>
        )}
      </div>
    </header>
  );
};
