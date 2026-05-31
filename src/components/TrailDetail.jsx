import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Clock, Route, MapPin, Calendar, Car, Sparkles } from 'lucide-react';
import Comments from './Comments';

const typeLabels = {
  water: 'מים',
  desert: 'מדבר',
  forest: 'יער',
  mountain: 'הר',
};

const diffLabels = {
  easy: 'קל',
  medium: 'בינוני',
  hard: 'קשה',
};

export default function TrailDetail({ trail, onClose }) {
  if (!trail) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl my-8 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image */}
          <div className="relative h-72">
            <img src={trail.image} alt={trail.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/40 backdrop-blur text-white p-2 rounded-full transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 right-4 text-white text-right">
              <div className="flex gap-2 mb-2">
                <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {typeLabels[trail.type]}
                </span>
                <span className="bg-ocean-600 px-3 py-1 rounded-full text-sm font-medium">
                  {diffLabels[trail.difficulty]}
                </span>
              </div>
              <h2 className="text-3xl font-bold">{trail.name}</h2>
            </div>
          </div>

          <div className="p-8">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-sand-50 rounded-xl p-4 text-center">
                <Clock className="w-5 h-5 mx-auto mb-1 text-primary-600" />
                <div className="font-bold text-gray-800">{trail.duration}</div>
                <div className="text-sm text-gray-500">משך</div>
              </div>
              <div className="bg-sand-50 rounded-xl p-4 text-center">
                <Route className="w-5 h-5 mx-auto mb-1 text-primary-600" />
                <div className="font-bold text-gray-800">{trail.distance}</div>
                <div className="text-sm text-gray-500">מרחק</div>
              </div>
              <div className="bg-sand-50 rounded-xl p-4 text-center">
                <Star className="w-5 h-5 mx-auto mb-1 text-amber-500 fill-amber-500" />
                <div className="font-bold text-gray-800">{trail.rating}</div>
                <div className="text-sm text-gray-500">דירוג</div>
              </div>
              <div className="bg-sand-50 rounded-xl p-4 text-center">
                <MapPin className="w-5 h-5 mx-auto mb-1 text-primary-600" />
                <div className="font-bold text-gray-800">{trail.region}</div>
                <div className="text-sm text-gray-500">אזור</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">אודות המסלול</h3>
              <p className="text-gray-600 leading-relaxed">{trail.description}</p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-3">נקודות עניין</h3>
              <div className="flex flex-wrap gap-2">
                {trail.highlights.map((h, i) => (
                  <span key={i} className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-ocean-50 rounded-xl p-4">
                <Calendar className="w-5 h-5 text-ocean-600" />
                <div>
                  <div className="font-medium text-gray-800">עונה מומלצת</div>
                  <div className="text-sm text-gray-600">{trail.bestTime}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-ocean-50 rounded-xl p-4">
                <Car className="w-5 h-5 text-ocean-600" />
                <div>
                  <div className="font-medium text-gray-800">חניה</div>
                  <div className="text-sm text-gray-600">{trail.parking}</div>
                </div>
              </div>
            </div>

            {/* Comments */}
            <Comments trailId={trail.id} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
