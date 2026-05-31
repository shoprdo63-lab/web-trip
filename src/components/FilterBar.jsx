import { useState } from 'react';
import { Search, Droplets, Sun, Trees, Mountain, MapPin } from 'lucide-react';

const types = [
  { key: 'all', label: 'הכל', icon: MapPin },
  { key: 'water', label: 'מים', icon: Droplets },
  { key: 'desert', label: 'מדבר', icon: Sun },
  { key: 'forest', label: 'יער', icon: Trees },
  { key: 'mountain', label: 'הר', icon: Mountain },
];

const difficulties = [
  { key: 'all', label: 'כל הרמות' },
  { key: 'easy', label: 'קל' },
  { key: 'medium', label: 'בינוני' },
  { key: 'hard', label: 'קשה' },
];

const regions = [
  { key: 'all', label: 'כל הארץ' },
  { key: 'ים המלח', label: 'ים המלח' },
  { key: 'אילת', label: 'אילת' },
  { key: 'גליל עליון', label: 'גליל' },
  { key: 'רמת הגולן', label: 'גולן' },
  { key: 'הנגב', label: 'נגב' },
  { key: 'ירושלים', label: 'ירושלים' },
  { key: 'תל אביב', label: 'תל אביב' },
  { key: 'חיפה', label: 'חיפה' },
];

export default function FilterBar({ onFilter }) {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [difficulty, setDifficulty] = useState('all');
  const [region, setRegion] = useState('all');

  const handleChange = (updates) => {
    const newFilters = { search, type, difficulty, region, ...updates };
    setSearch(newFilters.search);
    setType(newFilters.type);
    setDifficulty(newFilters.difficulty);
    setRegion(newFilters.region);
    onFilter(newFilters);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="חפשו מסלול..."
          value={search}
          onChange={(e) => handleChange({ search: e.target.value })}
          className="w-full pr-12 pl-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-right"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        {/* Type */}
        <div className="flex gap-2 flex-wrap">
          {types.map((t) => (
            <button
              key={t.key}
              onClick={() => handleChange({ type: t.key })}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${
                type === t.key
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Difficulty */}
        <div className="flex gap-2 flex-wrap">
          {difficulties.map((d) => (
            <button
              key={d.key}
              onClick={() => handleChange({ difficulty: d.key })}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                difficulty === d.key
                  ? 'bg-ocean-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Region */}
        <select
          value={region}
          onChange={(e) => handleChange({ region: e.target.value })}
          className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 focus:border-primary-500 outline-none bg-white text-right"
        >
          {regions.map((r) => (
            <option key={r.key} value={r.key}>{r.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
