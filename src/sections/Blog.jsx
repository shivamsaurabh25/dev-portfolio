import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    category: "Career Growth",
    image: "https://iili.io/2pBXnHv.md.png",
    link: "https://dev.to/shivam_saurabh_45/why-every-developer-should-work-on-open-source-or-side-projects-how-personal-projects-boost-2k73",
    title: "Why Every Developer Should Work on Open Source or Side Projects?",
    date: "13 February, 2025",
    author: "Shivam"
  },
  {
    category: "AI",
    image: "https://iili.io/2pFddiP.md.png",
    link: "https://dev.to/shivam_saurabh_45/the-future-of-ai-in-software-development-1ckl",
    title: "The Future of AI in Software Development",
    date: "14 February, 2025",
    author: "Shivam"
  },
  {
    category: "React",
    image: "https://iili.io/2paNu9a.md.png",
    link: "https://dev.to/shivam_saurabh_45/react-server-components-the-future-of-react-performance-556o",
    title: "React Server Components: The Future of React Performance",
    date: "15 February, 2025",
    author: "Shivam"
  }
];

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="blog container section" id="blog">
      <motion.h2
        className="section__title text-center text-3xl font-bold mb-10 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        Latest Posts
      </motion.h2>

      <div className="blog__container grid md:ml-20 ml-4 mr-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            className="blog__card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transform transition duration-500 hover:scale-105 hover:rotate-[1deg]"
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="relative group">
              <a href="#"><span className="absolute top-2 left-2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">{post.category}</span></a>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
              <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                <span>{post.date}</span>
                <span className="text-gray-400">•</span>
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;