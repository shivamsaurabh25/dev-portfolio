import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Nalanda College, Biharsharif",
    year: "2023 - 2026",
    percentage: "Yet to calculate",
  },
  {
    degree: "Intermediate (12th)",
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
  const [selectedEdu, setSelectedEdu] = useState(null);

  return (
    <section id="education" className="pt-10 pb-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Education
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedEdu(edu)}
            className="cursor-pointer bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-600">{edu.degree}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedEdu && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEdu(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-3">
                {selectedEdu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{selectedEdu.college}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{selectedEdu.year}</p>
              <p className="mt-4 font-medium text-gray-900 dark:text-white">
                Percentage: {selectedEdu.percentage}
              </p>
              <button
                onClick={() => setSelectedEdu(null)}
                className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;