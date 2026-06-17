import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  Play,
  Flame,
  Trophy,
  Clock,
  ArrowRight,
  Hand,
  Hash,
  MessageCircle,
  Heart,
  Sparkles,
} from "lucide-react";

const learningCategories = [
  { id: "alphabet", name: "Alphabet", icon: Hand, color: "#667eea", progress: 45 },
  { id: "numbers", name: "Numbers", icon: Hash, color: "#764ba2", progress: 30 },
  { id: "words", name: "Common Words", icon: MessageCircle, color: "#f093fb", progress: 60 },
  { id: "emotions", name: "Emotions", icon: Heart, color: "#f5576c", progress: 20 },
];

const recommendedLessons = [
  {
    id: 1,
    title: "Letters A-E",
    category: "Alphabet",
    duration: "8 min",
    difficulty: "Beginner",
    thumbnail: "alphabet-basics",
  },
  {
    id: 2,
    title: "Basic Greetings",
    category: "Common Words",
    duration: "12 min",
    difficulty: "Beginner",
    thumbnail: "greetings",
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Gradient */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-b-3xl p-6 pb-8 text-white">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl mb-1">Hello, Learner!</h1>
            <p className="text-white/80">Ready to practice today?</p>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4 text-center">
              <Flame className="w-6 h-6 mx-auto mb-2 text-orange-300" />
              <p className="text-2xl mb-1">7</p>
              <p className="text-xs text-white/80">Day Streak</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
              <p className="text-2xl mb-1">245</p>
              <p className="text-xs text-white/80">Total XP</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 mx-auto mb-2 text-blue-300" />
              <p className="text-2xl mb-1">3.5h</p>
              <p className="text-xs text-white/80">This Week</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 -mt-4">
        {/* Continue Learning */}
        <Card className="overflow-hidden shadow-lg border-0">
          <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Continue Learning</p>
                <h3 className="text-xl">Alphabet Basics</h3>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Play className="w-6 h-6" />
              </div>
            </div>
            <Progress value={45} className="mb-3 bg-white/20" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/90">45% Complete</p>
              <Button
                onClick={() => navigate("/lesson/alphabet-basics")}
                size="sm"
                className="bg-white text-[#667eea] hover:bg-white/90"
              >
                Continue
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Practice */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Quick Practice</h2>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => navigate("/practice")}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 border-2 border-[#667eea]/20 hover:border-[#667eea] hover:bg-[#667eea]/5"
            >
              <Sparkles className="w-8 h-8 text-[#667eea]" />
              <span className="text-sm">AI Practice</span>
            </Button>
            <Button
              onClick={() => navigate("/quiz/daily")}
              variant="outline"
              className="h-auto py-6 flex flex-col gap-2 border-2 border-[#764ba2]/20 hover:border-[#764ba2] hover:bg-[#764ba2]/5"
            >
              <Trophy className="w-8 h-8 text-[#764ba2]" />
              <span className="text-sm">Daily Quiz</span>
            </Button>
          </div>
        </div>

        {/* Learning Categories */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Learning Categories</h2>
          </div>
          <div className="space-y-3">
            {learningCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card
                  key={category.id}
                  className="cursor-pointer hover:shadow-md transition-shadow border-0"
                  onClick={() => navigate(`/lesson/${category.id}`)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon
                          className="w-6 h-6"
                          style={{ color: category.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">{category.name}</h3>
                        <Progress value={category.progress} className="h-2" />
                      </div>
                      <div className="text-right">
                        <p
                          className="text-sm mb-1"
                          style={{ color: category.color }}
                        >
                          {category.progress}%
                        </p>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Recommended Lessons */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Recommended for You</h2>
          </div>
          <div className="space-y-3">
            {recommendedLessons.map((lesson) => (
              <Card
                key={lesson.id}
                className="cursor-pointer hover:shadow-md transition-shadow border-0"
                onClick={() => navigate(`/lesson/${lesson.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{lesson.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {lesson.category}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-100 text-green-700 hover:bg-green-100"
                        >
                          {lesson.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {lesson.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
