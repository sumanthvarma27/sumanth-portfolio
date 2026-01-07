import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "AI-Powered Catering Assistant",
    desc: "Chat-based ordering + intelligent menu recommendations.",
  },
  {
    title: "Logo Detection Tool",
    desc: "YOLOv5 + OpenCV real-time brand logo identification.",
  },
  {
    title: "Order Summary & Analytics Bot",
    desc: "Automated POS data summarizer using LLMs.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {projectList.map((p, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 bg-gray-800 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
