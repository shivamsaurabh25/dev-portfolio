import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // optional - use your custom CSS if preferred

const educationData = [
  {
    degree: "Bachelor of Computer Applications",
    college: "Nalanda College, Biharsharif",
    year: "2023 - 2026",
    percentage: "Yet to calculate",
  },
  {
    degree: "Intermediate",
    college: "Nalanda College, Biharsharif",
    year: "2021 - 2023",
    percentage: "65%",
  },
  {
    degree: "Secondary (10th)",
    college: "R.P.S School, Biharsharif",
    year: "2020 - 2021",
    percentage: "80%",
  },
];

const Education = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <motion.section
      id="education"
      className="py-20 px-4 max-w-4xl mx-auto"
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
        Education
      </motion.h2>

      <Tabs
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        selectedTabClassName="bg-indigo-600 text-white"
      >
        <TabList className="flex flex-wrap justify-center gap-4 mb-6">
          {educationData.map((edu, idx) => (
            <Tab
              key={idx}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-md shadow cursor-pointer hover:bg-indigo-500 hover:text-white transition"
            >
              {edu.degree}
            </Tab>
          ))}
        </TabList>

        {educationData.map((edu, idx) => (
          <TabPanel key={idx}>
            <motion.div
              className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{edu.degree}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">{edu.college}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
              <p className="mt-2 text-md text-gray-800 dark:text-white font-medium">
                Percentage: {edu.percentage}
              </p>
            </motion.div>
          </TabPanel>
        ))}
      </Tabs>
    </motion.section>
  );
};

export default Education;