import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  Search, 
  Hash, 
  MessageCircle, 
  Smile, 
  Users,
  Coffee,
  Home as HomeIcon,
  Briefcase,
  Heart,
  Globe,
  Crown,
  Lock,
  CheckCircle2
} from 'lucide-react';

const categories = [
  {
    id: 1,
    title: 'Alphabet',
    icon: '🔤',
    description: 'Learn A-Z signs',
    lessons: 26,
    completed: 17,
    color: 'from-blue-500 to-cyan-500',
    IconComponent: Hash,
    locked: false,
  },
  {
    id: 2,
    title: 'Numbers',
    icon: '🔢',
    description: 'Count 0-100',
    lessons: 20,
    completed: 8,
    color: 'from-purple-500 to-pink-500',
    IconComponent: Hash,
    locked: false,
  },
  {
    id: 3,
    title: 'Common Words',
    icon: '💬',
    description: 'Essential vocabulary',
    lessons: 50,
    completed: 12,
    color: 'from-orange-500 to-red-500',
    IconComponent: MessageCircle,
    locked: false,
  },
  {
    id: 4,
    title: 'Emotions',
    icon: '😊',
    description: 'Express feelings',
    lessons: 30,
    completed: 5,
    color: 'from-pink-500 to-rose-500',
    IconComponent: Smile,
    locked: false,
  },
  {
    id: 5,
    title: 'Conversations',
    icon: '👥',
    description: 'Daily dialogues',
    lessons: 40,
    completed: 0,
    color: 'from-emerald-500 to-teal-500',
    IconComponent: Users,
    locked: false,
  },
  {
    id: 6,
    title: 'Food & Drink',
    icon: '☕',
    description: 'Mealtime signs',
    lessons: 35,
    completed: 0,
    color: 'from-amber-500 to-orange-500',
    IconComponent: Coffee,
    locked: true,
  },
  {
    id: 7,
    title: 'Family & Home',
    icon: '🏠',
    description: 'Household terms',
    lessons: 25,
    completed: 0,
    color: 'from-indigo-500 to-purple-500',
    IconComponent: HomeIcon,
    locked: true,
  },
  {
    id: 8,
    title: 'Work & School',
    icon: '💼',
    description: 'Professional signs',
    lessons: 45,
    completed: 0,
    color: 'from-slate-500 to-gray-600',
    IconComponent: Briefcase,
    locked: true,
  },
];

export function CategoriesScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredCategories = categories.filter(cat =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category: typeof categories[0]) => {
    if (!category.locked) {
      navigate(`/app/lesson/${category.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 shadow-sm">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Categories</h1>
          <p className="text-gray-600 mb-6">Choose a category to start learning</p>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-3.5 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-md mx-auto px-6 py-6">
        <div className="grid gap-4">
          {filteredCategories.map((category, index) => {
            const progress = category.lessons > 0 
              ? Math.round((category.completed / category.lessons) * 100) 
              : 0;
            const Icon = category.IconComponent;
            
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCategoryClick(category)}
                disabled={category.locked}
                className={`relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all overflow-hidden text-left ${
                  category.locked ? 'opacity-60' : ''
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full`} />
                
                <div className="relative p-6">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                      {category.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                        {category.locked ? (
                          <Lock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : category.completed > 0 ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        ) : null}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                      
                      {/* Stats */}
                      <div className="flex items-center gap-4 text-sm text-gray-700">
                        <span className="font-medium">{category.lessons} lessons</span>
                        {!category.locked && category.completed > 0 && (
                          <span className="text-purple-600 font-semibold">
                            {category.completed} completed
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {!category.locked && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Progress</span>
                        <span className="text-xs font-bold text-purple-600">{progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Locked Message */}
                  {category.locked && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                      <Lock className="w-4 h-4" />
                      <span>Complete previous categories to unlock</span>
                    </div>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
            <p className="text-gray-600">Try a different search term</p>
          </div>
        )}

        {/* Pro Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl mt-6"
        >
          <div className="flex items-center gap-4">
            <Crown className="w-12 h-12 text-yellow-200" />
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">Unlock All Categories</h3>
              <p className="text-sm text-orange-100">Get unlimited access to all lessons and features</p>
            </div>
          </div>
          <button className="w-full mt-4 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors">
            Upgrade to Pro
          </button>
        </motion.div>
      </div>
    </div>
  );
}
