import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";
import { SiGmail } from "react-icons/si";

export default function Home() {
  const socialLinks = [
    { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/kaveesha-nanayakkara-688938189/", title: "LinkedIn" },
    { icon: BsInstagram, href: "https://www.instagram.com/kav_e_e/", title: "Instagram" },
    { icon: BsGithub, href: "https://github.com/KaveeSL", title: "GitHub" },
    { icon: SiGmail, href: "contact", title: "Gmail" } // ✅ use section id
  ];

  // ✅ detect mobile screen
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110, // adjust offset for navbar
        behavior: "smooth",
      });
    }
  };

  // ✅ sequences for desktop vs mobile
  const sequence = isMobile
    ? [
        "I am Kaveesha\nNanayakkara",
        1000,
        "I am Bat\nDeveloper",
        1000,
      ]
    : [
        "I am Kaveesha Nanayakkara",
        1000,
        "I am Bat Man",
        1000,
      ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
        
        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            {/* Typing animation */}
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={sequence}
                speed={10}
                style={{
                  fontWeight: 600,
                  whiteSpace: isMobile ? "pre-line" : "normal", // ✅ break only on mobile
                }}
                repeat={Infinity}
              />
            </motion.h2>

            {/* Static headings */}
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">#</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                UI/UX Designer
              </span>
            </motion.h2>
            
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">#</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Frontend Web Developer
              </span>
            </motion.h2>

            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">Sri Lanka.</span>
            </motion.h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <b>Web developer</b> with strong <b>creative skills</b>. Always interested in{" "}
            <b>learning new things</b>. Like working with a <b>team</b> and happy to bring{" "}
            <b>creativity</b> and <b>technical skills</b>. Also familiar with{" "}
            <b>AI image generation tools</b> and <b>graphic design tools</b>. Mostly{" "}
            familiar with <b>Figma</b> for <b>UI/UX designs</b> (love to work on them).
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-x-5 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href !== "contact" ? social.href : undefined}
                onClick={social.href === "contact" ? (e) => {
                  e.preventDefault();
                  scrollToSection("contact"); // ✅ scrolls to contact
                } : undefined}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                target={social.href !== "contact" ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={social.title}
              >
                <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}