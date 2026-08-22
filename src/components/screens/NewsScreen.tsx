import React, { useState, useMemo } from 'react';
import { NEWS_ARTICLES, IMAGES } from '../../data/villageData';
import { NewsArticle } from '../../types';

interface NewsScreenProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsScreen: React.FC<NewsScreenProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['Semua', 'Pembangunan', 'Kegiatan', 'Pengumuman'];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter((article) => {
      const matchCategory =
        selectedCategory === 'Semua' || article.category === selectedCategory;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = NEWS_ARTICLES[0];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 md:px-8 flex flex-col gap-8 bg-white">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-[#e0e0e0] pb-6">
        <h2 className="text-3xl font-light tracking-tight text-[#161616] font-headline">
          Berita &amp; Pengumuman
        </h2>
        <p className="text-sm text-[#6f6f6f] font-body">
          Informasi terbaru seputar kegiatan, pembangunan, dan pengumuman resmi Desa Rau.
        </p>
      </div>

      {/* Featured News Section */}
      {selectedCategory === 'Semua' && !searchQuery && featuredArticle && (
        <section
          id="featured-news-card"
          onClick={() => onSelectArticle(featuredArticle)}
          className="flex flex-col lg:flex-row gap-0 bg-[#f4f4f4] border border-[#e0e0e0] group cursor-pointer hover:bg-[#e0e0e0] transition-colors"
        >
          <div className="w-full lg:w-2/3 h-64 lg:h-[380px] relative overflow-hidden bg-[#e0e0e0]">
            <img
              src={featuredArticle.image || IMAGES.heroRiceField}
              alt={featuredArticle.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/3 p-6 flex flex-col justify-center gap-4">
            <span className="text-xs font-semibold text-[#0f62fe] uppercase tracking-wider">
              {featuredArticle.category}
            </span>
            <h3 className="text-2xl font-medium leading-tight text-[#161616] group-hover:text-[#0f62fe] transition-colors">
              {featuredArticle.title}
            </h3>
            <p className="text-sm text-[#525252] line-clamp-3 leading-relaxed font-body">
              {featuredArticle.summary}
            </p>
            <div className="mt-auto flex items-center text-xs text-[#6f6f6f] gap-2 pt-4 border-t border-[#e0e0e0]">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>{featuredArticle.date}</span>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Bar */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-4 sticky top-12 z-40 bg-white/95 backdrop-blur-sm border-b border-[#e0e0e0]">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`filter-btn-${category.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#0f62fe] text-white border border-transparent shadow-xs'
                    : 'bg-white text-[#161616] border border-[#8d8d8d] hover:bg-[#f4f4f4]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            id="input-search-news"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari berita..."
            className="w-full h-10 pl-10 pr-4 bg-[#f4f4f4] border-b border-[#e0e0e0] text-sm text-[#161616] placeholder:text-[#6f6f6f] carbon-input transition-all outline-none"
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6f6f6f] text-[20px]">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6f6f6f] hover:text-[#161616]"
            >
              Hapus
            </button>
          )}
        </div>
      </section>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => {
            const isAnnouncement = article.category === 'Pengumuman';
            return (
              <article
                key={article.id}
                id={`article-card-${article.id}`}
                onClick={() => onSelectArticle(article)}
                className="flex flex-col bg-white border border-[#e0e0e0] hover:shadow-md transition-shadow cursor-pointer h-full group"
              >
                <div className="h-48 w-full bg-[#f4f4f4] relative overflow-hidden flex items-center justify-center">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-[#6f6f6f] text-5xl">
                      health_and_safety
                    </span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-grow gap-3">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-xs font-semibold tracking-wide uppercase ${
                        isAnnouncement ? 'text-[#da1e28]' : 'text-[#0f62fe]'
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-[#6f6f6f]">{article.date}</span>
                  </div>
                  <h4 className="text-lg font-medium text-[#161616] leading-snug group-hover:text-[#0f62fe] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-sm text-[#525252] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      ) : (
        <div className="p-12 text-center bg-[#f4f4f4] border border-[#e0e0e0]">
          <span className="material-symbols-outlined text-4xl text-[#6f6f6f] mb-2">
            search_off
          </span>
          <p className="text-base font-medium text-[#161616]">
            Tidak ada berita atau pengumuman yang sesuai.
          </p>
          <p className="text-sm text-[#525252] mt-1">
            Silakan coba kata kunci lain atau pilih kategori 'Semua'.
          </p>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center border border-[#e0e0e0] text-[#6f6f6f] hover:bg-[#f4f4f4] transition-colors disabled:opacity-50 cursor-pointer"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={() => setCurrentPage(1)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium cursor-pointer ${
            currentPage === 1
              ? 'bg-[#0f62fe] text-white'
              : 'border border-[#e0e0e0] text-[#161616] hover:bg-[#f4f4f4]'
          }`}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium cursor-pointer ${
            currentPage === 2
              ? 'bg-[#0f62fe] text-white'
              : 'border border-[#e0e0e0] text-[#161616] hover:bg-[#f4f4f4]'
          }`}
        >
          2
        </button>
        <button
          onClick={() => setCurrentPage(3)}
          className={`w-10 h-10 flex items-center justify-center text-sm font-medium cursor-pointer ${
            currentPage === 3
              ? 'bg-[#0f62fe] text-white'
              : 'border border-[#e0e0e0] text-[#161616] hover:bg-[#f4f4f4]'
          }`}
        >
          3
        </button>
        <span className="text-[#6f6f6f] px-2">...</span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
          disabled={currentPage === 3}
          className="w-10 h-10 flex items-center justify-center border border-[#e0e0e0] text-[#6f6f6f] hover:bg-[#f4f4f4] transition-colors disabled:opacity-50 cursor-pointer"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
