import { motion } from 'framer-motion';
import { Star, Clock, Navigation, MapPin } from 'lucide-react';

const typeLabels = {
  water: { label: 'מים', className: 'tag-water' },
  desert: { label: 'מדבר', className: 'tag-desert' },
  forest: { label: 'יער', className: 'tag-forest' },
  mountain: { label: 'הר', className: 'tag-mountain' },
};

const diffLabels = {
  easy: { label: 'קל', className: 'tag-easy' },
  medium: { label: 'בינוני', className: 'tag-medium' },
  hard: { label: 'קשה', className: 'tag-hard' },
};

export default function TrailCard({ trail, onClick }) {
  const typeInfo = typeLabels[trail.type] || typeLabels.mountain;
  const diffInfo = diffLabels[trail.difficulty] || diffLabels.easy;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="trail-card bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
      onClick={() => onClick(trail)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={trail.image}
          alt={trail.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`tag ${typeInfo.className}`}>{typeInfo.label}</span>
          <span className={`tag ${diffInfo.className}`}>{diffInfo.label}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{trail.name}</h3>

        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{trail.region}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{trail.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{trail.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Navigation className="w-4 h-4" />
            <span>{trail.distance}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-semibold text-gray-800">{trail.rating}</span>
            <span className="text-gray-400 text-sm">({trail.reviews})</span>
          </div>
          <span className="text-primary-600 font-medium text-sm">לפרטים &larr;</span>
        </div>
      </div>
    </motion.div>
  );
}
