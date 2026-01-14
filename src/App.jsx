import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from './components/AnimatedCursor';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home key="home" isDark={isDark} />;
      case 'about':
        return <About key="about" isDark={isDark} />;
      case 'projects':
        return <Projects key="projects" isDark={isDark} />;
      case 'skills':
        return <Skills key="skills" isDark={isDark} />;
      case 'contact':
        return <Contact key="contact" isDark={isDark} />;
      default:
        return <Home key="home" isDark={isDark} />;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-neutral-950' : 'bg-neutral-50'
    }`}>
      {!isMobile && <AnimatedCursor isDark={isDark} />}

      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      <main className="pt-32 md:pt-24 pb-16 px-6">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <footer className={`py-8 text-center text-sm ${
        isDark ? 'text-neutral-600' : 'text-neutral-400'
      }`}>
      </footer>
    </div>
  );
}

export default App;
