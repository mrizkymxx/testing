import React, { useState } from 'react';
import { VILLAGE_INFO, EMERGENCY_CONTACTS } from '../../data/villageData';
import { ContactMessage } from '../../types';

interface ContactScreenProps {
  onSendMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt'>) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onSendMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      alert('Mohon lengkapi Nama, Kontak, dan Isi Pesan.');
      return;
    }
    onSendMessage(formData);
    setIsSubmitted(true);
    setFormData({ name: '', contact: '', subject: '', message: '' });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:px-8 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#161616] font-headline mb-2">
          Hubungi Kami
        </h1>
        <p className="text-[#6f6f6f] text-sm md:text-base max-w-2xl font-body">
          Pemerintah Desa Rau selalu siap melayani dan mendengarkan aspirasi warga. Silakan gunakan informasi di bawah ini untuk menghubungi kami.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Col: Contact Info Card */}
        <div className="md:col-span-4 bg-[#f4f4f4] p-6 flex flex-col gap-6 border border-[#e0e0e0]">
          <h2 className="text-xl font-semibold text-[#161616] border-b border-[#e0e0e0] pb-2 font-headline">
            Informasi Kontak
          </h2>

          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#0f62fe] text-2xl mt-1 shrink-0">
              location_on
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#161616]">Alamat Kantor Desa</h3>
              <p className="text-sm text-[#525252] mt-1 leading-relaxed font-body">
                {VILLAGE_INFO.address}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#0f62fe] text-2xl mt-1 shrink-0">
              call
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#161616]">Telepon</h3>
              <p className="text-sm text-[#525252] mt-1 font-body">{VILLAGE_INFO.phone}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#0f62fe] text-2xl mt-1 shrink-0">
              mail
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#161616]">Email</h3>
              <p className="text-sm text-[#525252] mt-1 font-body">{VILLAGE_INFO.email}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#e0e0e0]">
            <h3 className="text-sm font-semibold text-[#161616] mb-3">Media Sosial Resmi</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Desa Rau"
                className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center hover:bg-[#0043ce] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">public</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter Desa Rau"
                className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center hover:bg-[#0043ce] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">tag</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Desa Rau"
                className="w-10 h-10 bg-[#0f62fe] text-white flex items-center justify-center hover:bg-[#0043ce] transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Col: Emergency Numbers & Contact Form */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {/* Emergency Numbers */}
          <div className="bg-[#fff1f1] p-6 border-l-4 border-[#da1e28] border border-[#e0e0e0]">
            <h2 className="text-lg font-semibold text-[#750e13] mb-4 flex items-center gap-2 font-headline">
              <span className="material-symbols-outlined text-[#da1e28]">emergency</span>
              Nomor Darurat
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {EMERGENCY_CONTACTS.map((item, idx) => (
                <a
                  key={idx}
                  href={`tel:${item.tel}`}
                  className="bg-white p-4 border border-[#e0e0e0] hover:border-[#da1e28] transition-colors block text-left group"
                >
                  <div className="text-sm font-bold text-[#161616] group-hover:text-[#da1e28] transition-colors">
                    {item.name}
                  </div>
                  <div className="text-[#da1e28] font-semibold mt-1 text-sm">
                    {item.number}
                  </div>
                  <div className="text-[11px] text-[#6f6f6f] mt-1">{item.desc}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f4f4f4] p-6 border border-[#e0e0e0]">
            <h2 className="text-xl font-semibold text-[#161616] border-b border-[#e0e0e0] pb-2 mb-6 font-headline">
              Kirim Pesan
            </h2>

            {isSubmitted ? (
              <div className="p-4 bg-[#a7f0ba]/40 border border-[#198038] text-[#044317] space-y-2 mb-4">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined text-[#198038]">check_circle</span>
                  Pesan Berhasil Terkirim!
                </div>
                <p className="text-xs">
                  Terima kasih atas aspirasi/pertanyaan Anda. Petugas Sekretariat Desa Rau akan merespons pesan Anda melalui kontak yang tertera.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold underline text-[#044317] mt-2 cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]" htmlFor="input-name">
                    Nama Lengkap
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Masukkan nama Anda"
                    className="h-10 bg-white border-b border-[#8d8d8d] px-3 focus:outline-none focus:border-[#0f62fe] focus:border-b-2 text-sm text-[#161616]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#161616]" htmlFor="input-contact">
                    Email / No. HP
                  </label>
                  <input
                    id="input-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Masukkan kontak Anda"
                    className="h-10 bg-white border-b border-[#8d8d8d] px-3 focus:outline-none focus:border-[#0f62fe] focus:border-b-2 text-sm text-[#161616]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#161616]" htmlFor="input-subject">
                  Subjek
                </label>
                <input
                  id="input-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Topik pesan (misal: Pertanyaan Layanan, Usulan Kegiatan)"
                  className="h-10 bg-white border-b border-[#8d8d8d] px-3 focus:outline-none focus:border-[#0f62fe] focus:border-b-2 text-sm text-[#161616]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-[#161616]" htmlFor="input-message">
                  Pesan
                </label>
                <textarea
                  id="input-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesan Anda di sini..."
                  className="bg-white border-b border-[#8d8d8d] p-3 focus:outline-none focus:border-[#0f62fe] focus:border-b-2 text-sm text-[#161616] resize-y"
                />
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  id="btn-submit-contact-message"
                  type="submit"
                  className="bg-[#0f62fe] text-white h-12 px-6 font-semibold text-sm hover:bg-[#0043ce] transition-colors flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>Kirim Pesan</span>
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8 bg-[#f4f4f4] p-4 md:p-6 border border-[#e0e0e0]">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#161616] font-headline">
              Lokasi Kantor Balai Desa Rau
            </h2>
            <p className="text-xs text-[#525252]">Kecamatan Kedung, Kabupaten Jepara, Jawa Tengah</p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Desa+Rau+Kedung+Jepara"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-[#0f62fe] hover:underline flex items-center gap-1"
          >
            Buka di Google Maps <span className="material-symbols-outlined text-xs">open_in_new</span>
          </a>
        </div>

        {/* Interactive Map Canvas Container */}
        <div className="w-full h-80 bg-white relative border border-[#e0e0e0] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#d0e2ff] flex items-center justify-center text-[#0f62fe] mb-3">
            <span className="material-symbols-outlined text-3xl">location_on</span>
          </div>
          <h3 className="font-bold text-base text-[#161616]">Kantor Pemerintah Desa Rau</h3>
          <p className="text-xs text-[#525252] max-w-md mt-1">
            Jl. Balai Desa No. 1, Desa Rau, Kec. Kedung, Kab. Jepara (Kode Pos: 59463)
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="text-[11px] px-2.5 py-1 bg-[#f4f4f4] border border-[#e0e0e0] text-[#525252]">
              Koordinat: -6.6452°, 110.6821°
            </span>
            <span className="text-[11px] px-2.5 py-1 bg-[#a7f0ba]/30 border border-[#198038] text-[#044317]">
              Status Kantor: Aktif Melayani
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
