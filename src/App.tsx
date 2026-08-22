/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ActiveTab, NewsArticle, VillagePotential, LetterRequest, CitizenReport, ContactMessage } from './types';
import { SERVICE_CATEGORIES, NEWS_ARTICLES, VILLAGE_POTENTIALS } from './data/villageData';
import { Header } from './components/Header';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BottomNavBar } from './components/BottomNavBar';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProfileScreen } from './components/screens/ProfileScreen';
import { NewsScreen } from './components/screens/NewsScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { SuratModal } from './components/modals/SuratModal';
import { LaporModal } from './components/modals/LaporModal';
import { ArticleModal } from './components/modals/ArticleModal';
import { PotentialDetailModal } from './components/modals/PotentialDetailModal';
import { ServiceCategoryModal } from './components/modals/ServiceCategoryModal';
import { LoginModal } from './components/modals/LoginModal';
import { TrackingResultModal } from './components/modals/TrackingResultModal';
import { PolicyModal } from './components/modals/PolicyModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('beranda');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Modals state
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedPotential, setSelectedPotential] = useState<VillagePotential | null>(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<typeof SERVICE_CATEGORIES[0] | null>(null);
  const [isSuratModalOpen, setIsSuratModalOpen] = useState(false);
  const [isLaporModalOpen, setIsLaporModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [policyType, setPolicyType] = useState<string | null>(null);

  // Tracking Modal
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [trackingQuery, setTrackingQuery] = useState('');
  const [foundLetter, setFoundLetter] = useState<LetterRequest | null>(null);
  const [foundReport, setFoundReport] = useState<CitizenReport | null>(null);

  // User session
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('desa_rau_user_logged_in') === 'true';
  });
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('desa_rau_user_name') || 'Muhammad Rizky';
  });

  // Letter requests state with local storage persistence
  const [letterRequests, setLetterRequests] = useState<LetterRequest[]>(() => {
    const saved = localStorage.getItem('desa_rau_letter_requests');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: '1',
        trackingNumber: 'SRT-RAU-2024-001',
        nik: '3320011234560001',
        namaLengkap: 'Budi Santoso',
        jenisSurat: 'Surat Keterangan Usaha (SKU)',
        keperluan: 'Syarat Pengajuan KUR BRI',
        dusun: 'Dusun Krajan',
        rt: '02',
        rw: '01',
        noHp: '081234567890',
        status: 'Siap Diambil',
        createdAt: '22 Okt 2024, 09:30'
      },
      {
        id: '2',
        trackingNumber: 'SRT-RAU-2024-002',
        nik: '3320019876540002',
        namaLengkap: 'Siti Fatimah',
        jenisSurat: 'Surat Keterangan Domisili',
        keperluan: 'Pendaftaran Sekolah Anak',
        dusun: 'Dusun Sidomulyo',
        rt: '04',
        rw: '02',
        noHp: '085712345678',
        status: 'Sedang Diproses',
        createdAt: '23 Okt 2024, 14:15'
      }
    ];
  });

  // Citizen reports state with local storage persistence
  const [citizenReports, setCitizenReports] = useState<CitizenReport[]>(() => {
    const saved = localStorage.getItem('desa_rau_citizen_reports');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: '1',
        trackingNumber: 'LPR-RAU-001',
        fullName: 'Ahmad Fauzi',
        phone: '081298765432',
        category: 'Infrastruktur',
        title: 'Lampu Penerangan Jalan Padam di RT 03',
        description: 'Lampu PJU jalan poros RT 03 Dusun Rejo padam sudah 3 malam sehingga jalan menjadi gelap rawan kecelakaan.',
        location: 'Dusun Rejo RT 03 / RW 01',
        status: 'Diproses',
        createdAt: '21 Okt 2024, 19:45'
      },
      {
        id: '2',
        trackingNumber: 'LPR-RAU-002',
        fullName: 'Hj. Aminah',
        phone: '087812348899',
        category: 'Kebersihan',
        title: 'Pembersihan Saluran Air Tersumbat Sampah',
        description: 'Gorong-gorong di perbatasan dusun tersumbat sampah ranting pohon menjelang musim hujan.',
        location: 'Jalan Pesisir Dusun Krajan',
        status: 'Selesai',
        createdAt: '19 Okt 2024, 08:20'
      }
    ];
  });

  // Contact messages state
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem('desa_rau_contact_messages');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('desa_rau_letter_requests', JSON.stringify(letterRequests));
  }, [letterRequests]);

  useEffect(() => {
    localStorage.setItem('desa_rau_citizen_reports', JSON.stringify(citizenReports));
  }, [citizenReports]);

  useEffect(() => {
    localStorage.setItem('desa_rau_contact_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  const handleLogin = (name: string, nik: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem('desa_rau_user_logged_in', 'true');
    localStorage.setItem('desa_rau_user_name', name);
    localStorage.setItem('desa_rau_user_nik', nik);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('desa_rau_user_logged_in');
  };

  const handleSubmitLetter = (data: Omit<LetterRequest, 'id' | 'createdAt' | 'status' | 'trackingNumber'>): LetterRequest => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    const trackingCode = `SRT-RAU-2024-${randomNum}`;
    const now = new Date();
    const formattedDate = `${now.getDate()} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][now.getMonth()]} ${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newRequest: LetterRequest = {
      ...data,
      id: Date.now().toString(),
      trackingNumber: trackingCode,
      status: 'Menunggu Verifikasi',
      createdAt: formattedDate
    };

    setLetterRequests(prev => [newRequest, ...prev]);
    return newRequest;
  };

  const handleSubmitReport = (data: Omit<CitizenReport, 'id' | 'createdAt' | 'status' | 'trackingNumber'>): CitizenReport => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    const trackingCode = `LPR-RAU-${randomNum}`;
    const now = new Date();
    const formattedDate = `${now.getDate()} ${['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'][now.getMonth()]} ${now.getFullYear()}, ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newReport: CitizenReport = {
      ...data,
      id: Date.now().toString(),
      trackingNumber: trackingCode,
      status: 'Diterima',
      createdAt: formattedDate
    };

    setCitizenReports(prev => [newReport, ...prev]);
    return newReport;
  };

  const handleSendMessage = (msg: Omit<ContactMessage, 'id' | 'createdAt'>) => {
    const now = new Date();
    const formattedDate = `${now.getDate()} ${now.toLocaleString('id-ID', { month: 'short' })} ${now.getFullYear()}`;
    const newMsg: ContactMessage = {
      ...msg,
      id: Date.now().toString(),
      createdAt: formattedDate
    };
    setContactMessages(prev => [newMsg, ...prev]);
  };

  const handleTrackDocument = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    setTrackingQuery(cleanCode);

    const letter = letterRequests.find(l => l.trackingNumber.toUpperCase() === cleanCode);
    const report = citizenReports.find(r => r.trackingNumber.toUpperCase() === cleanCode);

    setFoundLetter(letter || null);
    setFoundReport(report || null);
    setIsTrackingModalOpen(true);
  };

  // Scroll to top when active tab changes
  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#161616] font-body selection:bg-[#d0e2ff] selection:text-[#001d6c]">
      {/* Top App Bar Header */}
      <Header
        onToggleDrawer={() => setIsDrawerOpen(prev => !prev)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onNavigate={handleTabChange}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      {/* Slide-over Mobile Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        activeTab={activeTab}
        onClose={() => setIsDrawerOpen(false)}
        onSelectTab={handleTabChange}
      />

      {/* Main Framework Container */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Desktop Sticky Side Navigation Bar (Hidden on Mobile) */}
        <aside className="hidden md:flex flex-col h-[calc(100vh-3rem)] w-64 left-0 top-12 bg-white border-r border-[#e0e0e0] sticky transition-all duration-200 ease-in-out z-40 shrink-0">
          <div className="p-4 border-b border-[#e0e0e0]">
            <h2 className="text-xl font-bold text-[#0f62fe] font-headline">Portal Desa Rau</h2>
            <p className="text-[11px] text-[#6f6f6f] mt-0.5">Kabupaten Jepara</p>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            <ul className="flex flex-col gap-1 px-2">
              <li>
                <button
                  id="desktop-nav-beranda"
                  onClick={() => handleTabChange('beranda')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left cursor-pointer transition-colors ${
                    activeTab === 'beranda'
                      ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                      : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'beranda' ? 'filled text-[#0f62fe]' : ''}`}>
                    home
                  </span>
                  <span className="font-body text-sm font-medium">Beranda</span>
                </button>
              </li>
              <li>
                <button
                  id="desktop-nav-profil"
                  onClick={() => handleTabChange('profil')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left cursor-pointer transition-colors ${
                    activeTab === 'profil'
                      ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                      : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'profil' ? 'filled text-[#0f62fe]' : ''}`}>
                    account_balance
                  </span>
                  <span className="font-body text-sm font-medium">Profil Desa</span>
                </button>
              </li>
              <li>
                <button
                  id="desktop-nav-layanan"
                  onClick={() => handleTabChange('layanan')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left cursor-pointer transition-colors ${
                    activeTab === 'layanan'
                      ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                      : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'layanan' ? 'filled text-[#0f62fe]' : ''}`}>
                    grid_view
                  </span>
                  <span className="font-body text-sm font-medium">Layanan Publik</span>
                </button>
              </li>
              <li>
                <button
                  id="desktop-nav-berita"
                  onClick={() => handleTabChange('berita')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left cursor-pointer transition-colors ${
                    activeTab === 'berita'
                      ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                      : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'berita' ? 'filled text-[#0f62fe]' : ''}`}>
                    newspaper
                  </span>
                  <span className="font-body text-sm font-medium">Berita</span>
                </button>
              </li>
              <li>
                <button
                  id="desktop-nav-kontak"
                  onClick={() => handleTabChange('kontak')}
                  className={`w-full flex items-center gap-3 px-3 py-2 text-left cursor-pointer transition-colors ${
                    activeTab === 'kontak'
                      ? 'bg-[#e0e0e0] text-[#0f62fe] font-semibold border-l-4 border-[#0f62fe]'
                      : 'text-[#525252] hover:bg-[#f4f4f4] hover:text-[#161616]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] ${activeTab === 'kontak' ? 'filled text-[#0f62fe]' : ''}`}>
                    contact_support
                  </span>
                  <span className="font-body text-sm font-medium">Hubungi Kami</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Quick Support Badge */}
          <div className="p-4 border-t border-[#e0e0e0] bg-[#f4f4f4] text-xs text-[#525252] space-y-2">
            <div className="font-bold text-[#161616] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#0f62fe]">support_agent</span>
              Layanan Warga 24/7
            </div>
            <p className="text-[11px] leading-relaxed">
              Pengajuan surat dan pengaduan warga diproses secara transparan dan akuntabel.
            </p>
          </div>
        </aside>

        {/* Main Content View with Dynamic Screen Rendering */}
        <main className="flex-1 overflow-y-auto w-full pb-20 md:pb-0 min-h-[calc(100vh-3rem)] flex flex-col">
          {activeTab === 'beranda' && (
            <HomeScreen
              onNavigate={handleTabChange}
              onOpenSuratModal={() => setIsSuratModalOpen(true)}
              onOpenLaporModal={() => setIsLaporModalOpen(true)}
              onSelectPotential={(pot) => setSelectedPotential(pot)}
            />
          )}

          {activeTab === 'profil' && (
            <ProfileScreen />
          )}

          {activeTab === 'layanan' && (
            <ServicesScreen
              onOpenSuratModal={() => setIsSuratModalOpen(true)}
              onOpenLaporModal={() => setIsLaporModalOpen(true)}
              onSelectCategory={(cat) => setSelectedServiceCategory(cat)}
              onTrackDocument={handleTrackDocument}
            />
          )}

          {activeTab === 'berita' && (
            <NewsScreen
              onSelectArticle={(article) => setSelectedArticle(article)}
            />
          )}

          {activeTab === 'kontak' && (
            <ContactScreen
              onSendMessage={handleSendMessage}
            />
          )}

          {/* Persistent Footer */}
          <Footer
            onOpenPolicy={(type) => setPolicyType(type)}
          />
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar (Visible only on mobile screens) */}
      <BottomNavBar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* Interactive Modal Windows */}
      <SuratModal
        isOpen={isSuratModalOpen}
        onClose={() => setIsSuratModalOpen(false)}
        onSubmitLetter={handleSubmitLetter}
        letterRequests={letterRequests}
      />

      <LaporModal
        isOpen={isLaporModalOpen}
        onClose={() => setIsLaporModalOpen(false)}
        onSubmitReport={handleSubmitReport}
        reports={citizenReports}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <PotentialDetailModal
        potential={selectedPotential}
        onClose={() => setSelectedPotential(null)}
        onSelectOther={(p) => setSelectedPotential(p)}
      />

      <ServiceCategoryModal
        category={selectedServiceCategory}
        onClose={() => setSelectedServiceCategory(null)}
        onOpenSurat={() => setIsSuratModalOpen(true)}
        onOpenLapor={() => setIsLaporModalOpen(true)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={handleLogout}
      />

      <TrackingResultModal
        isOpen={isTrackingModalOpen}
        onClose={() => setIsTrackingModalOpen(false)}
        query={trackingQuery}
        foundLetter={foundLetter}
        foundReport={foundReport}
      />

      <PolicyModal
        policyType={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}
