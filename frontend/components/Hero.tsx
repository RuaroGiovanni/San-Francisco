import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[var(--sys-bg)] pt-[calc(var(--safe-top)+56px)] pb-6 px-5 md:min-h-[340px] flex flex-col justify-end">
      {/* Radial Gradient Mesh Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full bg-[var(--sys-blue)] opacity-15 blur-[60px] md:blur-[80px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[600px] mx-auto w-full">
        <p className="text-[13px] text-[var(--sys-blue)] uppercase tracking-[0.05em] font-bold mb-2 flex items-center gap-1">
          ✈ AGOSTO 2026
        </p>
        <h1 className="text-[clamp(48px,14vw,72px)] md:text-[80px] font-bold tracking-[-0.04em] leading-[0.95] text-[var(--sys-label)]">
          San Francisco
        </h1>
      </div>
    </div>
  );
};
