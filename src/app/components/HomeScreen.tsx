import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { 
  Flame, 
  Trophy, 
  Clock, 
  BookOpen, 
  ChevronRight, 
  Star,
  Play,
  Award,
  Target,
  TrendingUp
} from 'lucide-react';

const quickPracticeItems = [
  { id: 1, title: 'Alphabet A-Z', icon: '🔤', progress: 65, color: 'from-blue-500 to-cyan-500' },
  { id: 2, title: 'Numbers 1-10', icon: '🔢', progress: 40, color: 'from-purple-500 to-pink-500' },
  { id: 3, title: 'Greetings', icon: '👋', progress: 80, color: 'from-orange-500 to-red-500' },
];

const recommendedLessons = [
  {
    id: 1,
    title: 'Basic Introductions',
    duration: '15 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80',
  },
  {
    id: 2,
    title: 'Common Phrases',
    duration: '20 min',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1634238917234-a581f86ae740?w=400&q=80',
  },
];

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 pt-12 pb-8 px-6 rounded-b-3xl shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1">Hello, Learner! 👋</h1>
              <p className="text-purple-100">Ready to practice today?</p>
            </div>
            <button className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center"
            >
              <Flame className="w-6 h-6 text-orange-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-xs text-purple-100">Day Streak</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center"
            >
              <Trophy className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-xs text-purple-100">Completed</div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center"
            >
              <Clock className="w-6 h-6 text-blue-300 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">45</div>
              <div className="text-xs text-purple-100">Minutes</div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 -mt-4">
        {/* Continue Learning Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
              <p className="text-sm text-gray-600">Lesson 5 of 20</p>
            </div>
            <Target className="w-8 h-8 text-purple-600" />
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Overall Progress</span>
              <span className="text-sm font-bold text-purple-600">25%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '25%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              />
            </div>
          </div>

          <button
            onClick={() => navigate('/app/lesson/5')}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Continue Lesson
          </button>
        </motion.div>

        {/* Quick Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Quick Practice</h2>
            <button className="text-purple-600 font-medium text-sm flex items-center gap-1">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid gap-3">
            {quickPracticeItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => navigate('/app/practice')}
                className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
                    {item.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-600">{item.progress}%</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Recommended Lessons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
            <button 
              onClick={() => navigate('/app/categories')}
              className="text-purple-600 font-medium text-sm flex items-center gap-1"
            >
              Browse
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid gap-4">
            {recommendedLessons.map((lesson, index) => (
              <motion.button
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => navigate(`/app/lesson/${lesson.id}`)}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden text-left"
              >
                <div className="flex gap-4">
                  <img
                    src={lesson.image}
                    alt={lesson.title}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 py-4 pr-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{lesson.title}</h3>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {lesson.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {lesson.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Daily Goal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 text-white shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold mb-1">Daily Goal</h3>
              <p className="text-sm text-emerald-100">3 of 5 lessons completed</p>
            </div>
            <TrendingUp className="w-8 h-8 text-emerald-200" />
          </div>
          
          <div className="h-3 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-full bg-white rounded-full"
            />
          </div>
          
          <p className="text-sm text-emerald-100 mt-3">
            Keep it up! Just 2 more lessons to reach your daily goal! 🎯
          </p>
        </motion.div>
      </div>
    </div>
  );
}
