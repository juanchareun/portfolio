import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50 + Math.random() * 50);
        return () => clearTimeout(timer);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [currentIndex, text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`text-cyber-cyan ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

const GlitchText = ({ text }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block">
      <span className={isGlitching ? 'animate-pulse' : ''}>{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-cyber-cyan opacity-70 -translate-x-0.5 translate-y-0.5">
            {text}
          </span>
          <span className="absolute top-0 left-0 text-cyber-purple opacity-70 translate-x-0.5 -translate-y-0.5">
            {text}
          </span>
        </>
      )}
    </span>
  );
};

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-dark/50 to-cyber-dark z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal-style greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-gray/50 border border-cyber-cyan/30">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
            <code className="text-cyber-cyan text-sm">
              <TypewriterText text="~/security/portfolio $" />
            </code>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-cyber-text">Hi, I'm </span>
          <GlitchText text="Nachi" />
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-cyan bg-clip-text text-transparent"
        >
          Cybersecurity Enthusiast & Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-cyber-muted text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Passionate about securing digital frontiers, hunting vulnerabilities, and building
          robust security solutions. Let's make the digital world safer together.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-4 mb-12"
        >
          {[
            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:your@email.com', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-cyber-gray/50 border border-cyber-cyan/20 text-cyber-text hover:text-cyber-cyan hover:border-cyber-cyan/50 transition-all interactive group"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon className="w-6 h-6 group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-purple text-cyber-dark font-semibold hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-all interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-cyber-cyan text-cyber-cyan font-semibold hover:bg-cyber-cyan/10 transition-all interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-cyber-muted hover:text-cyber-cyan transition-colors interactive"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm">Scroll Down</span>
          <FiChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyber-cyan/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyber-purple/20 rotate-45 animate-pulse" />
    </section>
  );
};

export default Hero;
