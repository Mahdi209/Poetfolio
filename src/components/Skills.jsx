import { skills } from "../../public/navLink";
import { motion } from "framer-motion";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="skills" className="w-full py-20 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-[#112e42] dark:to-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 inline-block text-transparent bg-clip-text mb-6"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg"
          >
            Crafting digital experiences with modern technologies and tools
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <div className="relative flex flex-col items-center p-6 rounded-xl bg-white dark:bg-[#1a365d]/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Glowing background effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative z-10 mb-4 text-gray-800 dark:text-gray-200 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300">
                  <skill.icon className="text-3xl" />
                </div>

                {/* Skill name */}
                <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
