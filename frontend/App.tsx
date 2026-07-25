import React, { useState, useCallback, useEffect } from 'react';
import { itineraryData } from './data';
import { Hero } from './components/Hero';
import { DayNav } from './components/DayNav';
import { Timeline } from './components/Timeline';
import { LoginGate } from './components/LoginGate';

const getInitialDayIndex = () => {
  const today = new Date();
  // JavaScript Date months are 0-indexed, so 7 is August
  if (today.getFullYear() === 2026 && today.getMonth() === 7) {
    const date = today.getDate();
    // The trip is from August 12th to August 23rd
    if (date >= 12 && date <= 23) {
      return date - 12; // 12th is index 0, 13th is index 1, etc.
    }
  }
  // Fallback for days before, after, or in different months/years
  return 0;
};

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
  }
  // Fallback to time-based if matchMedia is unavailable
  const hour = new Date().getHours();
  // Dark mode from 6 PM to 6 AM
  return (hour >= 18 || hour < 6) ? 'dark' : 'light';
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('sf_trip_authenticated') === 'true';
  });
  const [currentDay, setCurrentDay] = useState<number>(getInitialDayIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  const handleLoginSuccess = useCallback(() => {
    localStorage.setItem('sf_trip_authenticated', 'true');
    setIsAuthenticated(true);
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } 
    // Older browsers fallback
    else if ('addListener' in mediaQuery) {
      // @ts-ignore
      mediaQuery.addListener(handleChange);
      // @ts-ignore
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Apply theme class to document
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

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

  if (!isAuthenticated) {
    return <LoginGate onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[var(--sys-bg)] text-[var(--sys-label)] transition-colors duration-300">
      <Hero theme={theme} onToggleTheme={toggleTheme} />
      
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
