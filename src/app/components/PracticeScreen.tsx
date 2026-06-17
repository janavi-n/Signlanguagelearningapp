import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  CameraOff, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Info,
  Award,
  Target,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const practiceWords = [
  { id: 1, word: 'Hello', emoji: '👋' },
  { id: 2, word: 'Thank You', emoji: '🙏' },
  { id: 3, word: 'Please', emoji: '🤲' },
  { id: 4, word: 'Yes', emoji: '✅' },
  { id: 5, word: 'No', emoji: '❌' },
];

export function PracticeScreen() {
  const [cameraActive, setCameraActive] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [practicing, setPracticing] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'analyzing' | null>(null);

  const currentWord = practiceWords[currentWordIndex];

  const toggleCamera = () => {
    setCameraActive(!cameraActive);
    if (cameraActive) {
      setPracticing(false);
      setFeedback(null);
    }
  };

  const startPractice = () => {
    setPracticing(true);
    setFeedback('analyzing');
    setAccuracy(0);

    // Simulate AI analysis
    setTimeout(() => {
      const randomAccuracy = Math.floor(Math.random() * 30) + 70; // 70-100%
      setAccuracy(randomAccuracy);
      setFeedback(randomAccuracy >= 80 ? 'correct' : 'incorrect');
    }, 2000);
  };

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev + 1) % practiceWords.length);
    setFeedback(null);
    setAccuracy(0);
    setPracticing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white pt-12 pb-6 px-6 shadow-sm">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Practice</h1>
          <p className="text-gray-600">Perfect your signs with real-time feedback</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Practice Word Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{currentWord.emoji}</div>
            <h2 className="text-3xl font-bold mb-2">Practice: "{currentWord.word}"</h2>
            <p className="text-purple-100">
              {practicing ? 'Hold your sign steady...' : 'Get ready to sign!'}
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {practiceWords.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentWordIndex
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Camera Interface */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative aspect-[3/4] bg-gray-900">
            {cameraActive ? (
              <>
                {/* Camera Preview Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm opacity-70">Camera Active</p>
                  </div>
                </div>

                {/* AI Detection Overlay */}
                {practicing && (
                  <div className="absolute inset-0">
                    {/* Hand Detection Frame */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-8 border-4 border-dashed border-purple-500 rounded-3xl"
                    >
                      {feedback === 'analyzing' && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2"
                        >
                          <Sparkles className="w-12 h-12 text-purple-500" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Detection Points */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute top-1/3 left-1/3 w-4 h-4 bg-purple-500 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                      className="absolute top-1/2 right-1/3 w-4 h-4 bg-pink-500 rounded-full shadow-lg"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                      className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <CameraOff className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-medium">Camera Off</p>
                  <p className="text-sm mt-2">Enable camera to start practicing</p>
                </div>
              </div>
            )}

            {/* Feedback Overlay */}
            <AnimatePresence>
              {feedback && feedback !== 'analyzing' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`absolute inset-0 flex items-center justify-center ${
                    feedback === 'correct' ? 'bg-emerald-500/90' : 'bg-red-500/90'
                  } backdrop-blur-sm`}
                >
                  <div className="text-center text-white">
                    {feedback === 'correct' ? (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        >
                          <CheckCircle2 className="w-24 h-24 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-3xl font-bold mb-2">Great Job!</h3>
                        <p className="text-xl">Accuracy: {accuracy}%</p>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-24 h-24 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold mb-2">Almost There!</h3>
                        <p className="text-xl">Accuracy: {accuracy}%</p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Camera Controls */}
          <div className="p-6 space-y-4">
            <div className="flex gap-3">
              <button
                onClick={toggleCamera}
                className={`flex-1 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  cameraActive
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                }`}
              >
                {cameraActive ? (
                  <>
                    <CameraOff className="w-5 h-5" />
                    Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="w-5 h-5" />
                    Start Camera
                  </>
                )}
              </button>
              <button
                onClick={nextWord}
                disabled={!cameraActive}
                className="px-6 py-4 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-xl font-semibold transition-all"
              >
                <RotateCw className="w-5 h-5" />
              </button>
            </div>

            {cameraActive && !practicing && feedback === null && (
              <button
                onClick={startPractice}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Start Practice
              </button>
            )}

            {feedback && feedback !== 'analyzing' && (
              <button
                onClick={nextWord}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                Next Word
                <RotateCw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Accuracy Meter */}
        {accuracy > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">Sign Accuracy</h3>
              <span className={`text-2xl font-bold ${
                accuracy >= 80 ? 'text-emerald-600' : 'text-orange-600'
              }`}>
                {accuracy}%
              </span>
            </div>
            <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${accuracy}%` }}
                transition={{ duration: 0.8 }}
                className={`h-full rounded-full ${
                  accuracy >= 80
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                    : 'bg-gradient-to-r from-orange-500 to-red-500'
                }`}
              />
            </div>
          </motion.div>
        )}

        {/* Suggestions Card */}
        {feedback === 'incorrect' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6"
          >
            <div className="flex gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 mb-2">Suggestions for Improvement</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Keep your hand at shoulder height</li>
                  <li>• Make sure your palm is facing forward</li>
                  <li>• Maintain a smooth, gentle motion</li>
                  <li>• Review the lesson video for reference</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">24</div>
            <div className="text-xs text-gray-600">Signs Practiced</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <Target className="w-6 h-6 text-pink-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">87%</div>
            <div className="text-xs text-gray-600">Avg Accuracy</div>
          </div>
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <TrendingUp className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">+12%</div>
            <div className="text-xs text-gray-600">This Week</div>
          </div>
        </div>
      </div>
    </div>
  );
}
