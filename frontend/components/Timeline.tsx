import React from 'react';
import { DayData, EventType, BadgeVariant } from '../types';

interface TimelineProps {
  day: DayData;
}

const getTypeStyles = (type: EventType) => {
  switch (type) {
    case 'highlight': return { accent: 'bg-[var(--sys-blue)]' };
    case 'meal': return { accent: 'bg-[var(--sys-orange)]' };
    case 'flight': return { accent: 'bg-[var(--sys-teal)]' };
    case 'event': return { accent: 'bg-[var(--sys-purple)]' };
    default: return { accent: 'bg-[var(--sys-separator)]' };
  }
};

const getBadgeStyles = (variant: BadgeVariant) => {
  switch (variant) {
    case 'lunch':
    case 'dinner':
      return 'bg-[rgba(84,84,88,0.4)] text-[var(--sys-orange)]';
    case 'flight':
      return 'bg-[rgba(10,132,255,0.2)] text-[var(--sys-teal)]';
    case 'event':
      return 'bg-[rgba(191,90,242,0.2)] text-[var(--sys-purple)]';
    default:
      return 'bg-[var(--sys-fill)] text-[var(--sys-label)]';
  }
};

export const Timeline: React.FC<TimelineProps> = ({ day }) => {
  const handleCardClick = (location?: string) => {
    if (!location) return;
    
    const confirmLeave = window.confirm("Vuoi uscire dall'applicazione per aprire la mappa?");
    if (confirmLeave) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="animate-fade-slide pb-[calc(var(--safe-bottom)+40px)]">
      {/* Day Header */}
      <div className="px-5 pt-6 pb-6 max-w-[600px] mx-auto md:px-4">
        <p className="text-[12px] text-[var(--sys-label-secondary)] uppercase font-semibold tracking-wider mb-1">
          {day.weekday}
        </p>
        <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[var(--sys-label)] mb-2">
          {day.date}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-[16px]">{day.theme.icon}</span>
          <span className="text-[15px] font-medium text-[var(--sys-blue)]">
            {day.theme.text}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-4 max-w-[600px] mx-auto">
        {day.events.map((event, index) => {
          const styles = getTypeStyles(event.type);
          const isClickable = !!event.location;

          return (
            <div key={index} className="flex gap-3 pb-4 relative group">
              {/* Time */}
              <div className="w-[42px] shrink-0 text-right pt-[14px]">
                <span className="text-[12px] font-medium text-[var(--sys-label-secondary)]">
                  {event.time}
                </span>
              </div>

              {/* Card */}
              <div 
                onClick={() => handleCardClick(event.location)}
                className={`
                  flex-1 relative bg-[var(--sys-bg-secondary)] rounded-[16px] p-4
                  overflow-hidden border border-[rgba(255,255,255,0.03)] z-10
                  ${isClickable ? 'cursor-pointer active:scale-[0.98] transition-transform duration-200' : ''}
                `}
              >
                {/* Left Accent Bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${styles.accent}`} />

                <div className="flex justify-between items-start gap-2 mb-1.5">
                  <h3 className="text-[16px] font-semibold text-[var(--sys-label)] leading-tight">
                    {event.name}
                  </h3>
                  {event.badge && (
                    <span className={`shrink-0 text-[10px] font-bold uppercase px-2 py-1 rounded-md flex items-center gap-1 ${getBadgeStyles(event.badge.variant)}`}>
                      {event.badge.label}
                    </span>
                  )}
                </div>
                <p className="text-[14px] text-[var(--sys-label-secondary)] leading-[1.4]">
                  {event.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Day Note */}
        {day.note && (
          <div className="mt-2 mb-6 bg-[var(--sys-blue-light)] border border-[rgba(10,132,255,0.25)] rounded-[16px] p-4 flex items-start gap-3 ml-[54px]">
            <span className="text-[18px] leading-none mt-0.5">{day.note.icon}</span>
            <p className="text-[13px] text-[var(--sys-label)] leading-[1.6]">
              {day.note.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
