// import Image from "next/image";
// import React from "react";
// import profilePic from "../assets/Photo1.jpg";
// import downloadIcon from "../assets/file.png";
// import arrowIcon from "../assets/arrow.png";
// import Link from "next/link";
// import { motion } from "motion/react";

// const Header = () => {
//   return (
//     <div className="w-11/12 max-w-3xl text-center mx-auto  h-screen flex flex-col items-center justify-center gap-4">
//       <motion.div
//         initial={{ scale: 0 }}
//         whileInView={{ scale: 1 }}
//         transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
//       >
//         <Image
//           src={profilePic}
//           alt="profile-pic"
//           className="rounded-full w-28 mt-28"
//         />
//       </motion.div>
//       <motion.h3
//         initial={{ y: -20, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="text-xl md:text-2xl font-ovo"
//       >
//         Hi! I&apos;m Piyush👋
//       </motion.h3>
//       <motion.h1
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//         className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
//       >
//         Frontend Web Developer based in India.
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.7, delay: 0.6 }}
//         className="max-w-2xl mx-auto font-ovo"
//       >
//         I design and code beautifully simple things, and I love what I do.
//       </motion.p>
//       <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
//         <motion.Link
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1 }}
//           className="px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
//           href="#contact"
//         >
//           contact me <Image src={arrowIcon} alt="contact-me" className="w-4" />
//         </motion.Link>
//         <motion.Link
//           initial={{ y: 30, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 1.2 }}
//           href="/Resume-Piyush.pdf"
//           download
//           className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
//         >
//           my resume{" "}
//           <Image src={downloadIcon} alt="file-download" className="w-4" />{" "}
//         </motion.Link>
//       </div>
//     </div>
//   );
// };

// export default Header;

import Image from "next/image";
import React from "react";
import profilePic from "../assets/Photo1.jpg";
import downloadIcon from "../assets/file.png";
import arrowIcon from "../assets/arrow.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      {/* Profile Image Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={profilePic}
          alt="profile-pic"
          className="rounded-full w-28 mt-28"
          priority
        />
      </motion.div>

      {/* Headings */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl font-ovo"
      >
        Hi! I&apos;m Piyush👋
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Frontend Web Developer based in India.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        I design and code beautifully simple things, and I love what I do.
      </motion.p>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="#contact"
            className="px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
          >
            Contact me
            <Image
              src={arrowIcon}
              alt="contact-me"
              className="w-4"
              loading="lazy"
            />
          </Link>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            href="/Resume-Piyush.pdf"
            download
            className="px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
          >
            My resume
            <Image
              src={downloadIcon}
              alt="file-download"
              className="w-4"
              loading="lazy"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
