import React from 'react';
import { SERVICE_CATEGORIES } from '../../data/villageData';

interface ServiceCategoryModalProps {
  category: typeof SERVICE_CATEGORIES[0] | null;
  onClose: () => void;
  onOpenSurat: () => void;
  onOpenLapor: () => void;
}

export const ServiceCategoryModal: React.FC<ServiceCategoryModalProps> = ({
  category,
  onClose,
  onOpenSurat,
  onOpenLapor
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <div className="flex items-center gap-3">
            <span className={`material-symbols-outlined ${category.color} text-3xl`}>
              {category.icon}
            </span>
            <div>
              <h2 className="text-xl font-bold font-headline text-[#161616]">
                Layanan {category.title}
              </h2>
              <p className="text-xs text-[#6f6f6f]">{category.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e0e0e0] text-[#161616] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-[#525252] leading-relaxed font-body">
            {category.description}
          </p>

          <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#161616]">
              Prosedur &amp; Persyaratan
            </h4>
            <ul className="text-xs text-[#525252] space-y-2 list-disc list-inside">
              <li>Membawa e-KTP dan Kartu Keluarga (KK) asli domisili Desa Rau.</li>
              <li>Surat pengantar RT/RW setempat (jika diperlukan untuk verifikasi data).</li>
              <li>Pelayanan di loket Balai Desa Rau pada jam kerja: Senin - Jumat 08:00 - 15:30 WIB.</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => { onClose(); onOpenSurat(); }}
              className="flex-1 py-3 px-4 bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold text-center transition-colors cursor-pointer"
            >
              Ajukan Surat Terkait
            </button>
            <button
              onClick={() => { onClose(); onOpenLapor(); }}
              className="flex-1 py-3 px-4 bg-[#f4f4f4] hover:bg-[#e0e0e0] border border-[#8d8d8d] text-[#161616] text-xs font-semibold text-center transition-colors cursor-pointer"
            >
              Buat Laporan / Usulan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
