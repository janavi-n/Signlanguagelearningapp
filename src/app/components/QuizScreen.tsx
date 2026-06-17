import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Trophy,
  RotateCcw,
  Home,
  Share2,
  Star
} from 'lucide-react';

const quizQuestions = [
  {
    id: 1,
    question: "What does this sign mean?",
    image: "https://images.unsplash.com/photo-1634238917234-a581f86ae740?w=400&q=80",
    options: ["Hello", "Goodbye", "Thank You", "Please"],
    correct: 0,
  },
  {
    id: 2,
    question: "Select the correct sign for 'Thank You'",
    type: "match",
    options: [
      { id: 1, sign: "🙏", label: "Thank You" },
      { id: 2, sign: "👋", label: "Hello" },
      { id: 3, sign: "👍", label: "Good" },
      { id: 4, sign: "❤️", label: "Love" },
    ],
    correct: 0,
  },
  {
    id: 3,
    question: "Which hand position represents the letter 'A'?",
    options: ["Fist with thumb on side", "Open palm", "Pointing finger", "Peace sign"],
    correct: 0,
  },
  {
    id: 4,
    question: "What facial expression accompanies this sign?",
    image: "https://images.unsplash.com/photo-1634238917234-a581f86ae740?w=400&q=80",
    options: ["Smile", "Neutral", "Frown", "Surprise"],
    correct: 0,
  },
  {
    id: 5,
    question: "Match the sign with its meaning",
    type: "match",
    options: [
      { id: 1, sign: "✌️", label: "Peace" },
      { id: 2, sign: "👌", label: "OK" },
      { id: 3, sign: "👎", label: "No" },
      { id: 4, sign: "🤟", label: "I Love You" },
    ],
    correct: 3,
  },
];

export function QuizScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === question.correct;
    setShowResult(true);
    setAnswers([...answers, isCorrect]);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizComplete(false);
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            {/* Trophy Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className={`w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center ${
                percentage >= 80
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500'
                  : percentage >= 60
                  ? 'bg-gradient-to-br from-blue-400 to-purple-500'
                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
              }`}
            >
              <Trophy className="w-16 h-16 text-white" />
            </motion.div>

            {/* Results */}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
            <p className="text-gray-600 mb-6">
              {percentage >= 80
                ? 'Excellent work! 🎉'
                : percentage >= 60
                ? 'Good job! Keep practicing! 💪'
                : 'Keep learning! You\'re making progress! 📚'}
            </p>

            {/* Score Circle */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                <motion.circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke={percentage >= 80 ? '#10B981' : percentage >= 60 ? '#8B5CF6' : '#F59E0B'}
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: '0 502' }}
                  animate={{ strokeDasharray: `${(percentage / 100) * 502} 502` }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-600 mt-1">
                  {score} of {quizQuestions.length}
                </div>
              </div>
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + star * 0.1 }}
                >
                  <Star
                    className={`w-8 h-8 ${
                      percentage >= star * 30
                        ? 'text-yellow-500 fill-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={() => navigate('/app')}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </button>
              <button
                onClick={handleRetakeQuiz}
                className="w-full py-4 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Quiz
              </button>
              <button className="w-full py-4 text-purple-600 font-semibold hover:bg-purple-50 rounded-xl transition-all flex items-center justify-center gap-2">
                <Share2 className="w-5 h-5" />
                Share Results
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="text-center">
              <h1 className="font-bold text-gray-900">Quiz {id}</h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <span className="text-sm font-bold text-purple-600">
                {score}/{quizQuestions.length}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
            />
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {question.question}
              </h2>

              {/* Question Image */}
              {question.image && (
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={question.image}
                    alt="Sign demonstration"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}

              {/* Answer Options */}
              <div className="space-y-3">
                {question.type === "match" ? (
                  <div className="grid grid-cols-2 gap-3">
                    {question.options.map((option: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          selectedAnswer === index
                            ? showResult
                              ? index === question.correct
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-red-500 bg-red-50'
                              : 'border-purple-600 bg-purple-50'
                            : showResult && index === question.correct
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-4xl mb-2">{option.sign}</div>
                        <div className="font-medium text-gray-900">{option.label}</div>
                      </button>
                    ))}
                  </div>
                ) : (
                  question.options.map((option: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all ${
                        selectedAnswer === index
                          ? showResult
                            ? index === question.correct
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                              : 'border-red-500 bg-red-50 text-red-900'
                            : 'border-purple-600 bg-purple-50 text-purple-900'
                          : showResult && index === question.correct
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && (
                          <>
                            {index === question.correct && (
                              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                            )}
                            {selectedAnswer === index && index !== question.correct && (
                              <XCircle className="w-6 h-6 text-red-600" />
                            )}
                          </>
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Feedback */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl p-6 mb-6 ${
                  selectedAnswer === question.correct
                    ? 'bg-emerald-50 border-2 border-emerald-200'
                    : 'bg-red-50 border-2 border-red-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {selectedAnswer === question.correct ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className={`font-bold mb-1 ${
                      selectedAnswer === question.correct ? 'text-emerald-900' : 'text-red-900'
                    }`}>
                      {selectedAnswer === question.correct ? 'Correct! 🎉' : 'Not quite right'}
                    </h3>
                    <p className={selectedAnswer === question.correct ? 'text-emerald-800' : 'text-red-800'}>
                      {selectedAnswer === question.correct
                        ? 'Great job! You got it right!'
                        : 'The correct answer is highlighted above. Keep practicing!'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Button */}
            {!showResult ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
