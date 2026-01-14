import { motion } from 'framer-motion';

const Home = ({ isDark }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-[70vh] flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className={`text-4xl md:text-6xl font-light mb-4 ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}
        >
          Juan Chareun
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`text-lg md:text-xl mb-6 ${
            isDark ? 'text-neutral-400' : 'text-neutral-600'
          }`}
        >
          IT & Cybersecurity Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-sm max-w-md mx-auto ${
            isDark ? 'text-neutral-500' : 'text-neutral-500'
          }`}
        >
          Dedicated to understanding and protecting systems. Passionate about network security, and continuously learning in the ever-evolving field of cybersecurity.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Home;
