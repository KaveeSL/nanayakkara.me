import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-Voting System – Chartered Accountants of Sri Lanka",
    description: "Designing and implementing an e-voting platform focusing on UI/UX using Next.js and Figma.",
    image: "/assets/project1.png",
    status: "Ongoing",
    technologies: ["Figma", "Next.js"]
  },
  {
    id: 2,
    title: "Database System – GNOA Sri Lanka",
    description: "Building a database system for the Government Nursing Officers' Association using PHP, MySQL, and Figma.",
    image: "/assets/project2.png",
    status: "Ongoing",
    technologies: ["Figma", "PHP", "MySQL"]
  },
  {
    id: 3,
    title: "New LMS for CODL - University Of Moratuwa",
    description: "Creating Learning Management System - Figma wireframes and developing the frontend UI with React.js, Material-UI, Tailwind, and JavaScript for responsive layouts.",
    image: "/assets/project3.png",
    status: "Ongoing",
    technologies: ["React.js", "Figma", "Material-UI", "Tailwind"]
  },
  {
    id: 4,
    title: "Personal Blog Website – nlgsl.com",
    description: "Built custom blog for a nursing tutor using PHP and HTML/CSS",
    image: "/assets/project4.png",
    status: "Completed",
    technologies: ["PHP", "HTML", "CSS"]
  },
  {
    id: 5,
    title: "Restaurant Website - Signature Cuisine",
    description: "Developed a responsive website for a restaurant, handling both frontend and backend, focusing on customer reservations and menu management",
    image: "/assets/project5.png",
    status: "Completed",
    technologies: ["HTML", "CSS", "PHP", "SQL"]
  },
  {
    id: 6,
    title: "Bookshop Stock Management System",
    description: "Created a stock management system with Java Swing UI and SQLite for inventory tracking and sales reporting",
    image: "/assets/project5.png",
    status: "Completed",
    technologies: ["Java Swing", "SQLite"]
  },
  {
    id: 7,
    title: "Flower Bouquets Shop Mobile Application",
    description: "Developed a mobile app for bouquet ordering with inventory and order management functionalities",
    image: "/assets/project5.png",
    status: "Completed",
    technologies: ["Java Swing", "SQLite"]
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                  {String(project.id).padStart(2, "0")}
                </h2>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === "Ongoing" 
                    ? "bg-yellow-500 text-black" 
                    : "bg-green-500 text-white"
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
