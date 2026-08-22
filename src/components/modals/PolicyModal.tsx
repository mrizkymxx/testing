import React from 'react';
import { VILLAGE_INFO } from '../../data/villageData';

interface PolicyModalProps {
  policyType: string | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ policyType, onClose }) => {
  if (!policyType) return null;

  const titles: Record<string, string> = {
    privacy: 'Kebijakan Privasi Portal Desa Rau',
    terms: 'Syarat & Ketentuan Layanan',
    transparency: 'Transparansi & Peta Situs Desa Rau'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <h3 className="text-base font-bold text-[#161616] font-headline">
            {titles[policyType] || 'Informasi Publik'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e0e0e0] text-[#161616] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#525252] leading-relaxed">
          {policyType === 'privacy' && (
            <>
              <p>
                Pemerintah Desa Rau berkomitmen menjaga privasi dan kerahasiaan data kependudukan warga yang disampaikan melalui portal layanan digital ini.
              </p>
              <h4 className="font-bold text-[#161616] text-sm">1. Pengumpulan Data</h4>
              <p>
                Data seperti NIK, Nama Lengkap, Alamat Dusun, dan Nomor Telepon hanya digunakan untuk keperluan verifikasi administrasi kependudukan dan penanganan pengaduan resmi.
              </p>
              <h4 className="font-bold text-[#161616] text-sm">2. Keamanan Informasi</h4>
              <p>
                Seluruh data dilindungi sesuai dengan Undang-Undang Perlindungan Data Pribadi dan standar keamanan sistem pemerintahan berbasis elektronik (SPBE).
              </p>
            </>
          )}

          {policyType === 'terms' && (
            <>
              <p>
                Dengan mengakses Portal Resmi Desa Rau, Anda menyetujui seluruh ketentuan layanan pemerintah desa:
              </p>
              <ul className="list-disc list-inside space-y-1.5">
                <li>Layanan surat pengantar dan administrasi diberikan secara cuma-cuma (Gratis Rp 0,-).</li>
                <li>Pengguna wajib memberikan informasi data kependudukan yang jujur dan dapat dipertanggungjawabkan.</li>
                <li>Laporan warga tidak boleh mengandung unsur ujaran kebencian, SARA, atau fitnah.</li>
              </ul>
            </>
          )}

          {policyType === 'transparency' && (
            <>
              <p>
                Pemerintah Desa Rau mengedepankan prinsip transparansi anggaran, program pembangunan, dan akuntabilitas tata kelola desa.
              </p>
              <div className="p-3 bg-[#f4f4f4] border border-[#e0e0e0] space-y-2">
                <div className="font-bold text-[#161616]">Struktur Menu Portal:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>• Beranda (Hero &amp; Potensi)</div>
                  <div>• Profil Desa (Visi Misi &amp; Sejarah)</div>
                  <div>• Layanan Publik (Surat &amp; Lapor)</div>
                  <div>• Berita &amp; Pengumuman Desa</div>
                  <div>• Hubungi Kami &amp; Kontak Darurat</div>
                  <div>• Pelacakan Resi Dokumen</div>
                </div>
              </div>
              <p className="text-[11px] text-[#6f6f6f]">
                Kantor Balai Desa: {VILLAGE_INFO.address}
              </p>
            </>
          )}

          <div className="flex justify-end pt-4 border-t border-[#e0e0e0]">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#0f62fe] text-white text-xs font-semibold hover:bg-[#0043ce]"
            >
              Saya Mengerti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
