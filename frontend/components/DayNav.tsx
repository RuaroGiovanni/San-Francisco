import React, { useEffect, useRef } from 'react';
import { DayData } from '../types';

interface DayNavProps {
  days: DayData[];
  currentDay: number;
  onDaySelect: (index: number) => void;
}

export const DayNav: React.FC<DayNavProps> = ({ days, currentDay, onDaySelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const activeChip = container.children[currentDay] as HTMLElement;
    if (activeChip) {
      // Calculate position to center the chip
      const containerWidth = container.offsetWidth;
      const chipLeft = activeChip.offsetLeft;
      const chipWidth = activeChip.offsetWidth;
      
      const scrollPosition = chipLeft - (containerWidth / 2) + (chipWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentDay]);

  const progressWidth = `${((currentDay + 1) / days.length) * 100}%`;

  return (
    <div className="sticky top-0 z-[100] bg-[rgba(0,0,0,0.85)] backdrop-blur-[24px] backdrop-saturate-[200%] border-b-[0.5px] border-[var(--sys-separator-opaque)]">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar px-4 py-3 gap-2 snap-x snap-mandatory"
      >
        {days.map((day, index) => {
          const isActive = index === currentDay;
          return (
            <button
              key={day.id}
              onClick={() => onDaySelect(index)}
              className={`
                flex-shrink-0 flex flex-col items-center justify-center w-[56px] h-[64px] rounded-[14px] transition-all duration-200 snap-center
                active:scale-95
                ${isActive 
                  ? 'bg-[var(--sys-blue)] text-white' 
                  : 'bg-[var(--sys-bg-secondary)] text-[var(--sys-label-secondary)]'}
              `}
            >
              <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-white/90' : ''}`}>
                {day.chipLabel}
              </span>
              <span className={`text-[20px] font-bold mt-0.5 ${isActive ? 'text-white' : 'text-[var(--sys-label-secondary)]'}`}>
                {day.chipNum}
              </span>
            </button>
          );
        })}
      </div>
      {/* Progress Bar */}
      <div className="h-[2px] w-full bg-[var(--sys-bg-secondary)]">
        <div 
          className="h-full bg-[var(--sys-blue)] transition-all duration-300 ease-out will-change-transform"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};
