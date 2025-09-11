import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('');

  const socialLinks = [
    { icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/kaveesha-nanayakkara-688938189/", title: "LinkedIn" },
    { icon: BsInstagram, href: "https://www.instagram.com/kav_e_e/", title: "Instagram" },
    { icon: BsGithub, href: "https://github.com/KaveeSL", title: "GitHub" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      console.log('Form data being sent:', formData);
      console.log('Attempting to send email with EmailJS...');
      
      const result = await emailjs.sendForm(
        'service_kx7bs6s',
        'template_7azod7j',
        formRef.current,
        'v7FpjYU0fcpGYhi4E'
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', website: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Email send failed. Full error:', error);
      console.error('Error details:', {
        message: error.message,
        text: error.text,
        status: error.status
      });
      
      setErrorMessage(error.text || error.message || 'Unknown error occurred');
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5 py-16'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        Contact <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form ref={formRef} onSubmit={handleSubmit} className='w-full space-y-3 lg:space-y-5'>
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="name"
              placeholder='Your name' 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="email" 
              name="email"
              placeholder='Email' 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="website"
              placeholder='Your website (If exists)' 
              value={formData.website}
              onChange={handleInputChange}
            />
            <textarea 
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full' 
              name="message"
              placeholder='How can I help?*'
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                type='submit'
                disabled={isSubmitting}
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Sending...' : 'Get In Touch'}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black cursor-pointer"
                    whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                  >
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm font-medium"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded border border-red-200"
              >
                ❌ Failed to send message: {errorMessage}
                <br/>
                <small className="text-gray-600">
                  Please try again or contact me directly at kasmirakaveesha@gmail.com
                </small>
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences. Always interested in learning new things and finding creative ways to solve problems.</p>

          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="mailto:kasmirakaveesha@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              kasmirakaveesha@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className='flex items-center gap-2 group'
              href="https://github.com/KaveeSL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              github.com/KaveeSL
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
