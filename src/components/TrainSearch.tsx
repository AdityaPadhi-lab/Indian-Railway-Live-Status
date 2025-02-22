import React, { useState } from 'react';
import { Search, MapPin, Train } from 'lucide-react';
import { mockTrainData } from '../data/mockData';
import { stationData } from '../data/stationData';

interface TrainSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectTrain: (train: any) => void;
}

export const TrainSearch: React.FC<TrainSearchProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectTrain,
}) => {
  const [activeTab, setActiveTab] = useState<'trains' | 'stations'>('trains');

  const filteredTrains = mockTrainData.filter(train =>
    train.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.number.toString().includes(searchQuery)
  );

  const filteredStations = stationData.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
        <input
          type="text"
          placeholder={activeTab === 'trains' ? "Search train by number or name..." : "Search stations by name, code or state..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-800 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Search Tabs */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setActiveTab('trains')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'trains'
              ? 'bg-blue-500 text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <Train className="h-4 w-4" />
            Trains
          </div>
        </button>
        <button
          onClick={() => setActiveTab('stations')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'stations'
              ? 'bg-blue-500 text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Stations
          </div>
        </button>
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="absolute w-full mt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden z-10 max-h-96 overflow-y-auto">
          {activeTab === 'trains' ? (
            // Train Results
            filteredTrains.map(train => (
              <button
                key={train.number}
                onClick={() => {
                  onSelectTrain(train);
                  setSearchQuery('');
                }}
                className="w-full px-4 py-3 text-left hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-blue-400 mt-1" />
                  <div>
                    <div className="font-medium">{train.name}</div>
                    <div className="text-sm text-slate-400">Train #{train.number}</div>
                  </div>
                </div>
              </button>
            ))
          ) : (
            // Station Results
            filteredStations.map(station => (
              <div
                key={station.code}
                className="px-4 py-3 border-b border-slate-700 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-purple-400 mt-1" />
                  <div>
                    <div className="font-medium">{station.name}</div>
                    <div className="text-sm text-slate-400">
                      {station.code} • {station.state}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {((activeTab === 'trains' && filteredTrains.length === 0) ||
            (activeTab === 'stations' && filteredStations.length === 0)) && (
            <div className="px-4 py-3 text-slate-400 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
};