import React from 'react';
import { IMAGES, VILLAGE_INFO, VILLAGE_STAFF } from '../../data/villageData';

export const ProfileScreen: React.FC = () => {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[353px] min-h-[300px] flex flex-col justify-end p-6 md:p-12 text-white overflow-hidden">
        <img
          src={IMAGES.profileMountain}
          alt="Pemandangan Desa Rau"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616]/90 via-[#161616]/60 to-transparent z-10" />
        <div className="relative z-20 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-2 text-white">
            Profil Desa Rau
          </h1>
          <p className="text-base md:text-lg font-body text-[#f4f4f4] max-w-2xl opacity-90">
            Mengenal lebih dekat sejarah, visi, misi, dan struktur pemerintahan Desa Rau, Kabupaten Jepara.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-12 w-full">
        {/* Visi & Misi Section */}
        <section id="section-visi-misi">
          <h2 className="text-2xl font-semibold text-[#161616] font-headline mb-6 carbon-divider pb-2">
            Visi &amp; Misi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Visi Card */}
            <div className="carbon-card md:col-span-1 flex flex-col justify-center border-l-4 border-[#0f62fe] bg-[#f4f4f4]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0f62fe] text-3xl">visibility</span>
                <h3 className="text-xl font-medium font-headline text-[#161616]">Visi</h3>
              </div>
              <p className="text-[#525252] font-body text-sm leading-relaxed italic">
                "{VILLAGE_INFO.vision}"
              </p>
            </div>

            {/* Misi Card */}
            <div className="carbon-card md:col-span-2 bg-[#f4f4f4]">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#0f62fe] text-3xl">flag</span>
                <h3 className="text-xl font-medium font-headline text-[#161616]">Misi</h3>
              </div>
              <ul className="space-y-3 text-[#525252] font-body text-sm list-none">
                {VILLAGE_INFO.mission.map((misiItem, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#198038] text-lg shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{misiItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sejarah Desa Section */}
        <section id="section-sejarah-desa">
          <h2 className="text-2xl font-semibold text-[#161616] font-headline mb-6 carbon-divider pb-2">
            Sejarah Desa
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="prose prose-sm max-w-none font-body text-[#525252] leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                Sejarah Desa Rau berakar kuat pada kearifan lokal dan tradisi agraris masyarakat Jepara. Konon, nama "Rau" berasal dari kata serapan yang merujuk pada pertemuan aliran air yang menyuburkan lahan pertanian di sekitarnya. Sejak era kolonial hingga kemerdekaan, desa ini dikenal sebagai lumbung pangan lokal dan pusat kerajinan tangan skala rumah tangga.
              </p>
              <p>
                Perkembangan pemerintahan desa secara formal mulai tercatat pada pertengahan abad ke-20, di mana struktur kepemimpinan mulai beradaptasi dengan sistem pemerintahan nasional. Melalui semangat gotong royong, masyarakat Rau telah berhasil melalui berbagai dinamika sosial ekonomi, mempertahankan kelestarian lingkungan sekaligus perlahan mengadopsi modernisasi dalam pengelolaan administrasi desa.
              </p>
            </div>
            <div className="relative h-64 lg:h-full min-h-[250px] bg-[#f4f4f4] border border-[#e0e0e0] overflow-hidden">
              <img
                src={IMAGES.historyPhoto}
                alt="Arsip Sejarah Desa"
                className="w-full h-full object-cover grayscale opacity-90 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-0 left-0 bg-[#161616] text-white text-xs px-3 py-1 m-2 opacity-90">
                Ilustrasi Historis
              </div>
            </div>
          </div>
        </section>

        {/* Geografi & Demografi */}
        <section id="section-geografi-demografi">
          <h2 className="text-2xl font-semibold text-[#161616] font-headline mb-6 carbon-divider pb-2">
            Geografi &amp; Demografi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="carbon-card text-center bg-[#f4f4f4]">
              <span className="material-symbols-outlined text-4xl text-[#6f6f6f] mb-2">map</span>
              <div className="text-2xl font-bold text-[#161616] font-headline">{VILLAGE_INFO.stats.area}</div>
              <div className="text-xs text-[#525252] font-label uppercase tracking-wider mt-1">
                Luas Wilayah
              </div>
            </div>
            <div className="carbon-card text-center bg-[#f4f4f4]">
              <span className="material-symbols-outlined text-4xl text-[#6f6f6f] mb-2">groups</span>
              <div className="text-2xl font-bold text-[#161616] font-headline">{VILLAGE_INFO.stats.population}</div>
              <div className="text-xs text-[#525252] font-label uppercase tracking-wider mt-1">
                Total Penduduk
              </div>
            </div>
            <div className="carbon-card text-center bg-[#f4f4f4]">
              <span className="material-symbols-outlined text-4xl text-[#6f6f6f] mb-2">home_work</span>
              <div className="text-2xl font-bold text-[#161616] font-headline">{VILLAGE_INFO.stats.households}</div>
              <div className="text-xs text-[#525252] font-label uppercase tracking-wider mt-1">
                Kepala Keluarga
              </div>
            </div>
            <div className="carbon-card text-center bg-[#f4f4f4]">
              <span className="material-symbols-outlined text-4xl text-[#6f6f6f] mb-2">agriculture</span>
              <div className="text-2xl font-bold text-[#161616] font-headline">{VILLAGE_INFO.stats.agriculturePercent}</div>
              <div className="text-xs text-[#525252] font-label uppercase tracking-wider mt-1">
                Sektor Pertanian
              </div>
            </div>
          </div>
        </section>

        {/* Struktur Pemerintahan Desa */}
        <section id="section-struktur-pemerintahan">
          <h2 className="text-2xl font-semibold text-[#161616] font-headline mb-6 carbon-divider pb-2">
            Struktur Pemerintahan Desa
          </h2>

          {/* Kepala Desa Top Center */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#f4f4f4] mb-3 overflow-hidden border-2 border-[#0f62fe] shadow-sm">
              <img
                src={IMAGES.kepalaDesa}
                alt="Kepala Desa Bpk. Ahmad Susanto"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold font-headline text-[#161616]">Bpk. Ahmad Susanto</h3>
            <p className="text-sm text-[#0f62fe] font-medium font-body mt-1">Kepala Desa</p>
          </div>

          {/* Perangkat Desa Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {VILLAGE_STAFF.map((staff, idx) => (
              <div
                key={idx}
                className="carbon-card flex flex-col items-center text-center bg-[#f4f4f4] hover:bg-[#e0e0e0] transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-[#e0e0e0] mb-3 flex items-center justify-center overflow-hidden border border-[#8d8d8d]">
                  <span className="material-symbols-outlined text-[#6f6f6f] text-2xl">person</span>
                </div>
                <h4 className="text-sm font-semibold font-body text-[#161616]">{staff.name}</h4>
                <p className="text-xs text-[#525252] mt-1">{staff.role}</p>
                {staff.nip && (
                  <span className="text-[10px] text-[#8d8d8d] mt-1 font-mono">NIP: {staff.nip}</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
