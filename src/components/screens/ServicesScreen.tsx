import React, { useState } from 'react';
import { SERVICE_CATEGORIES, LETTER_TYPES } from '../../data/villageData';

interface ServicesScreenProps {
  onOpenSuratModal: () => void;
  onOpenLaporModal: () => void;
  onSelectCategory: (category: typeof SERVICE_CATEGORIES[0]) => void;
  onTrackDocument: (code: string) => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({
  onOpenSuratModal,
  onOpenLaporModal,
  onSelectCategory,
  onTrackDocument
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [trackingInput, setTrackingInput] = useState('');

  const filteredLetters = LETTER_TYPES.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.reqs.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingInput.trim()) {
      onTrackDocument(trackingInput.trim());
    }
  };

  return (
    <div className="w-full flex-1 flex flex-col bg-white">
      {/* Header Section */}
      <section className="p-6 md:p-8 border-b border-[#e0e0e0] bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight text-[#161616] font-headline mb-2">
            Layanan Publik
          </h2>
          <p className="text-sm text-[#525252] font-body mb-6">
            Akses layanan administratif dan informasi esensial untuk warga Desa Rau.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]">
              search
            </span>
            <input
              id="input-search-services"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan (contoh: Surat Pengantar, BPJS, SKU...)"
              className="w-full h-[40px] pl-10 pr-4 bg-[#f4f4f4] border-0 border-b border-[#8d8d8d] text-sm text-[#161616] focus:ring-0 focus:border-[#0f62fe] focus:border-b-2 transition-all placeholder:text-[#6f6f6f] outline-none rounded-none"
            />
          </div>
        </div>
      </section>

      {/* Content Canvas */}
      <section className="p-6 md:p-8 flex-1">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Quick Tracking Widget */}
          <div className="bg-[#f4f4f4] p-4 border-l-4 border-[#0f62fe] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#161616] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#0f62fe] text-base">saved_search</span>
                Lacak Status Surat / Laporan Anda
              </h4>
              <p className="text-xs text-[#525252] mt-0.5">
                Masukkan nomor resi (contoh: <code>SRT-RAU-2024-001</code> atau <code>LPR-RAU-001</code>)
              </p>
            </div>
            <form onSubmit={handleTrackSubmit} className="flex w-full sm:w-auto gap-2">
              <input
                type="text"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder="Nomor Resi / Tiket"
                className="h-9 px-3 bg-white border border-[#8d8d8d] text-xs uppercase text-[#161616] focus:border-[#0f62fe] outline-none w-full sm:w-48"
              />
              <button
                type="submit"
                className="h-9 px-4 bg-[#0f62fe] hover:bg-[#0043ce] text-white text-xs font-semibold cursor-pointer shrink-0 transition-colors"
              >
                Cek Status
              </button>
            </form>
          </div>

          {/* Bento Grid Layout for High-Priority Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#161616] font-headline">
              Layanan Prioritas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Primary Action Card: Surat Menyurat */}
              <div
                id="card-priority-surat"
                onClick={onOpenSuratModal}
                className="md:col-span-2 bg-[#0f62fe] text-white p-6 relative overflow-hidden group cursor-pointer hover:bg-[#0043ce] transition-colors"
              >
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-4">edit_document</span>
                  <h4 className="text-2xl font-semibold mb-2 font-headline">
                    Layanan Surat Menyurat
                  </h4>
                  <p className="text-sm opacity-90 max-w-md font-body leading-relaxed">
                    Ajukan permohonan surat pengantar, keterangan domisili, dan dokumen administratif lainnya secara online.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                    Mulai Pengajuan <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
                  <span className="material-symbols-outlined text-[160px]">edit_document</span>
                </div>
              </div>

              {/* Secondary Action Card: Lapor Warga */}
              <div
                id="card-priority-lapor"
                onClick={onOpenLaporModal}
                className="bg-[#f4f4f4] p-6 hover:bg-[#e0e0e0] transition-colors cursor-pointer flex flex-col justify-between group border border-transparent hover:border-[#8d8d8d]"
              >
                <div>
                  <div className="w-10 h-10 bg-[#fff1f1] text-[#da1e28] flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined">report</span>
                  </div>
                  <h4 className="text-xl font-medium mb-2 text-[#161616] font-headline">
                    Lapor Warga
                  </h4>
                  <p className="text-sm text-[#525252] font-body leading-relaxed">
                    Laporkan kejadian, infrastruktur rusak, atau masalah lingkungan.
                  </p>
                </div>
                <div className="mt-6 text-[#0f62fe] group-hover:underline flex items-center gap-1 text-sm font-medium">
                  Buat Laporan <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick List If Searching */}
          {searchQuery && (
            <div>
              <h4 className="text-sm font-semibold text-[#161616] mb-3">
                Hasil Pencarian Jenis Surat ({filteredLetters.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredLetters.map(letter => (
                  <div
                    key={letter.id}
                    onClick={onOpenSuratModal}
                    className="p-3 bg-[#f4f4f4] border border-[#e0e0e0] hover:border-[#0f62fe] cursor-pointer"
                  >
                    <div className="font-semibold text-sm text-[#161616]">{letter.name}</div>
                    <div className="text-xs text-[#6f6f6f] mt-1">Syarat: {letter.reqs}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categories List */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#161616] font-headline">
              Kategori Layanan
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICE_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  id={`cat-card-${cat.id}`}
                  onClick={() => onSelectCategory(cat)}
                  className="bg-[#f4f4f4] p-4 flex items-start gap-4 hover:bg-[#e0e0e0] transition-colors border border-transparent hover:border-[#8d8d8d] cursor-pointer"
                >
                  <span className={`material-symbols-outlined ${cat.color} text-2xl mt-0.5`}>
                    {cat.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-sm text-[#161616] mb-1">{cat.title}</h4>
                    <p className="text-xs text-[#525252]">{cat.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operating hours info note */}
          <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] flex items-center gap-3 text-xs text-[#525252]">
            <span className="material-symbols-outlined text-[#0f62fe]">info</span>
            <div>
              <strong>Jam Pelayanan Tatap Muka Kantor Balai Desa:</strong> Senin – Jumat pukul 08:00 – 15:30 WIB. Pengajuan online dapat dilakukan 24/7.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
