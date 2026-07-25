import React from 'react';

interface HeroProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onToggleTheme }) => {
  return (
    <div className="relative overflow-hidden bg-[var(--sys-bg)] pt-[calc(var(--safe-top)+56px)] pb-6 px-5 md:min-h-[340px] flex flex-col justify-end transition-colors duration-300">
      {/* Theme Toggle */}
      <button 
        onClick={onToggleTheme}
        className="absolute top-[calc(var(--safe-top)+16px)] right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--sys-fill-tertiary)] text-[var(--sys-label)] hover:bg-[var(--sys-fill-secondary)] transition-colors z-20"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>


      
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
