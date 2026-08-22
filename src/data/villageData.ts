import { NewsArticle, VillageStaff, VillagePotential } from '../types';

export const IMAGES = {
  jeparaLogo: "https://lh3.googleusercontent.com/aida/AEtjO1W7-8C3sqgICW_0rPmSXPrOqh1Cpk623O62rTy25_wr0bBfN_2FYaSK87Ngm5QeeWprNnsSADRJYfVqw52KT1JbvSaktJ8_oP7S0qElOkAkIVz75kVZnPwCbyyAA1kzRlzjUtdeghUfbMeNB5JFCEaW8X_su8kmW_F-QcKI2rxn-RrWjkveNXI7hB0B7QNf6X3dJZqBj3UF_0wihShJtzSSDFGLBddYbt-UdiHVbU24mPGb2QbgJUsKAGw",
  heroRiceField: "https://lh3.googleusercontent.com/aida/AEtjO1XmONEqqz78GJStuZAgdUrv5Vz9x1BfV_W3O4flFfjK890UmZ4YdA2o9E7NGnVVDCeYR3VLNpM2onRqMSfY0lTQHU9RkOvFylJHnT2OP9YWPN_99axaT_bUfYugXxIOI2O8fUqtrc9ofxGA_Juk-g-XHAslMNlmaYifJLyO1p4VuWX6oJmmZukuGRyaUV9YLxYcobgkcyNdCdKwcOTy2RKduhaCw4L3uMyzMNrG4d_otbZJ5981NQU2ke8",
  saltFarm: "https://lh3.googleusercontent.com/aida/AEtjO1U3qg3Rbx0ymjwHt5d34xOc5Nwp1jitVQj5WwyULobm6Glg5-bXnqvy45eKdB48m_m-YAUdpz1DCFCm-LBbw7cbEc_Jyhi2q0HjmMhanQi-r3impqF1gQ1SHsBFEA47dtO21OtI2lgF9BB3AdbW0FHLB5htuw0OKhz_w9yGwyeWfELaS9bGVkX9Rwgm8IdKeW7MU1f4eHHVbsroQiVE-Z_BTg7rHTxp1jDCUx9KnJvkUk-z_STRtdhadJo",
  profileMountain: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY5Oz8DjxLiYddXWGmQWJherEah5gSWdJr2K2dTns8eilsvYCoHEICm5Telb4TRJdOGSuGKxtR3MREdska5S8PNuKnKz0NeMJH3Rq00ZAnBP2JlOBB2b6XPXkMU3Lkc7IcK6JaTukqAEDYDKE71DQ-dDyihp2fnx2EGwy-CaARWdYaTniTIny9t8U4lQouRLQ5QhVD3S_D65Xmx7WB3prqan1BabIOrMw0e_bbnTsT-MryqG2nVeV8",
  historyPhoto: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtbdv5s-P4twTdc63l_ygGrMgEy6nnT9Pb7yIqig4z4mLPHAW3xOrHcfKRv06E9M5nf4gbZGbdeUveNi_L6KMsMRhkf6gs4OBoOte1GafQIR3zKrbGBttttx_pkxO95WUmMSWF-1KceYlAYqlU0tegSeVseNreLT97XbCWDiXIDjA7x5AQZE13yW6hM7d4Z_UEE3MRoirQIYk2pdd-0ubF2qdNnLAvMCke11qtUQ-utBslxlvT1KbX",
  kepalaDesa: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF5ELNLgpxVYWnvabm7Dtx5_PdeulvpkPewAFD7LXxAlfg74P-by_SkTTDqPxZ0dQ0cch4TAr8ZH-AnEq4E17tIGNX3_0lWt-eexOb7SUKIE_cO_MZfpnG68my_EGaAWPjYt9sJPHmDqw-RidJesCQIbkrl_3vxevLdFYVKZSZOZwDESQuqY6mgRANuTvB20b3jrLDgeL7x13X9xjv5Qq9_jvAT7JrhC7ykbY3I9ZfZ2VWC9AaO_dq",
  meetingNews: "https://lh3.googleusercontent.com/aida-public/AB6AXuCETQmufsifipJxD8Ahqx_r2ks_8BUqdzC3a9oW5H38o2HwUVYBuzS_ihZs8QS5TUIvhLoSIqQGuZcT_RE8JvfALunoh0tDzVg4iqdxsGhziTpvBmLhrj1fm6nayQ9Bz5LpPBPXzj-15sCKdQyUJdz_YIbmZ8zmYjElLRckETwWovN3eTZnhB8dBCMd8BUgnTYbkUwfhYKwHn3g7VzVmgMRzJLSTzgoXmesfNaMSsavUvlknk4bZwFB",
  bltNotice: "https://lh3.googleusercontent.com/aida-public/AB6AXuArhGG59Eu0HS2Jv-W3-5QP4WUnCej79pETH6fXpADpTtwaZ4DUcjapSdi1MvEZCiqXfm4ztFBVMxHgpswbO2cWvkPU5GcswHy_0Of1sNiycW2SoGf2QEypy7k5_FX00_tcOJ0qn3fEH3cYwUW_oTT1XLesdHZNuWLINhx-ectUZ-zhJCK8QjWKAaCAv-h1CK9OpYOmRjufk6DaUcQvfel8QXbfl2SrEriRJEN3x6zMIQNR8wMi6mWb",
  roadAsphalt: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx9m_tZgLh0pf1aPLsmlP4G4zQy6O1pdJFEWY1Cog6WKI_PIWVHbtJg5N1hPQiKrT2p9xGM3-jiUmkPvaLhtoWQMqdkoOi5KApg4eyDi7-NQrvD2hlhX27X2H9q8QAXzvWzAmDZGVSyEfYVIGjuq65NNSUOjXQVGJ0k6SXMg1AMEKAeGwtkakxukLCBwT3irRXyk3mlLrJ4R1lWbfWH6wmoE4l1aQbV9yWdJe9Xp2PU8_zrN5dqXb1",
  villageEmblemLogo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9RAfHvltavWo-GJax9SrXYzcOG4YKe7IeiVc1iZHuUzZe91a8zmvxdifz83TMrBV0X61b1JwbBZr4xRnz7xUF-4iRZyW_CGnspy-yaNd3gqmjMh4gHoKARghTRnOOf1Jjxf4KlYn70bZPQImx4fCQp7FVuFLCQ627hTcOQgNn8fR1-B1B1JlSVpsrhukcFKP3sSPM_8d9LP2sHrCc6L5w31P0mfvUcRjOoihm89xeIgGVujaibeIT"
};

export const VILLAGE_INFO = {
  name: "Desa Rau",
  regency: "Kabupaten Jepara",
  district: "Kecamatan Kedung",
  province: "Jawa Tengah",
  postalCode: "59463",
  address: "Jl. Balai Desa No. 1, Desa Rau, Kec. Kedung, Kabupaten Jepara, Jawa Tengah 59463",
  phone: "(0291) 123456",
  email: "pemdes@rau.desa.id",
  website: "https://rau.desa.id",
  operatingHours: "Senin - Jumat: 08:00 - 15:30 WIB",
  stats: {
    area: "4.2 km²",
    population: "3,450",
    households: "850",
    agriculturePercent: "65%",
    dusunCount: "4 Dusun",
    rtRwCount: "16 RT / 4 RW"
  },
  vision: "Terwujudnya Desa Rau yang Sejahtera, Mandiri, Berbudaya, dan Agamis Berlandaskan Gotong Royong.",
  mission: [
    "Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel.",
    "Mendorong pertumbuhan ekonomi kerakyatan melalui pemberdayaan UMKM dan sektor pertanian.",
    "Membangun infrastruktur desa yang memadai dan merata.",
    "Melestarikan nilai-nilai sosial budaya, agama, dan kearifan lokal."
  ]
};

export const VILLAGE_STAFF: VillageStaff[] = [
  {
    name: "Siti Aminah",
    role: "Sekretaris Desa",
    nip: "19840512 201001 2 018"
  },
  {
    name: "Budi Santoso",
    role: "Kaur Keuangan",
    nip: "19880315 201201 1 007"
  },
  {
    name: "Wahyudi",
    role: "Kasi Pemerintahan",
    nip: "19860721 201101 1 012"
  },
  {
    name: "Ratna Sari",
    role: "Kasi Kesejahteraan",
    nip: "19910904 201501 2 009"
  }
];

export const VILLAGE_POTENTIALS: VillagePotential[] = [
  {
    id: "potensi-garam",
    title: "Produksi Garam",
    sector: "Sektor Pesisir",
    icon: "waves",
    summary: "Hamparan tambak garam di pesisir Kedung yang dikelola secara tradisional dan modern sebagai pilar utama ekonomi warga setempat.",
    description: "Desa Rau memiliki kawasan pesisir dengan potensi tambak garam seluas lebih dari 35 hektar. Menggunakan metode kristalisasi geomembran dan sistem tradisional berpadu modern, hasil garam dari Desa Rau memiliki tingkat kemurnian NaCl di atas 95% yang diminati oleh industri pengolahan pangan di Jawa Tengah.",
    image: IMAGES.saltFarm,
    productionCapacity: "1,200 Ton / Tahun",
    locations: "Pesisir Krajan & Kedung Pesisir"
  },
  {
    id: "potensi-padi",
    title: "Pertanian Padi",
    sector: "Sektor Agrikultur",
    icon: "eco",
    summary: "Sistem irigasi modern yang mendukung pertanian padi berkualitas tinggi untuk memastikan ketahanan pangan desa berkelanjutan.",
    description: "Lahan persawahan terbentang subur seluas 180 hektar didukung oleh saluran irigasi teknis tersier yang mengalir sepanjang musim tanam. Hasil panen padi varietas unggul seperti Inpari 32 dan Ciherang menjadi pemasok beras premium untuk wilayah Jepara dan sekitarnya.",
    image: IMAGES.heroRiceField,
    productionCapacity: "1,450 Ton Gabah Kering Panen / Musim",
    locations: "Dusun Krajan, Dusun Sidomulyo, Dusun Rejo"
  },
  {
    id: "potensi-kerajinan",
    title: "Kerajinan Rotan & Kayu",
    sector: "Sektor UMKM Kreatif",
    icon: "handyman",
    summary: "Pusat sentra kerajinan anyaman rotan dan mebel ukir khas Jepara berbasis industri rumahan.",
    description: "Kearifan lokal para pengrajin Desa Rau menghasilkan aneka produk anyaman rotan estetis, perabot mebel kayu jati minimalis, dan dekorasi interior yang dipasarkan hingga ke pasar ekspor mancanegara.",
    image: IMAGES.historyPhoto,
    productionCapacity: "500+ Unit Produk per Bulan",
    locations: "Sentra Kerajinan RW 02"
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-irigasi-krajan",
    title: "Penyelesaian Tahap Akhir Irigasi Sawah Dusun Krajan",
    category: "Pembangunan",
    date: "24 Oktober 2024",
    summary: "Proyek revitalisasi saluran irigasi utama yang mengairi lebih dari 50 hektar sawah produktif di Dusun Krajan kini telah mencapai tahap akhir. Diharapkan hasil panen musim depan akan meningkat signifikan berkat aliran air yang lebih stabil dan terdistribusi merata.",
    content: `Proyek revitalisasi saluran irigasi utama yang mengairi lebih dari 50 hektar sawah produktif di Dusun Krajan kini telah mencapai tahap akhir. Pembangunan ini dibiayai melalui alokasi Dana Desa (DD) Tahun Anggaran 2024 dengan total anggaran sebesar Rp 185.000.000.

Kepala Desa Rau, Bpk. Ahmad Susanto, saat meninjau langsung ke lokasi menyampaikan rasa syukur dan apresiasi kepada seluruh warga serta tim pelaksana kegiatan (TPK). "Dengan selesainya saluran beton ini, kehilangan debit air akibat resapan tanah dapat diminimalisasi hingga 70%. Para petani tidak perlu lagi khawatir kekurangan air saat musim tanam kedua," ungkap beliau.

Saluran irigasi sepanjang 850 meter ini dilengkapi dengan pintu air pengatur distribusi modern sehingga pembagian air ke petak-petak sawah warga dapat berjalan adil dan terukur.`,
    image: IMAGES.heroRiceField,
    featured: true,
    author: "Tim Media Desa Rau"
  },
  {
    id: "news-musrenbangdes-2025",
    title: "Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) 2025",
    category: "Kegiatan",
    date: "20 Okt 2024",
    summary: "Warga Desa Rau berpartisipasi aktif dalam menentukan prioritas pembangunan untuk tahun anggaran 2025. Fokus utama disepakati pada peningkatan fasilitas kesehatan dan perbaikan jalan penghubung antar dusun.",
    content: `Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) Tahun Anggaran 2025 telah sukses diselenggarakan di Balai Pertemuan Desa Rau pada Minggu pagi. Acara ini dihadiri oleh jajaran Pemerintah Desa, Badan Permusyawaratan Desa (BPD), perwakilan tokoh masyarakat, tokoh agama, kelompok tani, Karang Taruna, dan tim penggerak PKK.

Dalam musyawarah tersebut, disepakati beberapa skala prioritas kerja yang akan diajukan ke APBDes 2025:
1. Peningkatan drainase dan penerangan jalan lingkungan.
2. Pengadaan sarana Posyandu Prima di setiap dusun.
3. Pelatihan digital marketing dan permodalan UMKM garam dan kerajinan.
4. Program pencegahan dan penurunan angka stunting balita.`,
    image: IMAGES.meetingNews,
    author: "Sekretariat Desa"
  },
  {
    id: "news-blt-tahap-3",
    title: "Jadwal Penyaluran Bantuan Langsung Tunai (BLT) Tahap III",
    category: "Pengumuman",
    date: "18 Okt 2024",
    summary: "Diberitahukan kepada seluruh Keluarga Penerima Manfaat (KPM) bahwa penyaluran BLT Dana Desa Tahap III akan dilaksanakan pada hari Rabu minggu depan di Balai Desa dengan membawa persyaratan lengkap.",
    content: `Pemerintah Desa Rau mengumumkan jadwal resmi penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Tahap III untuk alokasi triwulan berjalan:

- **Hari / Tanggal**: Rabu, 30 Oktober 2024
- **Waktu**: 08.30 WIB - 13.00 WIB (dibagi per dusun guna menghindari antrean panjang)
- **Tempat**: Pendopo Balai Desa Rau
- **Syarat Pengambilan**:
  1. Membawa e-KTP Asli penerima manfaat.
  2. Membawa Kartu Keluarga (KK) Asli.
  3. Surat Undangan Resmi berstempel Kepala Desa.
  4. Apabila diwakilkan karena sakit/lansia wajib membawa Surat Kuasa bermeterai Rp 10.000 disertai KTP perwakilan satu KK.`,
    image: IMAGES.bltNotice,
    author: "Kaur Keuangan"
  },
  {
    id: "news-pengaspalan-jalan",
    title: "Pengaspalan Jalan Poros Desa Selesai Tepat Waktu",
    category: "Pembangunan",
    date: "15 Okt 2024",
    summary: "Proyek pengaspalan sepanjang 2 kilometer yang menghubungkan balai desa dengan jalan raya provinsi telah rampung 100%. Mobilitas warga dan distribusi hasil panen kini semakin lancar.",
    content: `Kabar gembira bagi warga pengguna akses jalan poros Desa Rau. Pekerjaan pengaspalan hotmix sepanjang 2.100 meter dengan lebar 4 meter telah rampung secara menyeluruh dan kini dapat dilalui dengan mulus oleh kendaraan roda dua maupun roda empat.

Pembangunan akses ini memangkas waktu tempuh menuju pusat kecamatan Kedung hingga 15 menit, serta memudahkan armada pengangkut hasil garam dan gabah kering dari ladang menuju gudang penampungan tanpa kendala genangan jalan saat musim hujan.`,
    image: IMAGES.roadAsphalt,
    author: "Kasi Kesejahteraan & Pembangunan"
  },
  {
    id: "news-posyandu-rutin",
    title: "Pelaksanaan Posyandu Balita & Lansia Rutin Bulanan",
    category: "Kegiatan",
    date: "10 Okt 2024",
    summary: "Kegiatan pemeriksaan kesehatan rutin berjalan lancar dihadiri lebih dari 100 warga. Terdapat penambahan pemberian suplemen gizi bagi balita stunting bulan ini.",
    content: `Puskesmas Pembantu Desa Rau bekerjasama dengan Kader Posyandu Melati dan PKK telah menggelar Posyandu Terpadu untuk Balita dan Lansia. Pelayanan mencakup:
- Penimbangan berat badan dan pengukuran tinggi badan balita.
- Pemberian vitamin A dan imunisasi dasar lengkap.
- Pembagian Makanan Tambahan (PMT) berbasis pangan lokal (bubur kacang hijau, telur rebus, dan buah segar).
- Cek tensi darah, gula darah, dan asam urat gratis bagi lansia di atas 60 tahun.`,
    image: "", // placeholder icon
    author: "Bidan Desa & Kader PKK"
  }
];

export const EMERGENCY_CONTACTS = [
  {
    name: "Polsek Kedung",
    number: "110 / (0291) 777111",
    tel: "0291777111",
    desc: "Layanan Keamanan & Ketertiban 24 Jam"
  },
  {
    name: "Puskesmas Kedung",
    number: "119 / (0291) 777222",
    tel: "0291777222",
    desc: "Ambulans & Gawat Darurat Medis 24 Jam"
  },
  {
    name: "Pemadam Kebakaran",
    number: "113 / (0291) 777333",
    tel: "0291777333",
    desc: "Damkar Jepara Pos Kedung"
  }
];

export const SERVICE_CATEGORIES = [
  {
    id: "kesehatan",
    title: "Kesehatan",
    subtitle: "Info BPJS & Posyandu",
    icon: "health_and_safety",
    color: "text-primary",
    bgColor: "bg-[#d0e2ff]/30",
    description: "Layanan pendaftaran faskes pertama, rujukan BPJS Kesehatan, jadwal Posyandu Balita/Lansia, serta permohonan rekomendasi Kartu Indonesia Sehat (KIS)."
  },
  {
    id: "pendidikan",
    title: "Pendidikan",
    subtitle: "Beasiswa & Sekolah",
    icon: "school",
    color: "text-[#198038]",
    bgColor: "bg-[#a7f0ba]/30",
    description: "Bantuan rekomendasi Beasiswa Jepara Pintar, surat keterangan tidak mampu untuk keringanan biaya sekolah/kuliah, dan data fasilitas pendidikan di desa."
  },
  {
    id: "sosial",
    title: "Sosial",
    subtitle: "Bantuan & Kesejahteraan",
    icon: "diversity_3",
    color: "text-[#525252]",
    bgColor: "bg-[#e0e0e0]/40",
    description: "Pendataan DTKS (Data Terpadu Kesejahteraan Sosial), info PKH, BPNT, BLT Dana Desa, serta permohonan santunan kematian warga pra-sejahtera."
  },
  {
    id: "ekonomi",
    title: "Ekonomi",
    subtitle: "UMKM & Pertanian",
    icon: "storefront",
    color: "text-[#525252]",
    bgColor: "bg-[#e0e0e0]/40",
    description: "Fasilitasi Nomor Induk Berusaha (NIB) bagi pelaku usaha lokal, kelompok tani garam & padi, pengajuan pupuk bersubsidi, dan pelatihan digital marketing."
  }
];

export const LETTER_TYPES = [
  { id: "sku", name: "Surat Keterangan Usaha (SKU)", reqs: "KTP, KK, Foto Usaha" },
  { id: "skdom", name: "Surat Keterangan Domisili", reqs: "KTP, KK, Pengantar RT/RW" },
  { id: "sktm", name: "Surat Keterangan Tidak Mampu (SKTM)", reqs: "KTP, KK, Foto Rumah Tampak Depan" },
  { id: "skbm", name: "Surat Keterangan Belum Menikah", reqs: "KTP, KK Asli" },
  { id: "skck_pengantar", name: "Surat Pengantar SKCK Kepolisian", reqs: "KTP, KK, Pas Foto 4x6" },
  { id: "sk_kematian", name: "Surat Keterangan Kematian", reqs: "KTP Pelapor, KTP/KK Almarhum, Keterangan Saksi" },
  { id: "sk_kelahiran", name: "Surat Keterangan Kelahiran", reqs: "KTP Orang Tua, KK, Surat Bidan/RS" },
  { id: "sk_kehilangan", name: "Surat Pengantar Laporan Kehilangan", reqs: "KTP, KK, Kronologi Kejadian" }
];
