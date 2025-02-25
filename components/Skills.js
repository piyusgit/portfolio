import React from "react";
import { skills } from "@/assets/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="tech"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I know
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((category) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={category.name}
            className="bg-gray-50 p-6 rounded-xl dark:bg-gray-800 dark:text-white hover:shadow-lg transition-shadow hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-gray-600 sm:hover:shadow-black  sm:hover:bg-lightHover sm:hover:-translate-y-1 sm:duration-500"
          >
            <h3 className="text-xl font-semibold text-gray-800  dark:text-white mb-4 font-ovo">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2  text-indigo-800  bg-indigo-100 dark:bg-gray-700  dark:text-white rounded-full text-sm font-medium font-ovo"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
