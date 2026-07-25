import React, { useState, useEffect } from 'react';

interface LoginGateProps {
  onSuccess: () => void;
}

export const LoginGate: React.FC<LoginGateProps> = ({ onSuccess }) => {
  const [pin, setPin] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      const nextPin = pin + num;
      setPin(nextPin);
      setError(false);
      if (nextPin.length === 4) {
        if (nextPin === '0000') {
          setTimeout(() => {
            onSuccess();
          }, 150);
        } else {
          setTimeout(() => {
            setError(true);
            setPin('');
          }, 200);
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
    setError(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--sys-bg)] px-6 text-[var(--sys-label)] transition-colors duration-300">
      <div className="w-full max-w-sm flex flex-col items-center animate-fade-slide">
        {/* Header Icon */}
        <div className="w-16 h-16 rounded-full bg-[var(--sys-fill-tertiary)] flex items-center justify-center mb-6 text-2xl shadow-sm border border-[var(--sys-card-border)]">
          🔒
        </div>
        
        <h1 className="text-2xl font-bold tracking-tight mb-2">California Trip</h1>
        <p className="text-sm text-[var(--sys-label-secondary)] mb-8 text-center">
          Inserisci il PIN di sicurezza per accedere
        </p>

        {/* PIN Indicators */}
        <div className="flex gap-4 mb-10">
          {[0, 1, 2, 3].map((idx) => {
            const filled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-200 border ${
                  error
                    ? 'bg-[var(--sys-red)] border-[var(--sys-red)] animate-bounce'
                    : filled
                    ? 'bg-[var(--sys-blue)] border-[var(--sys-blue)] scale-110'
                    : 'bg-transparent border-[var(--sys-label-tertiary)]'
                }`}
              />
            );
          })}
        </div>

        {error && (
          <p className="text-xs text-[var(--sys-red)] font-semibold -mt-6 mb-6 animate-pulse">
            PIN errato. Riprova.
          </p>
        )}

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-[280px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
            <button
              key={num}
              onClick={() => handleKeyPress(num)}
              className="w-16 h-16 rounded-full bg-[var(--sys-fill-secondary)] hover:bg-[var(--sys-fill)] active:scale-95 transition-all flex items-center justify-center text-xl font-semibold mx-auto border border-[var(--sys-card-border)]"
            >
              {num}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleKeyPress('0')}
            className="w-16 h-16 rounded-full bg-[var(--sys-fill-secondary)] hover:bg-[var(--sys-fill)] active:scale-95 transition-all flex items-center justify-center text-xl font-semibold mx-auto border border-[var(--sys-card-border)]"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="w-16 h-16 rounded-full bg-transparent hover:bg-[var(--sys-fill-tertiary)] active:scale-95 transition-all flex items-center justify-center text-sm font-medium mx-auto text-[var(--sys-label-secondary)]"
          >
            ⌫
          </button>
        </div>
      </div>
    </div>
  );
};
