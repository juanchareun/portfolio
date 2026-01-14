import { motion } from 'framer-motion';
import { FiShield, FiGithub, FiLinkedin, FiTwitter, FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-cyber-gray/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group interactive">
              <FiShield className="w-6 h-6 text-cyber-cyan group-hover:text-cyber-purple transition-colors" />
              <span className="text-lg font-bold bg-gradient-to-r from-cyber-cyan to-cyber-purple bg-clip-text text-transparent">
                CyberSec Portfolio
              </span>
            </a>
            <p className="text-cyber-muted text-sm mt-2">
              Securing the digital frontier, one line at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center gap-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-cyber-muted hover:text-cyber-cyan text-sm transition-colors interactive"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {[
              { icon: FiGithub, href: 'https://github.com' },
              { icon: FiLinkedin, href: 'https://linkedin.com' },
              { icon: FiTwitter, href: 'https://twitter.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-cyber-gray/30 flex items-center justify-center text-cyber-muted hover:text-cyber-cyan hover:bg-cyber-gray/50 transition-all interactive"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-cyber-gray/30" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cyber-muted text-sm flex items-center gap-1">
            Made with <FiHeart className="w-4 h-4 text-cyber-red" /> by Nachi
          </p>

          <p className="text-cyber-muted text-sm">
            &copy; {currentYear} All rights reserved.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-cyber-muted hover:text-cyber-cyan text-sm transition-colors interactive"
            whileHover={{ y: -2 }}
          >
            <span>Back to top</span>
            <FiArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Terminal style footer message */}
        <div className="mt-8 text-center">
          <code className="text-cyber-gray text-xs">
            {`/* `}
            <span className="text-cyber-cyan">System secured</span>
            {` | `}
            <span className="text-cyber-green">No vulnerabilities detected</span>
            {` | `}
            <span className="text-cyber-purple">Status: Protected</span>
            {` */`}
          </code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
