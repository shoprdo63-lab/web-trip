import { motion } from 'framer-motion';
import TrailCard from './TrailCard';

export default function TrailList({ trails, onTrailClick }) {
  return (
    <section id="trails" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">מסלולים מומלצים</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            גלו את המסלולים היפים ביותר בישראל - בריכות טבעיות, נופי מדבר, יערות ועוד
          </p>
        </motion.div>

        {trails.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">לא נמצאו מסלולים התואמים את החיפוש</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trails.map((trail) => (
              <TrailCard key={trail.id} trail={trail} onClick={onTrailClick} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
