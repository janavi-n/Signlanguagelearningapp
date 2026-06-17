import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  Camera,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
  Hand,
  ThumbsUp,
  AlertCircle,
} from "lucide-react";

const practicePrompts = [
  { sign: "A", difficulty: "Easy" },
  { sign: "B", difficulty: "Easy" },
  { sign: "C", difficulty: "Medium" },
  { sign: "Hello", difficulty: "Medium" },
  { sign: "Thank You", difficulty: "Hard" },
];

export function AIPracticeScreen() {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [completedSigns, setCompletedSigns] = useState(0);

  const currentPrompt = practicePrompts[currentPromptIndex];
  const totalPrompts = practicePrompts.length;

  useEffect(() => {
    if (isRecording) {
      // Simulate AI processing
      const timer = setTimeout(() => {
        const randomAccuracy = Math.floor(Math.random() * (100 - 70) + 70);
        setAccuracy(randomAccuracy);
        setFeedback(randomAccuracy >= 80 ? "correct" : "incorrect");
        setIsRecording(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isRecording]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setFeedback(null);
    setAccuracy(0);
  };

  const handleNext = () => {
    if (feedback === "correct") {
      setCompletedSigns(completedSigns + 1);
    }
    
    if (currentPromptIndex < totalPrompts - 1) {
      setCurrentPromptIndex(currentPromptIndex + 1);
      setFeedback(null);
      setAccuracy(0);
    } else {
      // Practice session complete
      navigate("/app");
    }
  };

  const handleReset = () => {
    setFeedback(null);
    setAccuracy(0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/app")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl">AI Practice</h1>
          <div className="w-10" />
        </div>

        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-white/80">
            Sign {currentPromptIndex + 1} of {totalPrompts}
          </span>
          <span className="text-sm text-white/80">
            {completedSigns} completed
          </span>
        </div>
        <Progress
          value={((currentPromptIndex + 1) / totalPrompts) * 100}
          className="h-2 bg-white/20"
        />
      </div>

      <div className="p-6 space-y-6">
        {/* Current Sign Prompt */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#667eea]" />
              <h2 className="text-gray-900">Practice this sign</h2>
            </div>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-2xl text-5xl mb-4">
              {currentPrompt.sign}
            </div>
            <Badge className={getDifficultyColor(currentPrompt.difficulty)}>
              {currentPrompt.difficulty}
            </Badge>
          </CardContent>
        </Card>

        {/* Camera Interface */}
        <Card className="border-0 shadow-lg overflow-hidden">
          <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
            {/* Camera Feed Placeholder */}
            <div className="text-center text-white">
              <Camera className="w-20 h-20 mx-auto mb-4 text-white/50" />
              <p className="text-white/70">Camera View</p>
              {isRecording && (
                <div className="mt-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 rounded-full animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full" />
                    <span className="text-sm">Recording...</span>
                  </div>
                </div>
              )}
            </div>

            {/* AI Feedback Overlay */}
            {feedback && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center text-white p-6">
                  {feedback === "correct" ? (
                    <>
                      <CheckCircle2 className="w-20 h-20 mx-auto mb-4 text-green-400" />
                      <h3 className="text-2xl mb-2">Great Job!</h3>
                      <p className="text-white/80 mb-4">
                        Your sign was recognized correctly
                      </p>
                      <div className="flex items-center justify-center gap-2 text-green-400">
                        <ThumbsUp className="w-5 h-5" />
                        <span className="text-xl">{accuracy}% Accurate</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-20 h-20 mx-auto mb-4 text-red-400" />
                      <h3 className="text-2xl mb-2">Try Again</h3>
                      <p className="text-white/80 mb-4">
                        Your sign wasn't quite right
                      </p>
                      <div className="flex items-center justify-center gap-2 text-red-400">
                        <AlertCircle className="w-5 h-5" />
                        <span className="text-xl">{accuracy}% Accurate</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Hand Position Guide */}
            {!isRecording && !feedback && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 text-white text-sm text-center">
                  <Hand className="w-5 h-5 mx-auto mb-1" />
                  Position your hand in the camera frame
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* AI Suggestions */}
        {feedback === "incorrect" && (
          <Card className="border-0 bg-orange-50">
            <CardContent className="p-5">
              <h3 className="text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-600" />
                AI Suggestions
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Try to keep your hand more centered in the frame</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Make sure all fingers are clearly visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Hold the position steady for better recognition</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Accuracy Meter */}
        {accuracy > 0 && (
          <Card className="border-0 shadow-md">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-900">Accuracy Score</h3>
                <span
                  className={`text-2xl ${
                    accuracy >= 80 ? "text-green-600" : "text-orange-600"
                  }`}
                >
                  {accuracy}%
                </span>
              </div>
              <Progress
                value={accuracy}
                className="h-3"
              />
              <p className="text-sm text-gray-500 mt-2">
                {accuracy >= 90
                  ? "Excellent! Perfect sign recognition"
                  : accuracy >= 80
                  ? "Good! Minor improvements possible"
                  : accuracy >= 70
                  ? "Keep practicing to improve accuracy"
                  : "Review the lesson and try again"}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          {!feedback ? (
            <Button
              onClick={handleStartRecording}
              disabled={isRecording}
              className="w-full h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a0] text-white rounded-xl disabled:opacity-50"
            >
              {isRecording ? (
                <>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Camera className="w-5 h-5 mr-2" />
                  Start Recording
                </>
              )}
            </Button>
          ) : (
            <div className="flex gap-3">
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1 h-14 rounded-xl"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Retry
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 h-14 bg-gradient-to-r from-[#667eea] to-[#764ba2] hover:from-[#5568d3] hover:to-[#6941a0] text-white rounded-xl"
              >
                {currentPromptIndex === totalPrompts - 1 ? "Finish" : "Next Sign"}
              </Button>
            </div>
          )}

          <Button
            onClick={() => navigate("/lesson/alphabet-basics")}
            variant="ghost"
            className="w-full"
          >
            View Lesson
          </Button>
        </div>

        {/* Tips */}
        <Card className="border-0 bg-blue-50">
          <CardContent className="p-5">
            <h3 className="text-gray-900 mb-2">💡 Practice Tips</h3>
            <p className="text-sm text-gray-700">
              For best results, practice in good lighting and keep your hand
              clearly visible in the camera frame. The AI learns from your
              practice to give better feedback.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
