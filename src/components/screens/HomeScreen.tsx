import React from 'react';
import { IMAGES, VILLAGE_POTENTIALS } from '../../data/villageData';
import { ActiveTab, VillagePotential } from '../../types';

interface HomeScreenProps {
  onNavigate: (tab: ActiveTab) => void;
  onOpenSuratModal: () => void;
  onOpenLaporModal: () => void;
  onSelectPotential: (potential: VillagePotential) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onOpenSuratModal,
  onOpenLaporModal,
  onSelectPotential
}) => {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center bg-[#f4f4f4] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroRiceField}
            alt="Persawahan Desa Rau"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/95 via-[#161616]/75 to-[#161616]/30 max-md:bg-gradient-to-t max-md:from-[#161616]/95 max-md:via-[#161616]/70 max-md:to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-semibold text-white mb-4 leading-tight">
              Portal Resmi Desa Rau
            </h1>
            <p className="text-base sm:text-lg text-[#f4f4f4] font-body font-light mb-8 max-w-lg leading-relaxed opacity-90">
              Mewujudkan tata kelola desa yang transparan, akuntabel, dan berbasis digital untuk pelayanan publik yang lebih baik.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                id="btn-hero-layanan-publik"
                onClick={() => onNavigate('layanan')}
                className="bg-[#0f62fe] text-white h-12 px-6 font-body text-sm font-semibold hover:bg-[#0043ce] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Layanan Publik</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                id="btn-hero-jelajahi-potensi"
                onClick={() => {
                  const el = document.getElementById('section-potensi-unggulan');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('profil');
                  }
                }}
                className="border border-white text-white h-12 px-6 font-body text-sm font-semibold hover:bg-white/10 transition-colors cursor-pointer active:scale-95"
              >
                Jelajahi Potensi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-[#e0e0e0] pb-4">
            <h2 className="text-2xl font-headline font-semibold text-[#161616] mb-2">
              Public Services
            </h2>
            <p className="text-sm text-[#525252] font-body">
              Akses cepat layanan pemerintahan desa untuk warga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service Card 1: Layanan Surat */}
            <div
              id="card-service-surat"
              onClick={onOpenSuratModal}
              className="bg-[#f4f4f4] group p-6 hover:bg-[#e0e0e0] transition-colors cursor-pointer flex flex-col h-full border border-transparent hover:border-[#8d8d8d]"
            >
              <div className="mb-4 text-[#0f62fe] group-hover:text-[#0043ce]">
                <span className="material-symbols-outlined text-[32px]">assignment</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-[#161616]">
                Layanan Surat
              </h3>
              <p className="text-sm text-[#525252] font-body mb-6 flex-grow leading-relaxed">
                Pengajuan administrasi kependudukan online secara cepat dan efisien.
              </p>
              <div className="flex items-center text-[#0f62fe] font-semibold text-sm group-hover:underline mt-auto">
                Mulai Pengajuan <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 2: Lapor Warga */}
            <div
              id="card-service-lapor"
              onClick={onOpenLaporModal}
              className="bg-[#f4f4f4] group p-6 hover:bg-[#e0e0e0] transition-colors cursor-pointer flex flex-col h-full border border-transparent hover:border-[#8d8d8d]"
            >
              <div className="mb-4 text-[#0f62fe] group-hover:text-[#0043ce]">
                <span className="material-symbols-outlined text-[32px]">campaign</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-[#161616]">
                Lapor Warga
              </h3>
              <p className="text-sm text-[#525252] font-body mb-6 flex-grow leading-relaxed">
                Wadah aspirasi dan pengaduan terkait infrastruktur dan fasilitas umum desa.
              </p>
              <div className="flex items-center text-[#0f62fe] font-semibold text-sm group-hover:underline mt-auto">
                Buat Laporan <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
              </div>
            </div>

            {/* Service Card 3: Berita Desa */}
            <div
              id="card-service-berita"
              onClick={() => onNavigate('berita')}
              className="bg-[#f4f4f4] group p-6 hover:bg-[#e0e0e0] transition-colors cursor-pointer flex flex-col h-full border border-transparent hover:border-[#8d8d8d]"
            >
              <div className="mb-4 text-[#0f62fe] group-hover:text-[#0043ce]">
                <span className="material-symbols-outlined text-[32px]">article</span>
              </div>
              <h3 className="text-lg font-headline font-semibold mb-2 text-[#161616]">
                Berita Desa
              </h3>
              <p className="text-sm text-[#525252] font-body mb-6 flex-grow leading-relaxed">
                Informasi terkini program kerja pemerintah desa dan kegiatan kemasyarakatan.
              </p>
              <div className="flex items-center text-[#0f62fe] font-semibold text-sm group-hover:underline mt-auto">
                Baca Berita <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Village Potential Section */}
      <section
        id="section-potensi-unggulan"
        className="py-16 bg-[#f4f4f4] border-t border-[#e0e0e0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 border-b border-[#e0e0e0] pb-4 flex justify-between items-end">
            <div>
              <h2 className="text-2xl font-headline font-semibold text-[#161616] mb-2">
                Potensi Unggulan
              </h2>
              <p className="text-sm text-[#525252] font-body">
                Menggerakkan ekonomi lokal melalui sumber daya alam.
              </p>
            </div>
            <button
              onClick={() => onSelectPotential(VILLAGE_POTENTIALS[0])}
              className="hidden md:flex items-center text-[#0f62fe] font-semibold text-sm hover:underline cursor-pointer"
            >
              Lihat Semua <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Potential 1: Produksi Garam */}
            <div
              id="card-potensi-garam"
              onClick={() => onSelectPotential(VILLAGE_POTENTIALS[0])}
              className="flex flex-col md:flex-row bg-white border border-[#e0e0e0] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-full md:w-2/5 relative h-48 md:h-auto min-h-[180px] bg-[#f4f4f4] overflow-hidden">
                <img
                  src={IMAGES.saltFarm}
                  alt="Tambak Garam Desa Rau"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-full md:w-3/5">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#198038] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">waves</span>
                  Sektor Pesisir
                </div>
                <h3 className="text-xl font-headline font-semibold mb-3 text-[#161616] group-hover:text-[#0f62fe] transition-colors">
                  Produksi Garam
                </h3>
                <p className="text-sm text-[#525252] font-body leading-relaxed">
                  Hamparan tambak garam di pesisir Kedung yang dikelola secara tradisional dan modern sebagai pilar utama ekonomi warga setempat.
                </p>
              </div>
            </div>

            {/* Potential 2: Pertanian Padi */}
            <div
              id="card-potensi-padi"
              onClick={() => onSelectPotential(VILLAGE_POTENTIALS[1])}
              className="flex flex-col md:flex-row bg-white border border-[#e0e0e0] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="w-full md:w-2/5 relative h-48 md:h-auto min-h-[180px] bg-[#f4f4f4] overflow-hidden">
                <img
                  src={IMAGES.heroRiceField}
                  alt="Pertanian Padi Desa Rau"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col justify-center w-full md:w-3/5">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-[#198038] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">eco</span>
                  Sektor Agrikultur
                </div>
                <h3 className="text-xl font-headline font-semibold mb-3 text-[#161616] group-hover:text-[#0f62fe] transition-colors">
                  Pertanian Padi
                </h3>
                <p className="text-sm text-[#525252] font-body leading-relaxed">
                  Sistem irigasi modern yang mendukung pertanian padi berkualitas tinggi untuk memastikan ketahanan pangan desa berkelanjutan.
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectPotential(VILLAGE_POTENTIALS[0])}
            className="mt-6 w-full md:hidden flex justify-center items-center text-[#0f62fe] font-semibold text-sm hover:bg-white py-3 border border-[#e0e0e0] bg-white cursor-pointer"
          >
            Lihat Semua Potensi
          </button>
        </div>
      </section>
    </div>
  );
};
