import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string, nik: string) => void;
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLogin,
  isLoggedIn,
  userName,
  onLogout
}) => {
  const [name, setName] = useState('');
  const [nik, setNik] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !nik.trim()) {
      alert('Mohon masukkan nama dan NIK Anda.');
      return;
    }
    onLogin(name.trim(), nik.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-md border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0f62fe]">account_circle</span>
            <h3 className="text-base font-bold text-[#161616] font-headline">
              {isLoggedIn ? 'Profil Warga' : 'Masuk Portal Desa Rau'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e0e0e0] text-[#161616] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {isLoggedIn ? (
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#d0e2ff] text-[#0f62fe] font-bold text-2xl flex items-center justify-center mx-auto border-2 border-[#0f62fe]">
                {userName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-lg text-[#161616]">{userName}</h4>
                <p className="text-xs text-[#198038] font-semibold mt-0.5">● Terverifikasi Sebagai Warga</p>
                <p className="text-xs text-[#6f6f6f] mt-1">Desa Rau, Kecamatan Kedung, Jepara</p>
              </div>

              <div className="pt-4 border-t border-[#e0e0e0] flex gap-2">
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-[#f4f4f4] text-xs font-semibold text-[#161616] hover:bg-[#e0e0e0]"
                >
                  Tutup
                </button>
                <button
                  onClick={() => { onLogout(); onClose(); }}
                  className="flex-1 py-2.5 bg-[#da1e28] text-xs font-semibold text-white hover:bg-[#750e13]"
                >
                  Keluar Akun
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#525252]">
                Masuk untuk memudahkan pengisian formulir surat kependudukan dan memantau laporan aspirasi warga.
              </p>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#161616]">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Muhammad Rizky"
                  className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#161616]">NIK (Nomor Induk Kependudukan)</label>
                <input
                  type="text"
                  maxLength={16}
                  required
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                  placeholder="16 Digit NIK KTP"
                  className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                />
              </div>

              <div className="p-3 bg-[#f4f4f4] text-[11px] text-[#6f6f6f]">
                Simulasi login warga lokal tanpa password. Data disimpan secara aman di browser lokal Anda.
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-white border border-[#8d8d8d] text-xs font-semibold text-[#161616] hover:bg-[#f4f4f4]"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0f62fe] text-white text-xs font-semibold hover:bg-[#0043ce]"
                >
                  Masuk Sekarang
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
