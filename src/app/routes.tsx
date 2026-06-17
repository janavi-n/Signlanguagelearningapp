import { createBrowserRouter } from "react-router";
import { SplashScreen } from "./components/SplashScreen";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { AuthScreen } from "./components/AuthScreen";
import { DashboardLayout } from "./components/DashboardLayout";
import { HomeScreen } from "./components/HomeScreen";
import { CategoriesScreen } from "./components/CategoriesScreen";
import { LessonScreen } from "./components/LessonScreen";
import { PracticeScreen } from "./components/PracticeScreen";
import { QuizScreen } from "./components/QuizScreen";
import { CommunityScreen } from "./components/CommunityScreen";
import { ProfileScreen } from "./components/ProfileScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SplashScreen />,
  },
  {
    path: "/onboarding",
    element: <OnboardingScreen />,
  },
  {
    path: "/auth",
    element: <AuthScreen />,
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: "categories", element: <CategoriesScreen /> },
      { path: "lesson/:id", element: <LessonScreen /> },
      { path: "practice", element: <PracticeScreen /> },
      { path: "quiz/:id", element: <QuizScreen /> },
      { path: "community", element: <CommunityScreen /> },
      { path: "profile", element: <ProfileScreen /> },
    ],
  },
]);
