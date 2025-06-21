import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
  FaGitAlt, FaGithub, FaMarkdown, FaCss3, FaCode
} from 'react-icons/fa';
import { SiFirebase, SiC, SiCplusplus, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, desc: 'Markup language for creating web pages.' },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" />, desc: 'Styling language for designing websites.' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, desc: 'Scripting language for web interactivity.' },
  { name: 'React', icon: <FaReact className="text-cyan-500" />, desc: 'JavaScript library for building UI.' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, desc: 'Utility-first CSS framework for fast UI building.' },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, desc: 'Backend platform by Google for web and mobile apps.' },
  { name: 'C', icon: <SiC className="text-gray-700 dark:text-gray-300" />, desc: 'Procedural programming language.' },
  { name: 'C++', icon: <SiCplusplus className="text-purple-500" />, desc: 'OOP-based extension of C language.' },
  { name: 'Java', icon: <FaJava className="text-red-600" />, desc: 'Popular high-level OOP language.' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, desc: 'Version control system for tracking changes.' },
  { name: 'GitHub', icon: <FaGithub className="text-gray-900 dark:text-white" />, desc: 'Platform for hosting and collaborating on Git projects.' },
  { name: 'Markdown', icon: <FaMarkdown className="text-gray-700 dark:text-white" />, desc: 'Lightweight markup language for docs and README files.' },
  { name: 'VS Code', icon: <FaCode className="text-blue-600" />, desc: 'Powerful code editor developed by Microsoft.' }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Skills</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;