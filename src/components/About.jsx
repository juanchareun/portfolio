import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const stats = [
  { value: '1', label: 'CTFs' },
  { value: '2', label: 'Projects' },
  { value: '1', label: 'Certs' },
];

const socials = [
  { icon: FiMail, href: 'mailto:juanignaciochareun@gmail.com', label: 'Email' },
  { icon: FiGithub, href: 'https://github.com/juanchareun', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/juan-chareun', label: 'LinkedIn' },
];

const tabs = [
  { id: 'tldr', label: 'TL;DR' },
  { id: 'education', label: 'Education' },
];

const About = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState('tldr');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tldr':
        return (
          <motion.div
            key="tldr"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className={`text-xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              IT & Cybersecurity Student
            </h4>
            <p className={`leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              I focus on network security and hands-on projects, building secure systems.
            </p>
          </motion.div>
        );
      case 'education':
        return (
          <motion.div
            key="education"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {/* First Degree */}
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-neutral-800' : 'bg-neutral-100'
              }`}>
                <span className="text-lg">🎓</span>
              </div>
              <div className="flex-1">
                <div className={`text-xs mb-1 ${
                  isDark ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  Expected 2026
                </div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  Valencia College
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Associate in Arts - Information Technology
                </p>
              </div>
            </div>

            {/* Second Degree */}
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-neutral-800' : 'bg-neutral-100'
              }`}>
                <span className="text-lg">🎓</span>
              </div>
              <div className="flex-1">
                <div className={`text-xs mb-1 ${
                  isDark ? 'text-neutral-500' : 'text-neutral-400'
                }`}>
                  Expected 2027
                </div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  Valencia College
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Associates in Science - Cybesecurity & Network Engineering
                </p>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column - Profile Card */}
        <div className={`p-6 rounded-xl border ${
          isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          <div className="flex flex-col items-center text-center">
            {/* Name & Title */}
            <h2 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              Juan Chareun
            </h2>
            <p className={`text-sm mb-6 ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              IT & Cybersecurity Student
            </p>

            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 border ${
              isDark ? 'border-green-500/30 bg-green-500/10' : 'border-green-500/30 bg-green-50'
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className={isDark ? 'text-green-400' : 'text-green-600'}>
                Open to Opportunities
              </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-8 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs uppercase tracking-wider ${
                    isDark ? 'text-neutral-500' : 'text-neutral-400'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`p-2.5 rounded-lg transition-colors clickable ${
                    isDark
                      ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Tabbed Content */}
        <div className={`p-6 rounded-xl border ${
          isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-neutral-200'
        }`}>
          {/* Tab Navigation */}
          <div className={`flex gap-1 mb-6 p-1 rounded-lg ${
            isDark ? 'bg-neutral-800' : 'bg-neutral-100'
          }`}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors clickable ${
                  activeTab === tab.id
                    ? isDark
                      ? 'text-white bg-neutral-700'
                      : 'text-neutral-900 bg-white shadow-sm'
                    : isDark
                      ? 'text-neutral-400 hover:text-neutral-200'
                      : 'text-neutral-500 hover:text-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
