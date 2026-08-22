import React from 'react';
import { LetterRequest, CitizenReport } from '../../types';

interface TrackingResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  foundLetter: LetterRequest | null;
  foundReport: CitizenReport | null;
}

export const TrackingResultModal: React.FC<TrackingResultModalProps> = ({
  isOpen,
  onClose,
  query,
  foundLetter,
  foundReport
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-lg border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#0f62fe]">saved_search</span>
            <h3 className="text-base font-bold text-[#161616] font-headline">
              Hasil Pelacakan Berkas
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
          <div className="text-xs text-[#6f6f6f]">
            Kode Pelacakan: <strong className="font-mono text-[#0f62fe]">{query}</strong>
          </div>

          {foundLetter ? (
            <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] space-y-2.5 text-xs">
              <div className="font-bold text-sm text-[#161616] pb-2 border-b border-[#e0e0e0]">
                Surat: {foundLetter.jenisSurat}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-[#6f6f6f]">Pemohon:</span>
                <span className="font-semibold text-[#161616]">{foundLetter.namaLengkap}</span>

                <span className="text-[#6f6f6f]">Tanggal Diajukan:</span>
                <span className="text-[#161616]">{foundLetter.createdAt}</span>

                <span className="text-[#6f6f6f]">Wilayah:</span>
                <span className="text-[#161616]">{foundLetter.dusun}, RT {foundLetter.rt}/RW {foundLetter.rw}</span>

                <span className="text-[#6f6f6f]">Status Terkini:</span>
                <span className="bg-[#a7f0ba] text-[#044317] px-2 py-0.5 font-bold self-start">
                  {foundLetter.status}
                </span>
              </div>
            </div>
          ) : foundReport ? (
            <div className="p-4 bg-[#f4f4f4] border border-[#e0e0e0] space-y-2.5 text-xs">
              <div className="font-bold text-sm text-[#161616] pb-2 border-b border-[#e0e0e0]">
                Laporan: {foundReport.title}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-[#6f6f6f]">Kategori:</span>
                <span className="font-semibold text-[#da1e28]">{foundReport.category}</span>

                <span className="text-[#6f6f6f]">Lokasi:</span>
                <span className="text-[#161616]">{foundReport.location}</span>

                <span className="text-[#6f6f6f]">Pelapor:</span>
                <span className="text-[#161616]">{foundReport.fullName}</span>

                <span className="text-[#6f6f6f]">Status:</span>
                <span className="bg-[#d0e2ff] text-[#001d6c] px-2 py-0.5 font-bold self-start">
                  {foundReport.status}
                </span>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center bg-[#f4f4f4] border border-[#e0e0e0] space-y-2">
              <span className="material-symbols-outlined text-3xl text-[#da1e28]">error</span>
              <p className="text-sm font-semibold text-[#161616]">
                Nomor Tiket Tidak Ditemukan
              </p>
              <p className="text-xs text-[#525252]">
                Pastikan nomor resi sudah sesuai dengan tanda bukti pengajuan surat atau laporan Anda.
              </p>
            </div>
          )}

          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#0f62fe] text-white text-xs font-semibold hover:bg-[#0043ce]"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
