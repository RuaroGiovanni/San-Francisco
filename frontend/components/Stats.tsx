import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="px-5 pb-6 bg-[var(--sys-bg)]">
      <div className="max-w-[600px] mx-auto grid grid-cols-3 gap-3">
        <div className="bg-[var(--sys-bg-secondary)] border border-[var(--sys-separator)] rounded-[var(--radius-md)] p-3 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold text-[var(--sys-label)]">
            <span className="text-[var(--sys-blue)]">12</span>
          </span>
          <span className="text-[10px] uppercase text-[var(--sys-label-tertiary)] font-semibold mt-1 tracking-wider">Giorni</span>
        </div>
        <div className="bg-[var(--sys-bg-secondary)] border border-[var(--sys-separator)] rounded-[var(--radius-md)] p-3 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold text-[var(--sys-label)]">
            <span className="text-[var(--sys-blue)]">6</span>
          </span>
          <span className="text-[10px] uppercase text-[var(--sys-label-tertiary)] font-semibold mt-1 tracking-wider">Città</span>
        </div>
        <div className="bg-[var(--sys-bg-secondary)] border border-[var(--sys-separator)] rounded-[var(--radius-md)] p-3 flex flex-col items-center justify-center">
          <span className="text-[22px] font-bold text-[var(--sys-label)]">
            <span className="text-[var(--sys-blue)]">2</span>
          </span>
          <span className="text-[10px] uppercase text-[var(--sys-label-tertiary)] font-semibold mt-1 tracking-wider">Voli</span>
        </div>
      </div>
    </div>
  );
};
