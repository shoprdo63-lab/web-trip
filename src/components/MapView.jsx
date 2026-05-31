import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import { pois } from '../data/pois';
import { Fuel, Utensils, ShoppingBag, Eye, EyeOff } from 'lucide-react';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const trailIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#10b981;width:28px;height:28px;border-radius:50%;border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-weight:bold;">&#9874;</div>`,
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

const gasIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#ef4444;width:24px;height:24px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">⛽</span></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const restaurantIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#f59e0b;width:24px;height:24px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">🍽</span></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const foodIcon = new L.DivIcon({
  className: 'custom-div-icon',
  html: `<div style="background:#8b5cf6;width:24px;height:24px;border-radius:50%;border:2px solid white;box-shadow:0 2px 4px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;"><span style="color:white;font-size:10px;">🛒</span></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

function MapController({ selectedTrail }) {
  const map = useMap();
  if (selectedTrail) {
    map.setView(selectedTrail.coordinates, 13, { animate: true, duration: 1 });
  }
  return null;
}

export default function MapView({ trails, selectedTrail, onMarkerClick }) {
  const [showGas, setShowGas] = useState(true);
  const [showRestaurants, setShowRestaurants] = useState(true);
  const [showFood, setShowFood] = useState(true);

  return (
    <section id="map" className="py-20 px-4 bg-gradient-to-b from-sand-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">מפת המסלולים</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            גלו את כל המסלולים על המפה, מצאו תחנות דלק, מסעדות וחנויות מזון בסביבה
          </p>
        </div>

        {/* POI Toggles */}
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <button
            onClick={() => setShowGas(!showGas)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              showGas ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Fuel className="w-4 h-4" />
            תחנות דלק
            {showGas ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setShowRestaurants(!showRestaurants)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              showRestaurants ? 'bg-amber-100 text-amber-700' : 'bg-gray-100 text-gray-500'
            }`}
          >
            <Utensils className="w-4 h-4" />
            מסעדות
            {showRestaurants ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setShowFood(!showFood)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
              showFood ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-500'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            חנויות מזון
            {showFood ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ height: '600px' }}>
          <MapContainer
            center={[31.5, 34.8]}
            zoom={8}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapController selectedTrail={selectedTrail} />

            {/* Trail Markers */}
            {trails.map((trail) => (
              <Marker
                key={trail.id}
                position={trail.coordinates}
                icon={trailIcon}
                eventHandlers={{
                  click: () => onMarkerClick(trail),
                }}
              >
                <Popup className="custom-popup">
                  <div className="text-right" style={{ minWidth: '200px' }}>
                    <img src={trail.image} alt={trail.name} className="w-full h-24 object-cover rounded-lg mb-2" />
                    <h3 className="font-bold text-gray-800">{trail.name}</h3>
                    <p className="text-sm text-gray-500">{trail.region} &middot; {trail.distance}</p>
                    <p className="text-sm text-gray-600 mt-1">{trail.duration}</p>
                  </div>
                </Popup>
              </Marker>
            ))}

            {/* Trail Paths */}
            {trails.map((trail) => (
              trail.trailPath && (
                <Polyline
                  key={`path-${trail.id}`}
                  positions={trail.trailPath}
                  color="#10b981"
                  weight={3}
                  opacity={0.7}
                  dashArray="5, 10"
                />
              )
            ))}

            {/* Gas Stations */}
            {showGas && pois.gasStations.map((poi) => (
              <Marker key={`gas-${poi.id}`} position={[poi.lat, poi.lng]} icon={gasIcon}>
                <Popup><div className="text-right font-medium">{poi.name}</div></Popup>
              </Marker>
            ))}

            {/* Restaurants */}
            {showRestaurants && pois.restaurants.map((poi) => (
              <Marker key={`rest-${poi.id}`} position={[poi.lat, poi.lng]} icon={restaurantIcon}>
                <Popup><div className="text-right font-medium">{poi.name} - {poi.cuisine}</div></Popup>
              </Marker>
            ))}

            {/* Food Stores */}
            {showFood && pois.food.map((poi) => (
              <Marker key={`food-${poi.id}`} position={[poi.lat, poi.lng]} icon={foodIcon}>
                <Popup><div className="text-right font-medium">{poi.name}</div></Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
