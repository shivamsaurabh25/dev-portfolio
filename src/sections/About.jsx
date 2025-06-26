import React from 'react';
import { motion } from 'framer-motion';
import Resume from '../assets/Resume.pdf';
import { TypeAnimation } from 'react-type-animation';
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const About = () => {
  const downloadResume = () => {
    window.open(Resume, '_blank');
  };

  const aboutStats = [
    {
      id: 1,
      icon: <RiFireLine className="about__icon text-indigo-600 dark:text-indigo-400 text-3xl" />,
      title: "1",
      subtitle: "Months of Experience",
    },
    {
      id: 2,
      icon: <RiCupLine className="about__icon text-indigo-600 dark:text-indigo-400 text-3xl" />,
      title: "18",
      subtitle: "Github Repositories",
    },
    {
      id: 3,
      icon: <RiGroupLine className="about__icon text-indigo-600 dark:text-indigo-400 text-3xl" />,
      title: "12",
      subtitle: "Launched Projects",
    },
    {
      id: 4,
      icon: <RiTrophyLine className="about__icon text-indigo-600 dark:text-indigo-400 text-3xl" />,
      title: "100%",
      subtitle: "Code Quality",
    },
  ];

  return (
    <motion.section
      id="about"
      className="about container section pt-10 pb-10 px-4 max-w-4xl mx-auto flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="section__title text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <TypeAnimation
        sequence={[
          "I'm Shivam, a Frontend Developer 💻",
          2000,
          "I'm from Bihar, India 🇮🇳",
          2000,
          "I'm pursuing BCA from Nalanda College 🎓",
          2000,
          "I love building web apps 🚀",
          2000,
        ]}
        wrapper="h3"
        cursor={true}
        repeat={Infinity}
        className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-8"
      />

      <motion.div
        className="about__info max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="about__description text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Hello! I'm <strong>Shivam</strong>, and I'm based in <strong>Bihar, India</strong>. Currently, I study at <strong>Nalanda College Biharsharif</strong>,
          where I am pursuing my <strong>BCA degree (2nd year)</strong>.
          <br /><br />
          Fast forward to today, and I can honestly say it's been a beautiful journey. I hope to grow even further as a <strong>Software Engineer</strong>.
          My current focus these days is on expanding my portfolio by building projects that I can add here, as well as being a great team player in my current role.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={downloadResume}
          className="btn px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300 mb-8"
        >
          Download CV
        </motion.button>

        <motion.div
          className="about__boxes grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {aboutStats.map(({ id, icon, title, subtitle }) => (
            <div
              key={id}
              className="about__box bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-center gap-4"
            >
              {icon}
              <div>
                <h3 className="about__title text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
                <span className="about__subtitle text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;