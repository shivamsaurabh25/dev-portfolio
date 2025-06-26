import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaGitAlt, FaGithub, FaMarkdown, FaCss3, FaCode
} from 'react-icons/fa';
import { SiFirebase, SiC, SiCplusplus, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
  { name: 'C', icon: <SiC className="text-gray-700 dark:text-gray-300" /> },
  { name: 'C++', icon: <SiCplusplus className="text-purple-500" /> },
  { name: 'Java', icon: <FaJava className="text-red-600" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" /> },
  { name: 'Markdown', icon: <FaMarkdown className="text-gray-700 dark:text-white" /> },
  { name: 'VS Code', icon: <FaCode className="text-blue-600" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="pt-10 pb-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;