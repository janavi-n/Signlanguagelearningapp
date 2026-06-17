import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  BookmarkCheck, 
  Award, 
  TrendingUp,
  Bell,
  Globe,
  Volume2,
  Eye,
  ChevronRight,
  LogOut,
  Shield,
  HelpCircle,
  Star,
  Flame,
  Target,
  Calendar
} from 'lucide-react';

const achievements = [
  { id: 1, title: '7-Day Streak', icon: '🔥', earned: true, date: 'Jun 10, 2026' },
  { id: 2, title: 'First Lesson', icon: '📚', earned: true, date: 'Jun 3, 2026' },
  { id: 3, title: '50 Signs Learned', icon: '⭐', earned: true, date: 'Jun 12, 2026' },
  { id: 4, title: 'Quiz Master', icon: '🏆', earned: true, date: 'Jun 15, 2026' },
  { id: 5, title: 'Community Helper', icon: '❤️', earned: false, date: null },
  { id: 6, title: '100 Signs Learned', icon: '💯', earned: false, date: null },
];

const savedLessons = [
  {
    id: 1,
    title: 'Basic Greetings',
    category: 'Common Words',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=200&q=80',
  },
  {
    id: 2,
    title: 'Family Members',
    category: 'Conversations',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1634238917234-a581f86ae740?w=200&q=80',
  },
  {
    id: 3,
    title: 'Numbers 1-20',
    category: 'Numbers',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200&q=80',
  },
];

const weeklyActivity = [
  { day: 'Mon', minutes: 25 },
  { day: 'Tue', minutes: 30 },
  { day: 'Wed', minutes: 20 },
  { day: 'Thu', minutes: 45 },
  { day: 'Fri', minutes: 35 },
  { day: 'Sat', minutes: 40 },
  { day: 'Sun', minutes: 0 },
];

export function ProfileScreen() {
  const [activeTab, setActiveTab] = useState<'overview' | 'saved' | 'achievements' | 'settings'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 pt-12 pb-20 px-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <div className="max-w-md mx-auto px-6 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-6"
        >
          <div className="flex items-start gap-4 mb-6">
            {/* Avatar */}
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl shadow-lg">
              👤
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Guest User</h2>
              <p className="text-gray-600 mb-2">Learning since June 2026</p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Beginner
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                  Level 3
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Flame className="w-5 h-5 text-orange-500 mr-1" />
                <span className="text-2xl font-bold text-gray-900">7</span>
              </div>
              <div className="text-xs text-gray-600">Day Streak</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Award className="w-5 h-5 text-purple-600 mr-1" />
                <span className="text-2xl font-bold text-gray-900">12</span>
              </div>
              <div className="text-xs text-gray-600">Badges</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-1">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span className="text-2xl font-bold text-gray-900">1890</span>
              </div>
              <div className="text-xs text-gray-600">Points</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md mb-6 overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === 'saved'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600'
              }`}
            >
              Saved
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === 'achievements'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600'
              }`}
            >
              Badges
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-3 text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'text-purple-600 border-b-2 border-purple-600'
                  : 'text-gray-600'
              }`}
            >
              Settings
            </button>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Weekly Activity */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">Weekly Activity</h3>
                    <Calendar className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    {weeklyActivity.map((day) => {
                      const maxMinutes = 45;
                      const height = (day.minutes / maxMinutes) * 100;
                      return (
                        <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                          <div className="w-full h-32 bg-gray-100 rounded-lg overflow-hidden flex items-end">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className={`w-full rounded-t-lg ${
                                day.minutes > 0
                                  ? 'bg-gradient-to-t from-purple-600 to-pink-600'
                                  : 'bg-gray-200'
                              }`}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-600">{day.day}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    Total: <span className="font-bold text-purple-600">195 minutes</span> this week
                  </div>
                </div>

                {/* Learning Progress */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Learning Progress</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Alphabet</span>
                        <span className="text-sm font-bold text-purple-600">65%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '65%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Numbers</span>
                        <span className="text-sm font-bold text-purple-600">40%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Common Words</span>
                        <span className="text-sm font-bold text-purple-600">24%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" style={{ width: '24%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Saved Lessons Tab */}
            {activeTab === 'saved' && (
              <div className="space-y-3">
                {savedLessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <img
                      src={lesson.image}
                      alt={lesson.title}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{lesson.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{lesson.category}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-600 rounded-full"
                            style={{ width: `${lesson.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600">{lesson.progress}%</span>
                      </div>
                    </div>
                    <BookmarkCheck className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  </motion.div>
                ))}
                {savedLessons.length === 0 && (
                  <div className="text-center py-8">
                    <BookmarkCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-600">No saved lessons yet</p>
                  </div>
                )}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-4 rounded-2xl text-center ${
                      achievement.earned
                        ? 'bg-gradient-to-br from-purple-100 to-pink-100'
                        : 'bg-gray-100 opacity-60'
                    }`}
                  >
                    <div className={`text-4xl mb-2 ${achievement.earned ? '' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {achievement.title}
                    </h4>
                    {achievement.earned ? (
                      <p className="text-xs text-gray-600">{achievement.date}</p>
                    ) : (
                      <p className="text-xs text-gray-500">Locked</p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Preferences
                </h3>
                
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Notifications</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Language</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Sound Effects</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Accessibility</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-6">
                  Account
                </h3>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Privacy & Security</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-900">Help & Support</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-xl transition-colors mt-4">
                  <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-red-600">Log Out</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Upgrade Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">👑</div>
            <div>
              <h3 className="text-xl font-bold mb-1">Upgrade to Premium</h3>
              <p className="text-orange-100 text-sm">Unlock all features and content</p>
            </div>
          </div>
          <ul className="space-y-2 mb-4 text-sm">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              Unlimited access to all lessons
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              Offline mode for learning anywhere
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-white rounded-full" />
              Advanced AI feedback
            </li>
          </ul>
          <button className="w-full py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors">
            Get Premium
          </button>
        </motion.div>
      </div>
    </div>
  );
}
