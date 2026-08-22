export type ActiveTab = 'beranda' | 'profil' | 'layanan' | 'berita' | 'kontak';

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Pembangunan' | 'Kegiatan' | 'Pengumuman';
  date: string;
  summary: string;
  content: string;
  image: string;
  author?: string;
  featured?: boolean;
}

export interface VillageStaff {
  name: string;
  role: string;
  image?: string;
  nip?: string;
  phone?: string;
}

export interface VillagePotential {
  id: string;
  title: string;
  sector: string;
  icon: string;
  summary: string;
  description: string;
  image: string;
  productionCapacity?: string;
  locations?: string;
}

export interface LetterRequest {
  id: string;
  trackingNumber: string;
  nik: string;
  namaLengkap: string;
  jenisSurat: string;
  keperluan: string;
  dusun: string;
  rt: string;
  rw: string;
  noHp: string;
  status: 'Menunggu Verifikasi' | 'Sedang Diproses' | 'Siap Diambil' | 'Selesai';
  createdAt: string;
}

export interface CitizenReport {
  id: string;
  trackingNumber: string;
  fullName: string;
  phone: string;
  category: 'Infrastruktur' | 'Kebersihan' | 'Keamanan' | 'Pelayanan' | 'Lainnya';
  title: string;
  description: string;
  location: string;
  status: 'Diterima' | 'Diproses' | 'Selesai';
  createdAt: string;
  photoUrl?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  contact: string;
  subject: string;
  message: string;
  createdAt: string;
}
