import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Switch } from "./ui/switch";
import { Progress } from "./ui/progress";
import {
  User,
  Award,
  BookMarked,
  Settings,
  Bell,
  Globe,
  Moon,
  Volume2,
  HelpCircle,
  LogOut,
  ChevronRight,
  Trophy,
  Target,
  Flame,
  Star,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    name: "First Steps",
    description: "Complete your first lesson",
    icon: Star,
    earned: true,
    date: "Jun 10, 2026",
  },
  {
    id: 2,
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    icon: Flame,
    earned: true,
    date: "Jun 14, 2026",
  },
  {
    id: 3,
    name: "Alphabet Master",
    description: "Complete all alphabet lessons",
    icon: Award,
    earned: false,
    progress: 45,
  },
  {
    id: 4,
    name: "Practice Pro",
    description: "Complete 50 practice sessions",
    icon: Target,
    earned: false,
    progress: 32,
  },
];

const savedLessons = [
  { id: 1, title: "Basic Greetings", category: "Common Words", progress: 80 },
  { id: 2, title: "Family Signs", category: "Common Words", progress: 60 },
  { id: 3, title: "Emotions A-Z", category: "Emotions", progress: 40 },
];

const stats = [
  { label: "Lessons Completed", value: "24", icon: BookMarked, color: "#667eea" },
  { label: "Total XP", value: "245", icon: Trophy, color: "#764ba2" },
  { label: "Current Streak", value: "7 days", icon: Flame, color: "#f5576c" },
  { label: "Accuracy Rate", value: "87%", icon: Target, color: "#10b981" },
];

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-b-3xl p-6 pb-20 text-white">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl">Profile</h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="px-6 -mt-16 pb-6 space-y-6">
        {/* Profile Card */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white text-2xl">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl text-gray-900 mb-1">John Doe</h2>
                <p className="text-gray-500 mb-2">john.doe@email.com</p>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                  Intermediate Learner
                </Badge>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-[#667eea] text-[#667eea] hover:bg-[#667eea]/5"
            >
              <User className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <Icon
                    className="w-8 h-8 mb-3"
                    style={{ color: stat.color }}
                  />
                  <p className="text-2xl text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-gray-900">Achievements</h2>
            <Button variant="ghost" size="sm" className="text-[#667eea]">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.id}
                  className={`border-0 shadow-md ${
                    !achievement.earned ? "opacity-60" : ""
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                          achievement.earned
                            ? "bg-gradient-to-br from-[#667eea] to-[#764ba2]"
                            : "bg-gray-200"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            achievement.earned ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-1">
                          {achievement.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {achievement.description}
                        </p>
                        {achievement.earned ? (
                          <p className="text-xs text-gray-500">
                            Earned on {achievement.date}
                          </p>
                        ) : (
                          <div>
                            <Progress
                              value={achievement.progress}
                              className="h-2 mb-1"
                            />
                            <p className="text-xs text-gray-500">
                              {achievement.progress}% complete
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Saved Lessons */}
        <div>
          <h2 className="text-xl text-gray-900 mb-4">Saved Lessons</h2>
          <div className="space-y-3">
            {savedLessons.map((lesson) => (
              <Card key={lesson.id} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="text-gray-900 mb-1">{lesson.title}</h3>
                      <p className="text-sm text-gray-500">{lesson.category}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700"
                    >
                      {lesson.progress}%
                    </Badge>
                  </div>
                  <Progress value={lesson.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div>
          <h2 className="text-xl text-gray-900 mb-4">Settings</h2>
          <Card className="border-0 shadow-md">
            <CardContent className="p-0 divide-y divide-gray-100">
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Notifications</span>
                </div>
                <Switch />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Sound Effects</span>
                </div>
                <Switch defaultChecked />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Dark Mode</span>
                </div>
                <Switch />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Language</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">English</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-900">Help & Support</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-red-600">
                <div className="flex items-center gap-3">
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>
            </CardContent>
          </Card>
        </div>

        {/* Accessibility Note */}
        <Card className="border-0 bg-purple-50">
          <CardContent className="p-5">
            <h3 className="text-gray-900 mb-2">♿ Accessibility</h3>
            <p className="text-sm text-gray-700 mb-3">
              This app is designed with accessibility in mind. Adjust settings
              to match your learning preferences.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="border-purple-300 text-purple-700 hover:bg-purple-100"
            >
              Accessibility Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
