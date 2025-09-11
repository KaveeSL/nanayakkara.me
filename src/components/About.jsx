import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I recently completed my <strong>BSc (Hons) in Software Engineering</strong> at Cardiff Metropolitan University – UK (ICBT Campus, Sri Lanka). I also have hands-on experience in web development, UI/UX design, and IT projects.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          At present, I am working at the <strong>University of Moratuwa</strong> as a Frontend Web Developer and UI/UX Engineer and also serve as an Instructor for the BIT program. I'm skilled in <strong>React.js, HTML, CSS, PHP, MySQL, and JavaScript</strong>, and I also use tools like Figma, Photoshop, and AI tools for design and problem solving.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I always give willingness and effort for UI/UX design, and I have very strong creative skills on that side, which help me build user-friendly and visually consistent interfaces. I also have computer hardware skills, especially in hardware problem solving. I'm also interested in new areas such as AI, cloud, and prompt engineering.
        </p>
      </motion.div>
    </div>
  );
}
