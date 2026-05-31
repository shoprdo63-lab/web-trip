import { motion } from 'framer-motion';
import { MapPin, Map, Users, Star } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Israel landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            גלו את <span className="text-primary-400">הטבע</span>
            <br />
            של ישראל
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            מאות מסלולי טיולים קצרים ומדהימים בכל רחבי הארץ - מים, מדבר, הרים ויערות
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollTo('trails')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl"
            >
              גלו מסלולים
            </button>
            <button
              onClick={() => scrollTo('map')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-lg transition border border-white/30"
            >
              צפו במפה
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { id: 'routes', icon: Map, label: 'מסלולים', value: '200+' },
            { id: 'sites', icon: MapPin, label: 'אתרים', value: '150+' },
            { id: 'hikers', icon: Users, label: 'מטיילים', value: '50K+' },
            { id: 'rating', icon: Star, label: 'דירוג ממוצע', value: '4.8' },
          ].map((stat) => (
            <div key={stat.id} className="bg-white/10 backdrop-blur rounded-xl p-4 text-white border border-white/20">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-400" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
