import { useState } from 'react';
import { Star, Send, User } from 'lucide-react';

const initialComments = {
  1: [
    { id: 1, name: "יוסי כהן", rating: 5, text: "מסלול מדהים! המים בבריכת דוד צלולים וקרירים. מושלם ליום חם.", date: "2024-05-15" },
    { id: 2, name: "מיכל לוי", rating: 4, text: "יפה מאוד אך עמוס בסופי שבוע. מומלץ להגיע מוקדם בבוקר.", date: "2024-04-22" },
  ],
  2: [
    { id: 1, name: "דוד אברהם", rating: 5, text: "חוויה מדהימה לעלות למצדה בזריחה. הנוף שווה כל רגע.", date: "2024-03-10" },
  ],
  5: [
    { id: 1, name: "רונית שמעון", rating: 5, text: "מקום קסום! המים כל כך קרירים והצמחייה מרשימה.", date: "2024-06-01" },
    { id: 2, name: "אלון בר", rating: 5, text: "המסלול המועדף על המשפחה שלנו. מתאים לילדים קטנים.", date: "2024-05-20" },
  ],
};

export default function Comments({ trailId }) {
  const [comments, setComments] = useState(initialComments[trailId] || []);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      rating,
      text: text.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    setComments([newComment, ...comments]);
    setName('');
    setText('');
    setRating(5);
  };

  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6">תגובות וחוות דעת ({comments.length})</h3>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="bg-sand-50 rounded-xl p-6 mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">הוסף תגובה</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="שמך"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-right"
          />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">דירוג:</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="transition"
                >
                  <Star
                    className={`w-6 h-6 ${
                      star <= rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        <textarea
          placeholder="ספרו על החוויה שלכם..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-right mb-4 resize-none"
        />
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium transition flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          שלח תגובה
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white border border-gray-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary-100 p-2 rounded-full">
                  <User className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{comment.name}</div>
                  <div className="text-sm text-gray-400">{comment.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-amber-700">{comment.rating}</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{comment.text}</p>
          </div>
        ))}

        {comments.length === 0 && (
          <p className="text-center text-gray-400 py-8">אין תגובות עדיין. היה הראשון לשתף!</p>
        )}
      </div>
    </div>
  );
}
