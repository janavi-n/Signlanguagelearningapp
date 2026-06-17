import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Video, Users, Sparkles, ArrowRight } from "lucide-react";

const onboardingSlides = [
  {
    icon: Video,
    title: "Learn Sign Language Easily",
    description: "Master sign language with interactive video lessons designed for all skill levels. Learn at your own pace with clear demonstrations.",
    color: "#667eea",
  },
  {
    icon: Sparkles,
    title: "Practice with AI Technology",
    description: "Use our AI-powered recognition system to practice signs and get instant feedback on your accuracy and technique.",
    color: "#764ba2",
  },
  {
    icon: Users,
    title: "Communicate Without Barriers",
    description: "Join a supportive community and break communication barriers. Connect with others and make a real difference.",
    color: "#f093fb",
  },
];

export function OnboardingFlow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < onboardingSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/auth");
    }
  };

  const handleSkip = () => {
    navigate("/auth");
  };

  const slide = onboardingSlides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Skip Button */}
      <div className="p-6 flex justify-end">
        <Button variant="ghost" onClick={handleSkip} className="text-gray-500">
          Skip
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-center max-w-md"
          >
            {/* Icon */}
            <motion.div
              className="w-32 h-32 rounded-3xl flex items-center justify-center mb-12"
              style={{
                background: `linear-gradient(135deg, ${slide.color}, ${slide.color}dd)`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Icon className="w-16 h-16 text-white" strokeWidth={2} />
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-3xl mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {slide.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="p-8 space-y-6">
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2">
          {onboardingSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-[#667eea]"
                    : "w-2 bg-gray-300 group-hover:bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          className="w-full h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a0] text-white rounded-2xl shadow-lg"
          size="lg"
        >
          {currentSlide === onboardingSlides.length - 1 ? "Get Started" : "Next"}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
