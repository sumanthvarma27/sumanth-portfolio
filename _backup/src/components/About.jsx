import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <span className="section-kicker">About</span>
        <h2 className="section-title">A bit about me</h2>
        <p className="section-subtitle">
          I blend a strong Computer Science background with legal training. I
          enjoy building products where reliability, usability, and compliance
          all matter.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <p className="card-body">
          I&apos;ve worked on{" "}
          <strong>full-stack web apps, data pipelines, and ML projects</strong>{" "}
          — including an AI-powered catering assistant, a logo detection tool,
          and an order analytics bot for restaurants.
          <br />
          <br />
          On the legal side, I&apos;ve explored arbitration, corporate law and
          tech regulation, which helps me think about risk, compliance and
          real-world impact when designing systems.
        </p>
      </motion.div>
    </section>
  );
}
