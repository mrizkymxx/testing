import React, { useState } from 'react';
import { CitizenReport } from '../../types';

interface LaporModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReport: (data: Omit<CitizenReport, 'id' | 'createdAt' | 'status' | 'trackingNumber'>) => CitizenReport;
  reports: CitizenReport[];
}

export const LaporModal: React.FC<LaporModalProps> = ({
  isOpen,
  onClose,
  onSubmitReport,
  reports
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'feed'>('form');
  const [formData, setFormData] = useState({
    title: '',
    category: 'Infrastruktur' as CitizenReport['category'],
    location: '',
    description: '',
    fullName: '',
    phone: '',
    photoUrl: ''
  });
  const [successReport, setSuccessReport] = useState<CitizenReport | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.description || !formData.fullName) {
      alert('Mohon lengkapi judul, lokasi, deskripsi, dan nama Anda.');
      return;
    }
    const newReport = onSubmitReport(formData);
    setSuccessReport(newReport);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-[#da1e28] text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">campaign</span>
            <div>
              <h2 className="text-xl font-bold font-headline">Lapor Warga Desa Rau</h2>
              <p className="text-xs text-[#fff1f1]">
                Saluran Aspirasi, Pengaduan Infrastruktur, dan Fasilitas Umum
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-black/20 text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <button
            onClick={() => { setActiveTab('form'); setSuccessReport(null); }}
            className={`flex-1 py-3 text-sm font-semibold cursor-pointer text-center transition-colors ${
              activeTab === 'form'
                ? 'bg-white text-[#da1e28] border-b-2 border-[#da1e28]'
                : 'text-[#525252] hover:bg-[#e0e0e0]'
            }`}
          >
            Buat Laporan Baru
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex-1 py-3 text-sm font-semibold cursor-pointer text-center transition-colors ${
              activeTab === 'feed'
                ? 'bg-white text-[#da1e28] border-b-2 border-[#da1e28]'
                : 'text-[#525252] hover:bg-[#e0e0e0]'
            }`}
          >
            Laporan Warga ({reports.length})
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'form' ? (
            successReport ? (
              <div className="space-y-4">
                <div className="p-4 bg-[#a7f0ba]/30 border border-[#198038] text-[#044317] flex items-start gap-3">
                  <span className="material-symbols-outlined text-2xl text-[#198038]">verified</span>
                  <div>
                    <h4 className="font-bold text-sm">Laporan Berhasil Diteruskan ke Perangkat Desa!</h4>
                    <p className="text-xs mt-1">
                      Nomor tiket laporan Anda telah teregistrasi. Tim respons cepat Desa Rau akan melakukan verifikasi lapangan.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] space-y-2 text-xs">
                  <div className="flex justify-between border-b border-[#e0e0e0] pb-2">
                    <span className="text-[#6f6f6f]">Nomor Tiket:</span>
                    <strong className="text-[#0f62fe] font-mono text-sm">{successReport.trackingNumber}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6f6f6f]">Judul Laporan:</span>
                    <strong className="text-[#161616]">{successReport.title}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6f6f6f]">Kategori:</span>
                    <span className="font-semibold text-[#da1e28]">{successReport.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6f6f6f]">Lokasi Kejadian:</span>
                    <span className="text-[#161616]">{successReport.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6f6f6f]">Status:</span>
                    <span className="bg-[#d0e2ff] text-[#001d6c] px-2 py-0.5 font-bold">
                      {successReport.status}
                    </span>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    onClick={() => { setSuccessReport(null); setActiveTab('feed'); }}
                    className="px-5 py-2.5 bg-[#0f62fe] text-white text-xs font-semibold hover:bg-[#0043ce] cursor-pointer"
                  >
                    Pantau Status di Laporan Warga
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">Judul Laporan / Pengaduan *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Contoh: Lampu Penerangan Jalan Rusak di RT 03"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">Kategori *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none"
                    >
                      <option value="Infrastruktur">Infrastruktur Jalan/Jembatan</option>
                      <option value="Kebersihan">Kebersihan &amp; Sampah</option>
                      <option value="Keamanan">Keamanan &amp; Ketertiban</option>
                      <option value="Pelayanan">Pelayanan Publik Desa</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]">Lokasi Spesifik di Desa Rau *</label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Contoh: Depan Mushola Al-Huda, Dusun Krajan RW 02"
                    className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]">Rincian Deskripsi Pengaduan *</label>
                  <textarea
                    required
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Jelaskan secara singkat permasalahan yang terjadi agar dapat segera ditangani..."
                    className="p-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">Nama Pelapor *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Nama lengkap Anda"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">No. WhatsApp / HP</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="08123456789"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#da1e28] outline-none"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#fff1f1] border-l-2 border-[#da1e28] text-xs text-[#750e13]">
                  Identitas pelapor dijamin kerahasiaannya oleh Pemerintah Desa Rau.
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 bg-white border border-[#8d8d8d] text-sm font-semibold text-[#161616] hover:bg-[#f4f4f4] cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#da1e28] text-white text-sm font-semibold hover:bg-[#750e13] transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Kirim Laporan</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            )
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-[#525252]">
                Laporan warga yang masuk secara transparan ditindaklanjuti oleh Pemerintah Desa Rau.
              </p>

              {reports.length > 0 ? (
                <div className="space-y-3">
                  {reports.map((item) => (
                    <div key={item.id} className="p-4 bg-[#f4f4f4] border border-[#e0e0e0]">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <div>
                          <span className="text-[11px] font-semibold text-[#da1e28] uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h4 className="font-bold text-sm text-[#161616] mt-0.5">{item.title}</h4>
                        </div>
                        <span
                          className={`text-xs px-2.5 py-0.5 font-semibold ${
                            item.status === 'Selesai'
                              ? 'bg-[#a7f0ba] text-[#044317]'
                              : item.status === 'Diproses'
                              ? 'bg-[#d0e2ff] text-[#001d6c]'
                              : 'bg-[#e0e0e0] text-[#525252]'
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#525252] leading-relaxed mb-3">{item.description}</p>
                      <div className="flex flex-wrap items-center justify-between text-[11px] text-[#6f6f6f] pt-2 border-t border-[#e0e0e0]">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          {item.location}
                        </span>
                        <span className="font-mono text-[#0f62fe]">{item.trackingNumber}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-[#6f6f6f] bg-[#f4f4f4] border border-[#e0e0e0]">
                  <span className="material-symbols-outlined text-4xl mb-2">campaign</span>
                  <p className="text-sm font-medium">Belum ada pengaduan aktif.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
