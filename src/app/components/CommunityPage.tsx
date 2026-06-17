import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  MessageSquare,
  Users,
  Trophy,
  ThumbsUp,
  MessageCircle,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";

const discussionGroups = [
  {
    id: 1,
    name: "Beginners Support",
    members: 2543,
    posts: 1234,
    description: "A welcoming space for new learners to ask questions",
    active: true,
  },
  {
    id: 2,
    name: "Daily Practice",
    members: 1876,
    posts: 892,
    description: "Share your daily practice and get feedback",
    active: true,
  },
  {
    id: 3,
    name: "ASL Stories",
    members: 1245,
    posts: 567,
    description: "Share and learn through sign language stories",
    active: false,
  },
];

const recentPosts = [
  {
    id: 1,
    user: "Sarah M.",
    avatar: "SM",
    time: "2h ago",
    content: "Just completed my first week! The alphabet module was so helpful. Any tips for remembering the numbers?",
    likes: 24,
    comments: 8,
    tag: "Question",
  },
  {
    id: 2,
    user: "James K.",
    avatar: "JK",
    time: "5h ago",
    content: "Reached a 30-day streak today! 🎉 The AI practice feature really helped improve my accuracy.",
    likes: 156,
    comments: 23,
    tag: "Achievement",
  },
  {
    id: 3,
    user: "Emily R.",
    avatar: "ER",
    time: "1d ago",
    content: "Does anyone have recommendations for practicing emotions signs? I find them the most challenging.",
    likes: 45,
    comments: 12,
    tag: "Discussion",
  },
];

const challenges = [
  {
    id: 1,
    title: "7-Day Streak Challenge",
    description: "Practice every day for a week",
    participants: 523,
    reward: "50 XP",
    daysLeft: 3,
  },
  {
    id: 2,
    title: "Alphabet Master",
    description: "Complete all alphabet lessons with 90%+ accuracy",
    participants: 342,
    reward: "100 XP",
    daysLeft: 10,
  },
];

const topLearners = [
  { name: "Alex Johnson", xp: 2845, avatar: "AJ", rank: 1 },
  { name: "Maria Garcia", xp: 2756, avatar: "MG", rank: 2 },
  { name: "David Chen", xp: 2654, avatar: "DC", rank: 3 },
  { name: "Lisa Brown", xp: 2543, avatar: "LB", rank: 4 },
  { name: "You", xp: 245, avatar: "YO", rank: 147, highlighted: true },
];

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-b-3xl p-6 text-white">
        <h1 className="text-2xl mb-2">Community</h1>
        <p className="text-white/80">Connect, share, and grow together</p>
      </div>

      <div className="p-6 -mt-4">
        <Tabs defaultValue="discussions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-12 bg-white rounded-xl shadow-sm">
            <TabsTrigger value="discussions" className="rounded-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="challenges" className="rounded-lg">
              <Target className="w-4 h-4 mr-2" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="rounded-lg">
              <Trophy className="w-4 h-4 mr-2" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Discussions Tab */}
          <TabsContent value="discussions" className="space-y-4 mt-6">
            {/* Groups */}
            <div>
              <h2 className="text-xl text-gray-900 mb-4">Discussion Groups</h2>
              <div className="space-y-3">
                {discussionGroups.map((group) => (
                  <Card key={group.id} className="border-0 shadow-md">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-gray-900">{group.name}</h3>
                            {group.active && (
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                                Active
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3">
                            {group.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {group.members.toLocaleString()} members
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {group.posts.toLocaleString()} posts
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-[#667eea] text-[#667eea] hover:bg-[#667eea]/5"
                      >
                        Join Group
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-xl text-gray-900 mb-4">Recent Posts</h2>
              <div className="space-y-3">
                {recentPosts.map((post) => (
                  <Card key={post.id} className="border-0 shadow-md">
                    <CardContent className="p-5">
                      <div className="flex gap-3 mb-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
                            {post.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-gray-900">{post.user}</h4>
                            <span className="text-xs text-gray-500">
                              {post.time}
                            </span>
                          </div>
                          <Badge
                            variant="secondary"
                            className="text-xs mb-2 bg-blue-100 text-blue-700"
                          >
                            {post.tag}
                          </Badge>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {post.content}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-[#667eea]"
                        >
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-[#667eea]"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Challenges Tab */}
          <TabsContent value="challenges" className="space-y-4 mt-6">
            <div className="space-y-3">
              {challenges.map((challenge) => (
                <Card
                  key={challenge.id}
                  className="border-0 shadow-md overflow-hidden"
                >
                  <div className="h-2 bg-gradient-to-r from-[#667eea] to-[#764ba2]" />
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-gray-900 mb-2">{challenge.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {challenge.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {challenge.participants} participants
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {challenge.reward}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {challenge.daysLeft} days left
                      </span>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white hover:from-[#5568d3] hover:to-[#6941a0]"
                      >
                        Join Challenge
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-4 mt-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-5">
                <div className="space-y-3">
                  {topLearners.map((learner) => (
                    <div
                      key={learner.rank}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                        learner.highlighted
                          ? "bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 border-2 border-[#667eea]"
                          : "bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                          learner.rank === 1
                            ? "bg-yellow-100 text-yellow-700"
                            : learner.rank === 2
                            ? "bg-gray-200 text-gray-700"
                            : learner.rank === 3
                            ? "bg-orange-100 text-orange-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <span className="font-bold">{learner.rank}</span>
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
                          {learner.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-gray-900">{learner.name}</h4>
                        <p className="text-sm text-gray-500">{learner.xp} XP</p>
                      </div>
                      {learner.rank <= 3 && (
                        <Trophy
                          className={`w-6 h-6 ${
                            learner.rank === 1
                              ? "text-yellow-500 fill-yellow-500"
                              : learner.rank === 2
                              ? "text-gray-400 fill-gray-400"
                              : "text-orange-400 fill-orange-400"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-blue-50">
              <CardContent className="p-5">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="text-gray-900 mb-1">Keep Learning!</h3>
                    <p className="text-sm text-gray-700">
                      Earn more XP to climb the leaderboard. Complete lessons and
                      challenges to boost your rank.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
