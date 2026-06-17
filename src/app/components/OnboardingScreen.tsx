import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Hand, Video, Users, ChevronRight, ChevronLeft } from 'lucide-react';

const onboardingData = [
  {
    icon: Hand,
    title: "Learn Sign Language Easily",
    description: "Master sign language at your own pace with step-by-step video lessons designed for all skill levels.",
    color: "from-blue-500 to-purple-500",
    illustration: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    icon: Video,
    title: "Practice with Interactive Videos",
    description: "Watch HD video demonstrations and practice with real-time AI-powered feedback to perfect your signs.",
    color: "from-purple-500 to-pink-500",
    illustration: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
  },
  {
    icon: Users,
    title: "Communicate Without Barriers",
    description: "Join a supportive community and break down communication barriers. Connect with learners worldwide.",
    color: "from-pink-500 to-rose-500",
    illustration: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
  },
];

export function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/auth');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate('/auth');
  };

  const current = onboardingData[currentStep];
  const Icon = current.icon;

  return (
    <div className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Skip Button */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={handleSkip}
          className="text-gray-500 hover:text-gray-700 font-medium px-4 py-2"
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            {/* Illustration Area */}
            <div className={`relative h-1/2 bg-gradient-to-br ${current.color} flex items-center justify-center p-8`}>
              <div className="w-72 h-72 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl">
                <Icon className="w-32 h-32 text-white" />
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-20 right-12 w-16 h-16 bg-white/30 rounded-full"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-32 left-12 w-12 h-12 bg-white/30 rounded-full"
              />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-between p-8">
              <div className="text-center max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {current.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2 mb-8">
                {onboardingData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentStep
                        ? 'w-8 bg-purple-600'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handlePrevious}
                    className="flex-1 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className={`py-4 rounded-full bg-gradient-to-r ${current.color} text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 ${
                    currentStep > 0 ? 'flex-1' : 'w-full'
                  }`}
                >
                  {currentStep === onboardingData.length - 1 ? "Get Started" : "Next"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
