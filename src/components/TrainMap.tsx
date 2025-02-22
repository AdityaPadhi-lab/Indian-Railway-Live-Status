import React from 'react';
import { MapPin } from 'lucide-react';

interface TrainMapProps {
  train: any;
}

export const TrainMap: React.FC<TrainMapProps> = ({ train }) => {
  return (
    <div className="relative w-full h-full bg-slate-800 rounded-xl overflow-hidden">
      {/* Simulated Map Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Train Route Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4/5 h-1 bg-blue-500/30 relative">
          {/* Animated Train Position */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"
            style={{
              left: `${train.progress}%`,
              transition: 'left 1s ease-in-out',
            }}
          >
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
          </div>

          {/* Station Markers */}
          {train.stations.map((station: any, index: number) => (
            <div
              key={station.name}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${(index / (train.stations.length - 1)) * 100}%` }}
            >
              <MapPin className="h-4 w-4 text-purple-400 -translate-x-1/2" />
              <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-slate-300">
                {station.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}