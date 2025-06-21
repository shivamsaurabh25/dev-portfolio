import React, { useState, useEffect } from "react";
import { FaEye, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const [items, setItems] = useState([]);
  const [fullItems, setFullItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    const fetchedItems = [
      {
        id: 1,
        image: "https://iili.io/2DGNcb9.md.png",
        title: "Multi Mode Calculator",
        category: ["Frontend"],
        url: "https://multi-mode-calculator.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/Calculator/",
      },
      {
        id: 2,
        image: "https://iili.io/2DCJYYP.md.png",
        title: "E-Commerce Website",
        category: ["Frontend"],
        url: "https://shopstopper.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/E-Commerce",
      },
      {
        id: 3,
        image: "https://iili.io/2ptFb9f.md.png",
        title: "Dictionary",
        category: ["Frontend"],
        url: "https://dictionary-shivam.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/Dictionary",
      },
      {
        id: 4,
        image: "https://iili.io/2yG1jse.md.png",
        title: "Weather",
        category: ["Frontend"],
        url: "https://weatherbyshivam.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/Weather",
      },
      {
        id: 5,
        image: "https://iili.io/3Jq5I4a.md.png",
        title: "Name Generator",
        category: ["Frontend"],
        url: "https://name-generator-by-shivam.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/Name-Generator",
      },
      {
        id: 6,
        image: "https://iili.io/3JzzJp4.md.png",
        title: "Chrome Extension",
        category: ["Extension"],
        url: "",
        repositoryUrl: "https://github.com/shivamsaurabh25/Glassmorphism_Extension_For_Chrome",
      },
      {
        id: 7,
        image: "https://iili.io/3B2K3xV.md.png",
        title: "To-Do List",
        category: ["Frontend"],
        url: "https://shivam-to-do-list.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/to-do-app",
      },
      {
        id: 8,
        image: "https://iili.io/3BRNBX1.md.png",
        title: "PDF<->JPG Converter",
        category: ["Frontend"],
        url: "https://pdf-jpg-convertor.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/pdf---jpg-convertor",
      },
      {
        id: 9,
        image: "https://iili.io/3oOw6lt.md.png",
        title: "Photo Gallery",
        category: ["Frontend"],
        url: "https://photo-gallery-by-shivam.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/photo-gallery/",
      },
      {
        id: 10,
        image: "https://iili.io/3Yoe08J.md.png",
        title: "Memory Match",
        category: ["Games"],
        url: "https://memory-match-shivam.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/memory-match/",
      },
      {
        id: 11,
        image: "https://iili.io/3MhUafI.md.png",
        title: "Tic-Tac-Toe Endless",
        category: ["Games"],
        url: "https://tic-tac-toe-endless.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/tic-tac-toe/",
      },
      {
        id: 12,
        image: "https://iili.io/3yByguR.md.png",
        title: "AI Song Suggester For IG",
        category: ["Frontend"],
        url: "https://ai-song-suggester.vercel.app/",
        repositoryUrl: "https://github.com/shivamsaurabh25/ai-song-suggester/",
      },
    ];

    setItems(fetchedItems);
    setFullItems(fetchedItems);
  }, []);

  const filterItems = (categoryItem) => {
    if (categoryItem === "All") {
      setItems(fullItems);
    } else {
      const filteredItems = fullItems.filter((item) =>
        item.category.includes(categoryItem)
      );
      setItems(filteredItems);
    }
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Recent Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Frontend", "Backend", "Extension", "Games"].map((cat, i) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              filterItems(cat);
              setActiveFilter(i);
            }}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
              activeFilter === i
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.length === 0 ? (
          <p className="col-span-full text-center text-gray-600 dark:text-gray-300">
            No projects available
          </p>
        ) : (
          items.map(({ id, image, title, category, url, repositoryUrl }, index) => (
            <motion.div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-4">
                <span className="text-xs text-indigo-500 font-semibold">
                  {category.join(", ")}
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-2">
                  {title}
                </h3>
              </div>
              <div className="absolute top-2 right-2 flex gap-2">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:scale-110 transition text-xl"
                  >
                    <FaEye />
                  </a>
                )}
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:scale-110 transition text-xl"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </motion.section>
  );
};

export default Projects;