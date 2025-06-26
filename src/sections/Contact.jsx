import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Please complete the form above");
      return;
    }

    setLoading(true);

    const templateParams = { name, email, subject, message };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Successfully sent email.");
        },
        (error) => {
          console.error(error);
          setLoading(false);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <section className="pt-10 pb-10 px-4 max-w-6xl mx-auto" id="contact">
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10 items-start mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Let's talk about everything!</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Don’t like forms? Send me an{" "}
            <a href="mailto:shivamsaurabh2862@gmail.com" className="text-blue-600 underline">
              email
            </a>. 👋
          </p>
        </div>

        <form onSubmit={submitHandler} className="w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Insert your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="w-full mt-4">
            <input
              type="text"
              placeholder="Insert your subject"
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full mt-4">
            <textarea
              cols="30"
              rows="6"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 min-h-[150px] rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <ToastContainer position="bottom-right" theme={theme || "light"} />
      </motion.div>
    </section>
  );
};

export default Contact;