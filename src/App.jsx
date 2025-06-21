import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Blog from "./sections/Blog";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

// Floating decoration component
const FloatingDecoration = () => {
  const dots = Array.from({ length: 40 }); // Increase from 10 to 40

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {dots.map((_, i) => {
        const size = Math.random() * 4 + 2; // 2px to 6px
        const duration = Math.random() * 5 + 5; // 5s to 10s
        const delay = Math.random() * 5;

        return (
          <div
            key={i}
            className="bg-indigo-300 opacity-20 rounded-full animate-float"
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div
        className={`relative min-h-screen transition-all duration-500 overflow-x-hidden ${
          darkMode
            ? "bg-gradient-to-tr from-gray-900 via-gray-800 to-black text-white"
            : "bg-gradient-to-br from-[#f2f7fd] via-[#eaf3fb] to-[#dce8f7] text-gray-900"
        }`}
      >
        <FloatingDecoration />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;