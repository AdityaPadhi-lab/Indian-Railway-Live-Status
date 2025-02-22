import React from 'react';

export const WeatherOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Rain Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/20" />
      
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 bg-white/20 animate-rain"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 100}%`,
            height: `${Math.random() * 30 + 10}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 1 + 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}