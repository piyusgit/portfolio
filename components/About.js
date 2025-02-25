import Image from "next/image";
import React from "react";
import profilePic from "../assets/Photo1.jpg";
import eduIcon from "../assets/mortarboard.png";
import { motion } from "framer-motion";

const About = ({ isDarkTheme }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={profilePic} alt="user" className="w-full rounded-3xl" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo">
            I am a Frontend Web Developer based in India. I design and code
            beautifully simple things, and I love what I do. I am a passionate
            developer, always eager to learn new technologies and stay
            up-to-date with the latest trends in the industry.
          </p>
          <h3 className="text-2xl font-ovo mb-4 flex gap-2">
            Education <Image src={eduIcon} alt="education" className="w-6" />
          </h3>
          <ul className="">
            <li className="text-gray-800 font-semibold dark:text-white/80">
              <h4 className="font-ovo">B.Tech CSE</h4>
              <p className="font-ovo">GJUS&T, Hisar | 7.3 CGPA</p>
              <span className="font-ovo ">2020-2024</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
