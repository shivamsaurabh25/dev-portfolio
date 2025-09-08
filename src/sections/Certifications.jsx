import React from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import certificate1Pdf from '../assets/KYP.pdf';
import certificate2Pdf from '../assets/ADCA.pdf';
import certificate3Pdf from '../assets/Internship.pdf';
import certificate4Pdf from '../assets/ReactBootcamp.pdf';
import certificate5Pdf from '../assets/AWS.pdf';
import certificate6Pdf from '../assets/Kodbud.pdf';
import certificate7Pdf from '../assets/Ethical Hacking.pdf';

const certifications = [
  {
    id: 1,
    image: "https://iili.io/3oNLIcb.md.jpg",
    pdfLink: certificate1Pdf,
  },
  {
    id: 2,
    image: "https://iili.io/3oNiIse.md.jpg",
    pdfLink: certificate2Pdf,
  },
  {
    id: 3,
    image: "https://iili.io/3fm0Oo7.md.jpg",
    pdfLink: certificate3Pdf,
  },
  {
    id: 4,
    image: "https://iili.io/2bT9ScB.md.jpg",
    pdfLink: certificate4Pdf,
  },
  {
    id: 5,
    image: "https://iili.io/FVONHZP.md.jpg",
    pdfLink: certificate5Pdf,
  },
  {
    id: 6,
    image: "https://iili.io/KoLkXu1.md.jpg",
    pdfLink: certificate6Pdf,
  },
  {
    id: 7,
    image: "https://iili.io/FvJtRlR.md.jpg",
    pdfLink: certificate7Pdf,
  }

];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const Certifications = () => {
  return (
    <section className="container mx-auto px-4 pt-10 pb-10" id="certifications">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
        Certifications
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-xl shadow-md"
          >
            <img
              src={cert.image}
              alt="Certificate"
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition duration-300 flex justify-center items-center gap-4">
              <a
                href={cert.pdfLink}
                target="_blank"
                rel="noreferrer"
                className="text-white text-2xl bg-indigo-600 p-3 rounded-full hover:bg-indigo-700"
              >
                <FaEye />
              </a>
              <a
                href={cert.pdfLink}
                download
                className="text-white text-2xl bg-green-600 p-3 rounded-full hover:bg-green-700"
              >
                <FaDownload />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;