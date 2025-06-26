import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const WorkExperience = [
  {
    id: 1,
    title: "Internship",
    company: "EDGEINTERNS.AI",
    yearsActive: "Feb 2025 - March 2025",
    information: [
      "Created an E-Commerce website using ReactJS.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Freelance",
    yearsActive: "Jan 2024 - Present",
    information: [
      "Built multiple responsive websites for clients.",
      "Used React, Tailwind CSS, and Firebase.",
    ],
  },
];

const Button = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition text-sm font-medium"
  >
    {children}
  </motion.button>
);

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <motion.section
      id="experience"
      className="pt-10 pb-10 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Experience
      </motion.h2>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        selectedTabClassName="bg-indigo-600 text-white"
      >
        <TabList className="flex flex-wrap justify-center gap-4 mb-8">
          {WorkExperience.map(({ id, company }) => (
            <Tab key={id} className="focus:outline-none">
              <Button>{company}</Button>
            </Tab>
          ))}
        </TabList>

        {WorkExperience.map(({ id, title, company, yearsActive, information }) => (
          <TabPanel key={id}>
            <motion.div
              className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-1">
                {title} <span className="text-indigo-500">@ {company}</span>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{yearsActive}</p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-center">
                {information.map((info, i) => (
                  <li key={i} className="mb-2">{info}</li>
                ))}
              </ul>
            </motion.div>
          </TabPanel>
        ))}
      </Tabs>
    </motion.section>
  );
};

export default Experience;