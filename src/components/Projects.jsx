import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Network Traffic Analyzer',
    description: 'Built a Python tool to analyze network traffic patterns and detect potential security threats using Scapy. Includes real-time monitoring and logging capabilities.',
    tags: ['Python', 'Scapy', 'Network Security'],
    github: 'https://github.com/juanchareun/network-traffic-analyzer',
  },
  {
    id: 2,
    title: 'Password Strength Analyzer',
    description: 'Python application that evaluates password strength using multiple criteria and common password databases. Provides recommendations for stronger passwords.',
    tags: ['Python', 'Security'],
    github: 'https://github.com/juanchareun/password-analyzer',
  },
];

const Projects = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className={`text-2xl font-medium mb-8 ${
        isDark ? 'text-white' : 'text-neutral-900'
      }`}>
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`p-5 rounded-lg border transition-colors ${
              isDark
                ? 'border-neutral-800 hover:border-neutral-700 bg-neutral-900/50'
                : 'border-neutral-200 hover:border-neutral-300 bg-white'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className={`font-medium mb-2 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-3 ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 text-xs rounded ${
                        isDark
                          ? 'bg-neutral-800 text-neutral-400'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors clickable ${
                  isDark
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    : 'text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
                aria-label="View code on GitHub"
              >
                <FiGithub size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
