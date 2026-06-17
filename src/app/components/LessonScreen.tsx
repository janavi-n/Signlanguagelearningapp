import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Play, 
  Pause, 
  RotateCcw, 
  Bookmark, 
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Volume2,
  VolumeX,
  Maximize,
  Gauge,
  CheckCircle2,
  Circle
} from 'lucide-react';

const lessonSteps = [
  {
    id: 1,
    title: "Hand Position",
    description: "Start with your dominant hand in a relaxed position, palm facing forward.",
    completed: true,
  },
  {
    id: 2,
    title: "Finger Formation",
    description: "Curl your fingers slightly while keeping your thumb extended outward.",
    completed: true,
  },
  {
    id: 3,
    title: "Movement Pattern",
    description: "Move your hand in a gentle wave motion from left to right.",
    completed: false,
  },
  {
    id: 4,
    title: "Facial Expression",
    description: "Maintain a friendly smile to convey the welcoming nature of the greeting.",
    completed: false,
  },
];

export function LessonScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSteps, setShowSteps] = useState(true);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleSave = () => setIsSaved(!isSaved);
  const toggleMute = () => setIsMuted(!isMuted);

  const cyclePlaybackSpeed = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="font-bold text-gray-900">Lesson {id}</h1>
            <p className="text-sm text-gray-600">Basic Greetings</p>
          </div>
          <button
            onClick={toggleSave}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            {isSaved ? (
              <BookmarkCheck className="w-6 h-6 text-purple-600 fill-purple-600" />
            ) : (
              <Bookmark className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto pb-6">
        {/* Video Player */}
        <div className="bg-black relative aspect-video">
          {/* Video Placeholder */}
          <img
            src="https://images.unsplash.com/photo-1634238917234-a581f86ae740?w=800&q=80"
            alt="Sign language demonstration"
            className="w-full h-full object-cover"
          />

          {/* Playback Speed Indicator */}
          {playbackSpeed !== 1 && (
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="text-white text-sm font-medium">{playbackSpeed}x</span>
            </div>
          )}

          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-gray-900" />
              ) : (
                <Play className="w-10 h-10 text-gray-900 ml-1" />
              )}
            </motion.button>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-3">
              <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: isPlaying ? '100%' : '35%' }}
                  transition={{ duration: isPlaying ? 10 : 0 }}
                  className="h-full bg-purple-500"
                />
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
                <span className="text-white text-sm">0:35 / 1:20</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={cyclePlaybackSpeed}
                  className="px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-full transition-colors flex items-center gap-1"
                >
                  <Gauge className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-medium">{playbackSpeed}x</span>
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors">
                  <Maximize className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 py-4 flex gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(false)}
            className="flex-1 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Repeat
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/app/practice')}
            className="flex-1 py-3 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Practice Now
          </motion.button>
        </div>

        {/* Lesson Content */}
        <div className="px-6 space-y-4">
          {/* Lesson Info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Say "Hello"</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Learn how to greet someone in sign language. This is one of the most fundamental and widely used signs in everyday communication.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Beginner
              </span>
              <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                Greetings
              </span>
              <span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
                Essential
              </span>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setShowSteps(!showSteps)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-lg font-bold text-gray-900">Step-by-Step Guide</h3>
              {showSteps ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {showSteps && (
              <div className="px-6 pb-6 space-y-4">
                {lessonSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      {step.completed ? (
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                          <Circle className="w-5 h-5 text-gray-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Step {step.id}: {step.title}
                      </h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Tips Card */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-bold mb-2">💡 Pro Tip</h3>
            <p className="text-blue-50 leading-relaxed">
              Practice this sign in front of a mirror to ensure your hand position and movement are correct. Remember, facial expressions are just as important as the hand signs!
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Previous Lesson
            </button>
            <button 
              onClick={() => navigate(`/app/quiz/${id}`)}
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
            >
              Take Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
