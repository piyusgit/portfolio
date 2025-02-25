import React from "react";
import { projects } from "@/assets/data";
import Link from "next/link";
import arrowIcon from "../assets/arrow.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I have built
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Here are some of my projects that I have worked on. I have used various
        technologies to build these projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((project) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={project.title}
            className="bg-white p-6 rounded-xl dark:bg-gray-800 dark:text-white  dark:hover:shadow-gray-600 hover:shadow-lg transition-shadow group"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 font-ovo">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-ovo">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-white  rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              href={project.link}
              className="text-indigo-600  dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2"
            >
              View Project
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
        <Link
          href=""
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-6 py-2 mx-auto my-20 hover:bg-lightHover duration-500 font-ovo dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          Show more <Image src={arrowIcon} alt="arrow" className="w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
