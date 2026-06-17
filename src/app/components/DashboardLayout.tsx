import { Outlet, useLocation, useNavigate } from 'react-router';
import { Home, BookOpen, Play, Users, User } from 'lucide-react';

const navItems = [
  { path: '/app', icon: Home, label: 'Home' },
  { path: '/app/categories', icon: BookOpen, label: 'Learn' },
  { path: '/app/practice', icon: Play, label: 'Practice' },
  { path: '/app/community', icon: Users, label: 'Community' },
  { path: '/app/profile', icon: User, label: 'Profile' },
];

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/app') {
      return location.pathname === '/app';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <nav className="max-w-md mx-auto px-4">
          <div className="flex justify-around items-center h-20">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                    active
                      ? 'text-purple-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <div className={`relative ${active ? 'scale-110' : ''} transition-transform`}>
                    <Icon className="w-6 h-6" strokeWidth={active ? 2.5 : 2} />
                    {active && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-600 rounded-full" />
                    )}
                  </div>
                  <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
