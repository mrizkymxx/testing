import React from 'react';
import { NewsArticle } from '../../types';

interface ArticleModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-3xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#0f62fe] uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs text-[#6f6f6f]">• {article.date}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e0e0e0] text-[#161616] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <h1 className="text-2xl sm:text-3xl font-headline font-semibold text-[#161616] leading-tight">
            {article.title}
          </h1>

          {article.image && (
            <div className="w-full h-64 sm:h-80 bg-[#f4f4f4] overflow-hidden border border-[#e0e0e0]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-sm max-w-none text-[#525252] leading-relaxed whitespace-pre-line font-body">
            {article.content}
          </div>

          <div className="pt-4 border-t border-[#e0e0e0] flex flex-wrap justify-between items-center text-xs text-[#6f6f6f]">
            <span>Penulis: <strong>{article.author || 'Pemerintah Desa Rau'}</strong></span>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                onClick={() => {
                  if (navigator.clipboard) {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan berita berhasil disalin!');
                  }
                }}
                className="px-3 py-1.5 bg-[#f4f4f4] hover:bg-[#e0e0e0] text-[#161616] font-medium border border-[#8d8d8d] cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">share</span>
                Bagikan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
