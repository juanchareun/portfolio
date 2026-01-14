import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const links = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'juanignaciochareun@gmail.com',
    href: 'mailto:juanignaciochareun@gmail.com',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: '@juanchareun',
    href: 'https://github.com/juanchareun',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: '/in/juan-chareun',
    href: 'https://linkedin.com/in/juan-chareun',
  },
];

const Contact = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className={`text-2xl font-medium mb-4 ${
        isDark ? 'text-white' : 'text-neutral-900'
      }`}>
        Get In Touch
      </h2>

      <p className={`mb-8 ${
        isDark ? 'text-neutral-400' : 'text-neutral-600'
      }`}>
        I'm always interested in discussing cybersecurity topics, collaboration opportunities, or connecting. Feel free to reach out!
      </p>

      <div className="space-y-4">
        {links.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center gap-4 p-4 rounded-lg border transition-colors clickable ${
              isDark
                ? 'border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50'
                : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
            }`}
          >
            <link.icon className={`w-5 h-5 ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`} />
            <div className="flex-1">
              <div className={`text-sm ${
                isDark ? 'text-neutral-500' : 'text-neutral-400'
              }`}>
                {link.label}
              </div>
              <div className={isDark ? 'text-white' : 'text-neutral-900'}>
                {link.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
