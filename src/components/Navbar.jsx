import { useState } from 'react';
import { Mountain, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button className="flex items-center gap-2" onClick={() => scrollTo('hero')}>
            <div className="bg-primary-600 p-2 rounded-lg">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-800">שבילי ישראל</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('trails')} className="text-gray-600 hover:text-primary-600 transition font-medium">מסלולים</button>
            <button onClick={() => scrollTo('map')} className="text-gray-600 hover:text-primary-600 transition font-medium">מפה</button>
            <button onClick={() => scrollTo('about')} className="text-gray-600 hover:text-primary-600 transition font-medium">אודות</button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => scrollTo('trails')} className="block w-full text-right py-2 text-gray-600">מסלולים</button>
            <button onClick={() => scrollTo('map')} className="block w-full text-right py-2 text-gray-600">מפה</button>
            <button onClick={() => scrollTo('about')} className="block w-full text-right py-2 text-gray-600">אודות</button>
          </div>
        </div>
      )}
    </nav>
  );
}
