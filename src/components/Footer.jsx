import React from 'react'
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <motion.img
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => scrollToSection("home")}
        className="h-10 cursor-pointer invert"
        src="/assets/logo.png"
        alt="Logo"
      />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p> © 2025 Kaveesha Nanayakkara. All rights reserved.</p>
      </div>
    </div>
  )
}