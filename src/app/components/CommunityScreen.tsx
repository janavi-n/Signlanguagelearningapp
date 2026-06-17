import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Users, 
  Trophy, 
  Heart,
  MessageSquare,
  Share2,
  ThumbsUp,
  Award,
  Target,
  Zap,
  Crown,
  Sparkles
} from 'lucide-react';

const discussions = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=100&q=80',
      level: 'Advanced',
    },
    title: 'Tips for learning facial expressions',
    content: 'Just wanted to share my journey learning ASL facial expressions...',
    likes: 24,
    replies: 12,
    time: '2 hours ago',
    tags: ['Tips', 'Beginner'],
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?w=100&q=80',
      level: 'Intermediate',
    },
    title: 'Weekly practice group - Join us!',
    content: 'Looking for practice partners for conversation practice every Sunday...',
    likes: 18,
    replies: 8,
    time: '5 hours ago',
    tags: ['Practice', 'Community'],
  },
];

const challenges = [
  {
    id: 1,
    title: '7-Day Streak Challenge',
    description: 'Practice every day for a week',
    participants: 234,
    reward: '🔥 Fire Badge',
    progress: 5,
    total: 7,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 2,
    title: '100 Signs Challenge',
    description: 'Learn 100 different signs',
    participants: 156,
    reward: '⭐ Star Learner',
    progress: 67,
    total: 100,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Community Helper',
    description: 'Help 10 learners this month',
    participants: 89,
    reward: '❤️ Helper Badge',
    progress: 4,
    total: 10,
    color: 'from-emerald-500 to-teal-500',
  },
];

const topLearners = [
  { name: 'Emma Wilson', points: 2450, avatar: '👩', rank: 1 },
  { name: 'David Lee', points: 2340, avatar: '👨', rank: 2 },
  { name: 'Sophie Martin', points: 2190, avatar: '👧', rank: 3 },
  { name: 'James Brown', points: 2050, avatar: '🧔', rank: 4 },
  { name: 'You', points: 1890, avatar: '😊', rank: 5 },
];

export function CommunityScreen() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'challenges' | 'leaderboard'>('discussions');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 pt-12 pb-6 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Community</h1>
          <p className="text-purple-100">Connect with learners worldwide</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-md mx-auto px-6">
          <div className="flex gap-1 py-3">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'discussions'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Discussions</span>
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'challenges'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Target className="w-5 h-5" />
              <span className="hidden sm:inline">Challenges</span>
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex-1 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'leaderboard'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Trophy className="w-5 h-5" />
              <span className="hidden sm:inline">Leaderboard</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6">
        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-4">
            {/* New Post Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Start a Discussion
            </motion.button>

            {/* Discussion Posts */}
            {discussions.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="p-6">
                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {post.user.level}
                        </span>
                        <span>• {post.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="font-bold text-gray-900 mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.content}</p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 text-gray-600 border-t border-gray-100 pt-4">
                    <button className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                      <ThumbsUp className="w-5 h-5" />
                      <span className="font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-medium">{post.replies}</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-purple-600 transition-colors ml-auto">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-md overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${challenge.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
                      <p className="text-white/90 text-sm">{challenge.description}</p>
                    </div>
                    <div className="text-3xl">{challenge.reward.split(' ')[0]}</div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-bold">
                        {challenge.progress}/{challenge.total}
                      </span>
                    </div>
                    <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{challenge.participants} participants</span>
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                    Join
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Completed Challenges */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-6 text-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-12 h-12" />
                <div>
                  <h3 className="text-lg font-bold">Your Achievements</h3>
                  <p className="text-emerald-100 text-sm">8 challenges completed</p>
                </div>
              </div>
              <button className="w-full py-3 bg-white text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors">
                View All Badges
              </button>
            </div>
          </div>
        )}

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-4">
            {/* Top 3 Podium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 rounded-3xl p-6 text-white shadow-xl"
            >
              <div className="flex items-end justify-center gap-4 mb-6">
                {/* 2nd Place */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                    {topLearners[1].avatar}
                  </div>
                  <div className="w-20 h-24 bg-white/20 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">2</div>
                      <div className="text-xs opacity-90">{topLearners[1].points}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium mt-2">{topLearners[1].name.split(' ')[0]}</div>
                </div>

                {/* 1st Place */}
                <div className="text-center">
                  <Crown className="w-8 h-8 mx-auto mb-2 text-yellow-200" />
                  <div className="w-20 h-20 bg-yellow-300 rounded-full flex items-center justify-center text-3xl mb-2 mx-auto border-4 border-white">
                    {topLearners[0].avatar}
                  </div>
                  <div className="w-24 h-32 bg-white/30 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1</div>
                      <div className="text-xs opacity-90">{topLearners[0].points}</div>
                    </div>
                  </div>
                  <div className="text-sm font-bold mt-2">{topLearners[0].name.split(' ')[0]}</div>
                </div>

                {/* 3rd Place */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-300 rounded-full flex items-center justify-center text-2xl mb-2 mx-auto">
                    {topLearners[2].avatar}
                  </div>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-t-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-xs opacity-90">{topLearners[2].points}</div>
                    </div>
                  </div>
                  <div className="text-sm font-medium mt-2">{topLearners[2].name.split(' ')[0]}</div>
                </div>
              </div>
            </motion.div>

            {/* Leaderboard List */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {topLearners.slice(3).map((learner, index) => (
                <motion.div
                  key={learner.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 ${
                    learner.name === 'You' ? 'bg-purple-50' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {learner.rank}
                  </div>
                  <div className="text-3xl">{learner.avatar}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      {learner.name}
                      {learner.name === 'You' && (
                        <span className="px-2 py-0.5 bg-purple-600 text-white rounded-full text-xs">
                          You
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{learner.points} points</div>
                  </div>
                  <Zap className="w-5 h-5 text-yellow-500" />
                </motion.div>
              ))}
            </div>

            {/* Your Stats */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4">Your Stats This Week</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">+156</div>
                  <div className="text-xs text-purple-100">Points Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">#5</div>
                  <div className="text-xs text-purple-100">Your Rank</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">↑2</div>
                  <div className="text-xs text-purple-100">Rank Change</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
