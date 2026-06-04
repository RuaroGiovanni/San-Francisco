import React, { useState, useCallback } from 'react';
import { itineraryData } from './data';
import { Hero } from './components/Hero';
import { DayNav } from './components/DayNav';
import { Timeline } from './components/Timeline';

const App: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleDaySelect = useCallback((index: number) => {
    setCurrentDay(index);
    // Smooth scroll to top of nav
    const navElement = document.getElementById('day-nav-wrapper');
    if (navElement) {
      const y = navElement.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--safe-top')) || 0);
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const swipeThreshold = 50;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0 && currentDay < itineraryData.length - 1) {
        // Swipe left -> next day
        handleDaySelect(currentDay + 1);
      } else if (deltaX > 0 && currentDay > 0) {
        // Swipe right -> prev day
        handleDaySelect(currentDay - 1);
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="min-h-screen bg-[var(--sys-bg)] text-[var(--sys-label)]">
      <Hero />
      
      <div id="day-nav-wrapper">
        <DayNav 
          days={itineraryData} 
          currentDay={currentDay} 
          onDaySelect={handleDaySelect} 
        />
      </div>

      <div 
        className="w-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Render only the active day to trigger the animation on change */}
        <Timeline key={currentDay} day={itineraryData[currentDay]} />
      </div>
    </div>
  );
};

export default App;
