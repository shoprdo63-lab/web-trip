import { Mountain, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="about" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Mountain className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl">שבילי ישראל</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              המקום המושלם לגלות מסלולי טיולים קצרים ויפים בכל רחבי ישראל.
              מים, מדבר, הרים ויערות - לכל אחד יש מסלול משלו.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => document.getElementById('trails')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-400 transition">מסלולים</button></li>
              <li><button onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-primary-400 transition">מפת המסלולים</button></li>
              <li><button className="hover:text-primary-400 transition">מדריכי טיולים</button></li>
              <li><button className="hover:text-primary-400 transition">בטיחות בטבע</button></li>
              <li><button className="hover:text-primary-400 transition">צור קשר</button></li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="font-bold text-lg mb-4">במספרים</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex justify-between">
                <span>מסלולים באתר</span>
                <span className="font-bold text-primary-400">200+</span>
              </div>
              <div className="flex justify-between">
                <span>אזורים בישראל</span>
                <span className="font-bold text-primary-400">12</span>
              </div>
              <div className="flex justify-between">
                <span>מטיילים בחודש</span>
                <span className="font-bold text-primary-400">15,000+</span>
              </div>
              <div className="flex justify-between">
                <span>דירוג ממוצע</span>
                <span className="font-bold text-primary-400">4.8/5</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            נבנה עם <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> לטבע של ישראל
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2024 שבילי ישראל. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
