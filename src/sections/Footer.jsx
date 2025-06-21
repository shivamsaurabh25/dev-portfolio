import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDev,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Developer Credit */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Built with 💙 by Shivam Saurabh</h2>
            <p className="text-sm mt-1">© {year} All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl flex-wrap justify-center">
            <a
              href="mailto:shivamsaurabh2862@gmail.com"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Email"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://github.com/shivamsaurabh25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shivamsaurabh25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/shivamsaurabh25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://dev.to/shivamsaurabh25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Dev.to"
            >
              <FaDev />
            </a>
            <a
              href="https://facebook.com/shivam.saurabh.714"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/shivamsaurabh25"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400">
          Powered by React, Tailwind CSS, and ❤️ from India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;