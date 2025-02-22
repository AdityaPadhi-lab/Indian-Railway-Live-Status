import React, { useState } from 'react';
import { Search, Train, Clock, MapPin, AlertTriangle, ThermometerSun } from 'lucide-react';
import { TrainMap } from './components/TrainMap';
import { TrainSearch } from './components/TrainSearch';
import { TrainInfo } from './components/TrainInfo';
import { WeatherOverlay } from './components/WeatherOverlay';
import { mockTrainData } from './data/mockData';

function App() {
  const [selectedTrain, setSelectedTrain] = useState(mockTrainData[0]);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Weather Effects Overlay */}
      <WeatherOverlay />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Train className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Indian Railways Live Status
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="h-5 w-5 text-blue-400" />
              <span className="text-slate-300">
                {new Date().toLocaleTimeString('en-IN')}
              </span>
            </div>
          </div>
        </header>

        {/* Search Section */}
        <TrainSearch 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSelectTrain={setSelectedTrain}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Train Information Panel */}
          <div className="lg:col-span-1">
            <TrainInfo train={selectedTrain} />
          </div>

          {/* Map Section */}
          <div className="lg:col-span-2 bg-slate-800 rounded-xl overflow-hidden h-[600px]">
            <TrainMap train={selectedTrain} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;