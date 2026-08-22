import React from 'react';
import { IMAGES } from '../data/villageData';

interface FooterProps {
  onOpenPolicy?: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="flex flex-col items-center gap-4 py-8 px-4 w-full bg-[#f4f4f4] border-t border-[#e0e0e0] mt-auto">
      <div className="flex items-center gap-2 mb-1">
        <img
          alt="Lambang Kabupaten Jepara"
          className="h-8 w-8 object-contain grayscale opacity-70"
          src={IMAGES.jeparaLogo}
        />
        <span className="text-sm font-semibold text-[#161616] font-headline">Desa Rau</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-[12px] font-body text-[#525252]">
        <button
          onClick={() => onOpenPolicy?.('privacy')}
          className="hover:text-[#0f62fe] transition-colors hover:underline cursor-pointer"
        >
          Kebijakan Privasi
        </button>
        <button
          onClick={() => onOpenPolicy?.('terms')}
          className="hover:text-[#0f62fe] transition-colors hover:underline cursor-pointer"
        >
          Syarat &amp; Ketentuan
        </button>
        <button
          onClick={() => onOpenPolicy?.('transparency')}
          className="hover:text-[#0f62fe] transition-colors hover:underline cursor-pointer"
        >
          Transparansi &amp; Peta Situs
        </button>
      </div>

      <p className="font-body text-[12px] leading-tight text-[#6f6f6f] mt-2 text-center">
        © 2024 Pemerintah Desa Rau, Kecamatan Kedung, Kabupaten Jepara.
      </p>
    </footer>
  );
};
