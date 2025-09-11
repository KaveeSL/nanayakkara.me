import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) Software Engineering",
      institution: "ICBT Campus - Cardiff Metropolitan University-UK",
      year: "2024",
      result: "Second Class, Division One",
      icon: <FaGraduationCap size={40} />
    },
    {
      id: 2,
      degree: "HD in Computing and Software Engineering",
      institution: "ICBT Campus - Cardiff Metropolitan University-UK",
      year: "2023",
      result: "Merit",
      icon: <FaUniversity size={40} />
    },
    {
      id: 3,
      degree: "Logic, Economics, ICT",
      institution: "GCE Advanced Level",
      year: "2021",
      result: "Passed all subjects",
      icon: <FaSchool size={40} />
    },
    {
      id: 4,
      degree: "General Education",
      institution: "GCE Ordinary Level",
      year: "2018",
      result: "Successfully completed",
      icon: <FaSchool size={40} />
    }
  ];

  return (
    <div className="mt-3 lg:mt-16" id="education">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Education</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="bg-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="text-black">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-black font-semibold">
                      {edu.year}
                    </span>
                    <span className="text-green-600 font-medium text-sm">
                      {edu.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
