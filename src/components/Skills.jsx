import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Security & Networking',
    skills: ['Network Security', 'Cisco Routers'],
  },
  {
    title: 'Systems & Infrastructure',
    skills: ['Virtualization', 'Linux'],
  },
  {
    title: 'Programming & Tools',
    skills: ['Python', 'Git', 'SQL', 'Bash'],
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical Skills', 'Problem Solving', 'Incident Response'],
  },
];

const Skills = ({ isDark }) => {
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
        Technical Skills
      </h2>

      <p className={`mb-8 ${
        isDark ? 'text-neutral-400' : 'text-neutral-600'
      }`}>
        A comprehensive skillset in cybersecurity domains, from network defense to application security.
      </p>

      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.05 }}
          >
            <h3 className={`text-sm font-medium uppercase tracking-wide mb-3 ${
              isDark ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    isDark
                      ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
