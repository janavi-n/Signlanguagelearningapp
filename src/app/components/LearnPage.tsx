import { useNavigate } from "react-router";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import {
  Search,
  Hand,
  Hash,
  MessageCircle,
  Heart,
  Utensils,
  MapPin,
  Clock,
  Star,
  Lock,
} from "lucide-react";

const categories = [
  {
    id: "alphabet",
    name: "Alphabet",
    icon: Hand,
    color: "#667eea",
    lessons: 26,
    progress: 45,
    locked: false,
  },
  {
    id: "numbers",
    name: "Numbers",
    icon: Hash,
    color: "#764ba2",
    lessons: 20,
    progress: 30,
    locked: false,
  },
  {
    id: "greetings",
    name: "Greetings",
    icon: MessageCircle,
    color: "#f093fb",
    lessons: 15,
    progress: 60,
    locked: false,
  },
  {
    id: "emotions",
    name: "Emotions",
    icon: Heart,
    color: "#f5576c",
    lessons: 18,
    progress: 20,
    locked: false,
  },
  {
    id: "food",
    name: "Food & Drinks",
    icon: Utensils,
    color: "#10b981",
    lessons: 30,
    progress: 0,
    locked: false,
  },
  {
    id: "places",
    name: "Places",
    icon: MapPin,
    color: "#f59e0b",
    lessons: 25,
    progress: 0,
    locked: true,
  },
  {
    id: "time",
    name: "Time & Dates",
    icon: Clock,
    color: "#3b82f6",
    lessons: 22,
    progress: 0,
    locked: true,
  },
];

export function LearnPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6 sticky top-0 z-10">
        <h1 className="text-2xl text-gray-900 mb-4">Learn</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            type="search"
            placeholder="Search lessons..."
            className="pl-10 h-12 rounded-xl border-gray-200 bg-gray-50"
          />
        </div>
      </div>

      {/* Learning Path */}
      <div className="p-6 space-y-6">
        {/* Progress Overview */}
        <Card className="bg-gradient-to-br from-[#667eea] to-[#764ba2] border-0 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-white/80 text-sm mb-1">Your Progress</p>
                <h2 className="text-2xl">4 of 7 Categories</h2>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
              </div>
            </div>
            <Progress value={57} className="mb-2 bg-white/20" />
            <p className="text-sm text-white/90">57% of all lessons completed</p>
          </CardContent>
        </Card>

        {/* Categories */}
        <div>
          <h2 className="text-xl text-gray-900 mb-4">All Categories</h2>
          <div className="grid gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isLocked = category.locked;

              return (
                <Card
                  key={category.id}
                  className={`border-0 shadow-md transition-all ${
                    isLocked
                      ? "opacity-60"
                      : "cursor-pointer hover:shadow-lg hover:scale-[1.02]"
                  }`}
                  onClick={() =>
                    !isLocked && navigate(`/lesson/${category.id}`)
                  }
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${category.color}20`,
                        }}
                      >
                        {isLocked ? (
                          <Lock className="w-7 h-7 text-gray-400" />
                        ) : (
                          <Icon
                            className="w-7 h-7"
                            style={{ color: category.color }}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-gray-900">{category.name}</h3>
                          {isLocked && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-gray-200 text-gray-600"
                            >
                              Locked
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          {category.lessons} lessons
                        </p>
                      </div>
                      {!isLocked && category.progress > 0 && (
                        <div className="text-right">
                          <p
                            className="text-sm mb-1"
                            style={{ color: category.color }}
                          >
                            {category.progress}%
                          </p>
                        </div>
                      )}
                    </div>

                    {!isLocked && (
                      <div>
                        <Progress
                          value={category.progress}
                          className="h-2"
                          style={
                            {
                              "--progress-color": category.color,
                            } as React.CSSProperties
                          }
                        />
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-xs text-gray-500">
                            {Math.round(
                              (category.progress / 100) * category.lessons
                            )}{" "}
                            of {category.lessons} completed
                          </p>
                          {category.progress === 0 && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-blue-100 text-blue-700"
                            >
                              Start
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {isLocked && (
                      <p className="text-sm text-gray-500 mt-2">
                        Complete previous categories to unlock
                      </p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tips */}
        <Card className="border-0 bg-blue-50">
          <CardContent className="p-5">
            <h3 className="text-gray-900 mb-2">💡 Learning Tip</h3>
            <p className="text-sm text-gray-700">
              Practice 10-15 minutes daily for the best results. Consistency is
              key to mastering sign language!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
