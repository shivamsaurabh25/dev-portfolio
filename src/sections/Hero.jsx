import React from 'react';
import { motion } from "framer-motion";

const Hero = () => (
  <section id="hero" className="pt-20 pb-10 px-4 max-w-6xl mx-auto text-center flex flex-col items-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative mb-6"
    >
      <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-pulse-slow absolute top-0 left-0 blur-2xl opacity-40"></div>
      <img
        src="https://iili.io/FnmarP4.jpg"
        alt="My Photo"
        className="w-40 h-40 object-cover rounded-full border-4 border-white dark:border-gray-800 relative z-10 shadow-lg"
      />
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-5xl font-bold mb-2"
    >
      Hi, I'm <span className="text-indigo-500">Shivam Saurabh</span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
    >
      I build modern web apps using React, Tailwind, and more.
    </motion.p>
  </section>
);

export default Hero;