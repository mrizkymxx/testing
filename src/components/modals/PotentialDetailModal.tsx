import React from 'react';
import { VillagePotential } from '../../types';
import { VILLAGE_POTENTIALS } from '../../data/villageData';

interface PotentialDetailModalProps {
  potential: VillagePotential | null;
  onClose: () => void;
  onSelectOther: (pot: VillagePotential) => void;
}

export const PotentialDetailModal: React.FC<PotentialDetailModalProps> = ({
  potential,
  onClose,
  onSelectOther
}) => {
  if (!potential) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#161616]/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white w-full max-w-3xl border border-[#e0e0e0] shadow-2xl my-8 relative flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#e0e0e0] bg-[#f4f4f4]">
          <div className="flex items-center gap-2 text-[#198038] font-semibold text-xs uppercase tracking-wider">
            <span className="material-symbols-outlined text-base">{potential.icon}</span>
            <span>{potential.sector}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#e0e0e0] text-[#161616] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-[#161616]">
            {potential.title}
          </h2>

          <div className="w-full h-64 sm:h-72 bg-[#f4f4f4] overflow-hidden border border-[#e0e0e0]">
            <img
              src={potential.image}
              alt={potential.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3 bg-[#f4f4f4] border border-[#e0e0e0]">
              <span className="text-[11px] text-[#6f6f6f] uppercase font-semibold">Estimasi Kapasitas / Hasil</span>
              <div className="font-bold text-sm text-[#161616] mt-0.5">{potential.productionCapacity}</div>
            </div>
            <div className="p-3 bg-[#f4f4f4] border border-[#e0e0e0]">
              <span className="text-[11px] text-[#6f6f6f] uppercase font-semibold">Sentra Kawasan</span>
              <div className="font-bold text-sm text-[#161616] mt-0.5">{potential.locations}</div>
            </div>
          </div>

          <p className="text-sm text-[#525252] leading-relaxed font-body">
            {potential.description}
          </p>

          {/* Other Potentials */}
          <div className="pt-6 border-t border-[#e0e0e0]">
            <h3 className="text-sm font-semibold text-[#161616] mb-3">Potensi Unggulan Lainnya</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VILLAGE_POTENTIALS.filter(p => p.id !== potential.id).map(p => (
                <div
                  key={p.id}
                  onClick={() => onSelectOther(p)}
                  className="p-3 bg-[#f4f4f4] border border-[#e0e0e0] hover:border-[#0f62fe] cursor-pointer flex items-center gap-3 transition-colors"
                >
                  <img src={p.image} alt={p.title} className="w-12 h-12 object-cover" />
                  <div>
                    <div className="text-xs font-semibold text-[#0f62fe]">{p.sector}</div>
                    <div className="text-sm font-bold text-[#161616]">{p.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
