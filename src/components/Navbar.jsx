import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const links = [
    "About", "Skills", "Experience", "Education",
    "Projects", "Certifications", "Blog", "Testimonials", "Contact"
  ];

  // Close mobile menu on window resize (>= md)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          👨‍💻 DevPortfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition duration-200"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden text-gray-800 dark:text-white"
          aria-label="Toggle Menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4 rounded-b-xl">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
            >
              {link}
            </a>
          ))}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setOpen(false);
            }}
            className="mt-3 w-full p-2 rounded bg-gray-200 dark:bg-gray-700 text-sm font-medium"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;