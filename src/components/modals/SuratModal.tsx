import React, { useState } from 'react';
import { LETTER_TYPES } from '../../data/villageData';
import { LetterRequest } from '../../types';

interface SuratModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitLetter: (data: Omit<LetterRequest, 'id' | 'createdAt' | 'status' | 'trackingNumber'>) => LetterRequest;
  letterRequests: LetterRequest[];
}

export const SuratModal: React.FC<SuratModalProps> = ({
  isOpen,
  onClose,
  onSubmitLetter,
  letterRequests
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'riwayat'>('form');
  const [formData, setFormData] = useState({
    nik: '',
    namaLengkap: '',
    jenisSurat: LETTER_TYPES[0].name,
    keperluan: '',
    dusun: 'Dusun Krajan',
    rt: '01',
    rw: '01',
    noHp: ''
  });
  const [successReceipt, setSuccessReceipt] = useState<LetterRequest | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nik || !formData.namaLengkap || !formData.keperluan || !formData.noHp) {
      alert('Mohon isi seluruh data yang diperlukan.');
      return;
    }
    const newRequest = onSubmitLetter(formData);
    setSuccessReceipt(newRequest);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-2xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 bg-[#0f62fe] text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl">assignment</span>
            <div>
              <h2 className="text-xl font-bold font-headline">Layanan Surat Menyurat</h2>
              <p className="text-xs text-[#d0e2ff]">
                Pemerintah Desa Rau, Kec. Kedung, Kab. Jepara
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#0043ce] text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <button
            onClick={() => { setActiveTab('form'); setSuccessReceipt(null); }}
            className={`flex-1 py-3 text-sm font-semibold cursor-pointer text-center transition-colors ${
              activeTab === 'form'
                ? 'bg-white text-[#0f62fe] border-b-2 border-[#0f62fe]'
                : 'text-[#525252] hover:bg-[#e0e0e0]'
            }`}
          >
            Buat Pengajuan Baru
          </button>
          <button
            onClick={() => setActiveTab('riwayat')}
            className={`flex-1 py-3 text-sm font-semibold cursor-pointer text-center transition-colors ${
              activeTab === 'riwayat'
                ? 'bg-white text-[#0f62fe] border-b-2 border-[#0f62fe]'
                : 'text-[#525252] hover:bg-[#e0e0e0]'
            }`}
          >
            Daftar / Lacak Surat ({letterRequests.length})
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {activeTab === 'form' ? (
            successReceipt ? (
              /* Success Receipt View */
              <div className="space-y-4">
                <div className="p-4 bg-[#a7f0ba]/30 border border-[#198038] text-[#044317] flex items-start gap-3">
                  <span className="material-symbols-outlined text-2xl text-[#198038]">check_circle</span>
                  <div>
                    <h4 className="font-bold text-sm">Pengajuan Berhasil Terkirim!</h4>
                    <p className="text-xs mt-1">
                      Simpan nomor resi berikut untuk memantau status pengurusan surat Anda di balai desa.
                    </p>
                  </div>
                </div>

                <div className="p-5 bg-[#f4f4f4] border border-[#e0e0e0] space-y-3 font-mono text-xs">
                  <div className="text-center pb-3 border-b border-[#e0e0e0]">
                    <div className="font-bold text-sm text-[#161616]">TANDA BUKTI PENGAJUAN SURAT</div>
                    <div className="text-[#6f6f6f]">PEMERINTAH DESA RAU - KAB. JEPARA</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-[#6f6f6f]">Nomor Tiket Resi:</div>
                    <div className="font-bold text-[#0f62fe] text-sm">{successReceipt.trackingNumber}</div>

                    <div className="text-[#6f6f6f]">Jenis Surat:</div>
                    <div className="font-bold text-[#161616]">{successReceipt.jenisSurat}</div>

                    <div className="text-[#6f6f6f]">Nama Pemohon:</div>
                    <div className="text-[#161616]">{successReceipt.namaLengkap}</div>

                    <div className="text-[#6f6f6f]">NIK:</div>
                    <div className="text-[#161616]">{successReceipt.nik}</div>

                    <div className="text-[#6f6f6f]">Domisili:</div>
                    <div className="text-[#161616]">{successReceipt.dusun}, RT {successReceipt.rt} / RW {successReceipt.rw}</div>

                    <div className="text-[#6f6f6f]">Status Awal:</div>
                    <div className="text-[#198038] font-bold">{successReceipt.status}</div>

                    <div className="text-[#6f6f6f]">Tanggal Pengajuan:</div>
                    <div className="text-[#161616]">{successReceipt.createdAt}</div>
                  </div>

                  <div className="pt-3 border-t border-[#e0e0e0] text-[11px] text-[#6f6f6f] text-center font-sans">
                    Estimasi proses: 1x24 jam kerja. Bawa KTP &amp; KK asli saat pengambilan fisik di Balai Desa Rau.
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 bg-[#f4f4f4] border border-[#8d8d8d] text-[#161616] text-xs font-semibold hover:bg-[#e0e0e0] flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">print</span>
                    Cetak Resi
                  </button>
                  <button
                    onClick={() => { setSuccessReceipt(null); setActiveTab('riwayat'); }}
                    className="px-5 py-2 bg-[#0f62fe] text-white text-xs font-semibold hover:bg-[#0043ce] cursor-pointer"
                  >
                    Lihat Daftar Permohonan
                  </button>
                </div>
              </div>
            ) : (
              /* Request Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]">
                    Jenis Surat yang Dibutuhkan *
                  </label>
                  <select
                    value={formData.jenisSurat}
                    onChange={(e) => setFormData({ ...formData, jenisSurat: e.target.value })}
                    className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                  >
                    {LETTER_TYPES.map((lt) => (
                      <option key={lt.id} value={lt.name}>
                        {lt.name} (Syarat: {lt.reqs})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">
                      Nomor Induk Kependudukan (NIK) *
                    </label>
                    <input
                      type="text"
                      maxLength={16}
                      required
                      value={formData.nik}
                      onChange={(e) => setFormData({ ...formData, nik: e.target.value.replace(/\D/g, '') })}
                      placeholder="16 Digit NIK KTP"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">
                      Nama Lengkap (Sesuai KTP) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.namaLengkap}
                      onChange={(e) => setFormData({ ...formData, namaLengkap: e.target.value })}
                      placeholder="Nama lengkap pemohon"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">Dusun *</label>
                    <select
                      value={formData.dusun}
                      onChange={(e) => setFormData({ ...formData, dusun: e.target.value })}
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                    >
                      <option value="Dusun Krajan">Dusun Krajan</option>
                      <option value="Dusun Sidomulyo">Dusun Sidomulyo</option>
                      <option value="Dusun Rejo">Dusun Rejo</option>
                      <option value="Dusun Pesisir">Dusun Pesisir</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">RT / RW *</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="RT"
                        value={formData.rt}
                        onChange={(e) => setFormData({ ...formData, rt: e.target.value })}
                        className="h-10 w-1/2 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none text-center"
                      />
                      <input
                        type="text"
                        placeholder="RW"
                        value={formData.rw}
                        onChange={(e) => setFormData({ ...formData, rw: e.target.value })}
                        className="h-10 w-1/2 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none text-center"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#161616]">No. WhatsApp / HP *</label>
                    <input
                      type="tel"
                      required
                      value={formData.noHp}
                      onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                      placeholder="08123456789"
                      className="h-10 px-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]">
                    Keperluan / Keterangan Tambahan *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.keperluan}
                    onChange={(e) => setFormData({ ...formData, keperluan: e.target.value })}
                    placeholder="Contoh: Pengajuan pinjaman KUR Bank, syarat beasiswa kuliah, atau pendaftaran sekolah..."
                    className="p-3 bg-[#f4f4f4] border-b border-[#8d8d8d] text-sm text-[#161616] focus:border-[#0f62fe] outline-none resize-none"
                  />
                </div>

                <div className="p-3 bg-[#f4f4f4] border-l-2 border-[#0f62fe] text-xs text-[#525252]">
                  Layanan pengajuan surat ini <strong>GRATIS (Rp 0,-)</strong> tanpa dipungut biaya apapun sesuai regulasi Desa Rau.
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
                    className="px-6 py-2.5 bg-[#0f62fe] text-white text-sm font-semibold hover:bg-[#0043ce] transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span>Kirim Pengajuan</span>
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            )
          ) : (
            /* History & Tracking Tab */
            <div className="space-y-4">
              <p className="text-xs text-[#525252]">
                Daftar permohonan surat kependudukan online yang tercatat di sistem Desa Rau.
              </p>

              {letterRequests.length > 0 ? (
                <div className="divide-y divide-[#e0e0e0] border border-[#e0e0e0]">
                  {letterRequests.map((req) => (
                    <div key={req.id} className="p-4 bg-[#f4f4f4] hover:bg-white transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                        <div>
                          <div className="font-bold text-sm text-[#161616]">{req.jenisSurat}</div>
                          <div className="text-xs text-[#525252] mt-0.5">
                            Pemohon: <strong>{req.namaLengkap}</strong> ({req.dusun})
                          </div>
                          <div className="text-[11px] text-[#6f6f6f] mt-1 font-mono">
                            Resi: <span className="text-[#0f62fe] font-bold">{req.trackingNumber}</span> | Diajukan: {req.createdAt}
                          </div>
                        </div>
                        <span
                          className={`self-start sm:self-center px-2.5 py-1 text-xs font-semibold ${
                            req.status === 'Selesai' || req.status === 'Siap Diambil'
                              ? 'bg-[#a7f0ba] text-[#044317]'
                              : 'bg-[#d0e2ff] text-[#001d6c]'
                          }`}
                        >
                          {req.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 text-[#6f6f6f] bg-[#f4f4f4] border border-[#e0e0e0]">
                  <span className="material-symbols-outlined text-4xl mb-2">description</span>
                  <p className="text-sm font-medium">Belum ada riwayat permohonan surat.</p>
                  <button
                    onClick={() => setActiveTab('form')}
                    className="mt-3 text-xs text-[#0f62fe] font-semibold underline"
                  >
                    Ajukan Surat Sekarang
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
