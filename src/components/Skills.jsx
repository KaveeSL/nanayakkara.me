import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaDatabase, FaJava, FaHtml5, FaCss3Alt, FaPhp, FaUniversity, FaGraduationCap, FaUsers } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiMysql, SiGithub, SiCanva, SiAdobephotoshop } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "React.js", icon: <FaReact size={50} /> },
    { id: 2, name: "HTML 5", icon: <FaHtml5 size={50} /> },
    { id: 3, name: "CSS", icon: <FaCss3Alt size={50} /> },
    { id: 4, name: "PHP", icon: <FaPhp size={50} /> },
    { id: 5, name: "MySQL", icon: <SiMysql size={50} /> },
    { id: 6, name: "JavaScript", icon: <FaJs size={50} /> },
    { id: 7, name: "Java", icon: <FaJava size={50} /> },
    { id: 8, name: "GitHub", icon: <SiGithub size={50} /> },
    { id: 9, name: "Figma", icon: <CgFigma size={50} /> },
    { id: 10, name: "Photoshop", icon: <SiAdobephotoshop size={50} /> },
    { id: 11, name: "Canva", icon: <SiCanva size={50} /> },
    { id: 12, name: "Tailwind", icon: <RiTailwindCssFill size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "University of Moratuwa - Centre for Open and Distance Learning (CODL)",
      role: "Frontend Web Developer & UI/UX Designer",
      period: "March 2023 - Present",
      description: "Designing and developing user interfaces for university web applications. Creating responsive and intuitive UI/UX solutions.",
      logo: <FaUniversity size={28} className="text-white" />,
      duration: "(1.5 YEAR + EXPERIENCE)"
    },
    {
      id: 2,
      company: "University of Moratuwa - Centre for Open and Distance Learning (CODL)",
      role: "Social Media Manager",
      period: "March 2023 - Present",
      description: "Managing BIT-UoM official Facebook page and social media presence. Creating and curating engaging visual content. Handling community engagement and online communications.",
      logo: <FaUsers size={28} className="text-white" />,
      duration: "(1 YEAR + EXPERIENCE)"
    },
    {
      id: 3,
      company: "University of Moratuwa - Centre for Open and Distance Learning (CODL)",
      role: "Module Coordinator (Instructor) - BIT Program",
      period: "March 2024 - Present",
      description: "Coordinating academic modules for the BIT program. Managing course content and student communications. Supporting administrative operations at CODL.",
      logo: <FaGraduationCap size={28} className="text-white" />,
      duration: "(5 MONTHS + EXPERIENCE)"
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center w-7 h-7">
                    {exp.logo}
                  </div>
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role}
                  </h2>
                </div>
                <div className="text-right">
                  <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base block">
                    {exp.period}
                  </span>
                  <span className="text-yellow-400 font-semibold text-xs lg:text-sm">
                    {exp.duration}
                  </span>
                </div>
              </div>
              <p className="text-[#D4D4D8] mt-4 text-sm/6 lg:text-base font-light">
                {exp.company}
              </p>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
