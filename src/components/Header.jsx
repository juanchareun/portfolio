import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const Header = ({ activeTab, setActiveTab, isDark, toggleTheme }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
      isDark ? 'bg-neutral-950/80' : 'bg-white/80'
    } backdrop-blur-sm border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Hand-drawn style */}
          <button
            onClick={() => setActiveTab('home')}
            className={`text-2xl transition-colors clickable ${
              isDark ? 'text-white hover:text-neutral-300' : 'text-neutral-900 hover:text-neutral-600'
            }`}
            style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}
          >
            juan chareun
          </button>

          {/* Tab Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-sm transition-colors clickable ${
                  activeTab === tab.id
                    ? isDark ? 'text-white' : 'text-neutral-900'
                    : isDark ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDark ? 'bg-white' : 'bg-neutral-900'
                    }`}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Animated Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`relative p-2 rounded-lg transition-colors clickable overflow-hidden ${
              isDark
                ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isDark ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <FiSun size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                  <FiMoon size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Tab Navigation */}
        <nav className="md:hidden flex items-center gap-1 mt-4 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3 py-1.5 text-sm whitespace-nowrap transition-colors clickable ${
                activeTab === tab.id
                  ? isDark ? 'text-white' : 'text-neutral-900'
                  : isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabMobile"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    isDark ? 'bg-white' : 'bg-neutral-900'
                  }`}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
