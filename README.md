# 👋 SignSpeak - Sign Language Learning App

<div align="center">

![SignSpeak Logo](https://img.shields.io/badge/SignSpeak-Learn_Connect_Communicate-8B5CF6?style=for-the-badge)

**A modern, inclusive, and user-friendly mobile application for learning sign language**

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-Animations-FF0055?style=flat)](https://motion.dev/)

[Live Demo](https://www.figma.com/make/kN3AZ2UybYapWNbjLcNLMB/Sign-Language-Learning-App?t=m6vhYKg5aIJVMIEp-20&fullscreen=1&preview-route=%2Fonboarding) • [Design System](./DESIGN_SYSTEM.md) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Overview

SignSpeak is a comprehensive sign language learning platform designed to make sign language education accessible to everyone. Through interactive lessons, AI-powered practice sessions, engaging quizzes, and a supportive community, learners of all levels can master sign language at their own pace.

### 🎯 Key Features

- **📚 Interactive Lessons** - Step-by-step video demonstrations with adjustable playback speed
- **🤖 AI-Powered Practice** - Real-time feedback on sign accuracy using camera detection
- **✅ Engaging Quizzes** - Multiple question types to test and reinforce learning
- **👥 Community Features** - Discussion boards, challenges, and leaderboards
- **📊 Progress Tracking** - Detailed analytics on learning streaks, achievements, and milestones
- **♿ Accessibility First** - High contrast, large text, and screen reader support
- **🎨 Modern UI/UX** - Clean, intuitive interface with smooth animations

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/signspeak.git
   cd signspeak
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📱 App Screens

### 🎬 Splash Screen
Beautiful animated introduction with the SignSpeak logo and tagline.

### 📖 Onboarding (3 Screens)
- Learn sign language easily
- Practice with interactive videos  
- Communicate without barriers

### 🔐 Authentication
- Email/password login
- Google single sign-on
- Guest mode for quick access

### 🏠 Home Dashboard
- Daily learning progress
- Continue lesson button
- Recommended lessons
- Learning streak tracker
- Quick practice sections

### 📚 Learning Categories
- **Alphabet** - A-Z sign language letters
- **Numbers** - Counting and numerical signs
- **Common Words** - Essential vocabulary
- **Conversations** - Dialogue practice
- **Emotions** - Expressing feelings
- **Food & Drink** - Mealtime communication
- **Family & Home** - Household terms
- **Work & School** - Professional vocabulary

### 🎓 Lesson Screen
- HD video demonstrations
- Step-by-step sign breakdown
- Playback speed control (0.5x - 1.5x)
- Volume and fullscreen controls
- Save lesson bookmarks
- Practice mode toggle

### 🎯 AI Practice Screen
- Camera-based sign detection
- Real-time accuracy feedback
- Hand tracking visualization
- Performance suggestions
- Practice statistics

### 📝 Quiz Screen
- Multiple-choice questions
- Match signs with meanings
- Visual sign identification
- Immediate feedback
- Score tracking and results
- Star rating system (1-3 ⭐)

### 💬 Community Screen

**Discussions Tab**
- User-generated posts
- Topic tags and categories
- Likes and comments
- Community guidelines

**Challenges Tab**
- 7-Day Streak Challenge
- 100 Signs Challenge
- Community Helper badge
- Participant tracking

**Leaderboard Tab**
- Top 3 podium display
- Weekly rankings
- Points and achievements
- Personal progress stats

### 👤 Profile Screen

**Overview Tab**
- Weekly activity chart
- Learning progress by category
- Total time practiced
- Current streak

**Saved Lessons Tab**
- Bookmarked content
- Quick access to favorites
- Progress indicators

**Achievements Tab**
- Badges and trophies
- Unlock dates
- Locked achievements

**Settings Tab**
- Notifications
- Language preferences
- Sound effects
- Accessibility options
- Privacy & security
- Help & support

---

## 🎨 Design System

For detailed design guidelines, color palette, typography, and component documentation, see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

### Color Palette

```css
/* Primary Gradient */
Purple to Pink: #9333EA → #EC4899

/* Supporting Gradients */
Blue: #3B82F6 → #06B6D4
Warm: #F59E0B → #EF4444
Success: #10B981 → #14B8A6
```

### Typography

- **Font Family**: System UI (SF Pro, Segoe UI, Roboto)
- **Sizes**: 12px - 30px
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router 7** - Client-side routing

### UI & Styling
- **Tailwind CSS v4** - Utility-first CSS
- **Motion (Framer Motion)** - Smooth animations
- **Lucide React** - Icon library

### State & Data
- **React Hooks** - State management
- **Local Storage** - Data persistence

---

## 📂 Project Structure

```
signspeak/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── SplashScreen.tsx
│   │   │   ├── OnboardingScreen.tsx
│   │   │   ├── AuthScreen.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── CategoriesScreen.tsx
│   │   │   ├── LessonScreen.tsx
│   │   │   ├── PracticeScreen.tsx
│   │   │   ├── QuizScreen.tsx
│   │   │   ├── CommunityScreen.tsx
│   │   │   └── ProfileScreen.tsx
│   │   ├── routes.tsx
│   │   └── App.tsx
│   ├── styles/
│   │   ├── theme.css
│   │   └── fonts.css
│   └── main.tsx
├── public/
├── DESIGN_SYSTEM.md
├── README.md
└── package.json
```

---

## 🎯 Target Users

### Primary Users
- **Students** - Learning sign language for academic or personal growth
- **Parents** - Supporting deaf/hard-of-hearing children
- **Teachers** - Teaching inclusive communication
- **Professionals** - Working in accessibility fields

### User Needs
✅ Easy-to-follow video lessons  
✅ Practice with immediate feedback  
✅ Track learning progress  
✅ Connect with other learners  
✅ Accessible on mobile devices  

---

## ♿ Accessibility Features

SignSpeak follows WCAG 2.1 AA guidelines:

- ✅ **High Contrast** - 4.5:1 minimum color contrast ratio
- ✅ **Large Touch Targets** - 44x44px minimum
- ✅ **Screen Reader Support** - Semantic HTML and ARIA labels
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Focus Indicators** - Clear visual focus states
- ✅ **Adjustable Text** - Respects system font size preferences
- ✅ **Reduced Motion** - Respects prefers-reduced-motion
- ✅ **Alt Text** - Descriptive alternative text for all images

---

## 🌟 Future Roadmap

### Phase 2 (Q3 2026)
- [ ] Offline mode with lesson downloads
- [ ] Video recording for practice review
- [ ] Advanced AI hand tracking
- [ ] Custom learning paths
- [ ] Voice command navigation

### Phase 3 (Q4 2026)
- [ ] Live tutoring sessions
- [ ] AR sign language overlays
- [ ] Multi-language support (ASL, BSL, etc.)
- [ ] Certification program
- [ ] Parent/teacher dashboard

### Phase 4 (2027)
- [ ] Native iOS and Android apps
- [ ] Wearable device integration
- [ ] Enterprise/school licensing
- [ ] Advanced analytics dashboard

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test accessibility features
- Ensure mobile responsiveness

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Icons** - [Lucide Icons](https://lucide.dev/)
- **Images** - [Unsplash](https://unsplash.com/)
- **Design Inspiration** - Duolingo, Memrise, and other educational apps
- **Sign Language Community** - For feedback and guidance

---

## 📞 Contact & Support

- **Issues** - [GitHub Issues](https://github.com/yourusername/signspeak/issues)
- **Discussions** - [GitHub Discussions](https://github.com/yourusername/signspeak/discussions)
- **Email** - support@signspeak.app
- **Twitter** - [@SignSpeakApp](https://twitter.com/SignSpeakApp)

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/signspeak?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/signspeak?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/signspeak?style=social)

---

<div align="center">

**Built with ❤️ for inclusive communication**

**Learn • Connect • Communicate**

[⬆ Back to Top](#-signspeak---sign-language-learning-app)

</div>
