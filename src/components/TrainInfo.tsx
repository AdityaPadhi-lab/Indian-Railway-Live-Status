import React from 'react';
import { Clock, AlertTriangle, MapPin } from 'lucide-react';

interface TrainInfoProps {
  train: any;
}

export const TrainInfo: React.FC<TrainInfoProps> = ({ train }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-1">{train.name}</h2>
        <div className="text-slate-400">Train #{train.number}</div>
      </div>

      {/* Current Status */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-emerald-400 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">Running On Time</span>
        </div>
        <div className="text-slate-300">
          Currently between {train.currentLocation}
        </div>
      </div>

      {/* Next Station */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-slate-400 mb-3">NEXT STATION</h3>
        <div className="flex items-start gap-3 bg-slate-700/50 rounded-lg p-4">
          <MapPin className="h-5 w-5 text-purple-400 mt-1" />
          <div>
            <div className="font-medium">{train.nextStation}</div>
            <div className="text-sm text-slate-400 mt-1">
              Arrival: {train.nextArrival}
            </div>
          </div>
        </div>
      </div>

      {/* Station List */}
      <div>
        <h3 className="text-sm font-medium text-slate-400 mb-3">ROUTE STATIONS</h3>
        <div className="space-y-4">
          {train.stations.map((station: any, index: number) => (
            <div
              key={station.name}
              className="flex items-start gap-3 relative"
            >
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${
                  index < train.currentStationIndex ? 'bg-emerald-400' :
                  index === train.currentStationIndex ? 'bg-blue-400 animate-pulse' :
                  'bg-slate-600'
                }`} />
                {index < train.stations.length - 1 && (
                  <div className="w-0.5 h-8 bg-slate-700" />
                )}
              </div>
              <div>
                <div className="font-medium">{station.name}</div>
                <div className="text-sm text-slate-400">
                  {station.arrival} - {station.departure}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}