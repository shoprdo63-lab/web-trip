import { useState, useMemo, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import TrailList from './components/TrailList';
import TrailDetail from './components/TrailDetail';
import Footer from './components/Footer';
import { trails } from './data/trails';

const MapView = lazy(() => import('./components/MapView'));

function App() {
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    difficulty: 'all',
    region: 'all',
  });
  const [selectedTrail, setSelectedTrail] = useState(null);

  const filteredTrails = useMemo(() => {
    return trails.filter((trail) => {
      const matchesSearch =
        filters.search === '' ||
        trail.name.includes(filters.search) ||
        trail.region.includes(filters.search) ||
        trail.description.includes(filters.search);

      const matchesType = filters.type === 'all' || trail.type === filters.type;
      const matchesDifficulty = filters.difficulty === 'all' || trail.difficulty === filters.difficulty;
      const matchesRegion = filters.region === 'all' || trail.region === filters.region;

      return matchesSearch && matchesType && matchesDifficulty && matchesRegion;
    });
  }, [filters]);

  const handleTrailClick = (trail) => {
    setSelectedTrail(trail);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseDetail = () => {
    setSelectedTrail(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen bg-sand-50 font-rubik" dir="rtl">
      <Navbar />
      <Hero />

      <div className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
        <FilterBar onFilter={setFilters} />
      </div>

      <TrailList trails={filteredTrails} onTrailClick={handleTrailClick} />
      <Suspense fallback={<div className="py-20 text-center text-gray-400">טוען מפה...</div>}>
        <MapView
          trails={filteredTrails}
          selectedTrail={selectedTrail}
          onMarkerClick={handleTrailClick}
        />
      </Suspense>

      {selectedTrail && (
        <TrailDetail trail={selectedTrail} onClose={handleCloseDetail} />
      )}

      <Footer />
    </div>
  );
}

export default App;
