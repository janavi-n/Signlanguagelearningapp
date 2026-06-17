import { useState } from "react";
import { Home, BookOpen, Users, User } from "lucide-react";
import { HomePage } from "./HomePage";
import { LearnPage } from "./LearnPage";
import { CommunityPage } from "./CommunityPage";
import { ProfilePage } from "./ProfilePage";

type Tab = "home" | "learn" | "community" | "profile";

export function MainApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  const tabs = [
    { id: "home" as Tab, icon: Home, label: "Home" },
    { id: "learn" as Tab, icon: BookOpen, label: "Learn" },
    { id: "community" as Tab, icon: Users, label: "Community" },
    { id: "profile" as Tab, icon: User, label: "Profile" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        {activeTab === "home" && <HomePage />}
        {activeTab === "learn" && <LearnPage />}
        {activeTab === "community" && <CommunityPage />}
        {activeTab === "profile" && <ProfilePage />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom">
        <div className="flex items-center justify-around">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-all ${
                  isActive
                    ? "text-[#667eea]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${isActive ? "fill-[#667eea]/20" : ""}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span className="text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
