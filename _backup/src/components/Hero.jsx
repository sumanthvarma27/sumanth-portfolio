import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div>
        <motion.div
          className="hero-kicker-pill"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="dot" />
          Open to Software / AI Roles
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Building <span className="hero-highlight">useful, intelligent</span>{" "}
          products for people.
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          I&apos;m a developer who loves combining{" "}
          <strong>clean interfaces</strong> with{" "}
          <strong>robust backend systems</strong> and{" "}
          <strong>AI-powered automation</strong>. From full-stack apps to data
          pipelines and ML models, I enjoy owning the end-to-end build.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          <a
            href="#projects"
            className="btn-primary"
          >
            View projects
          </a>
          <a
            href="https://github.com/sumanthvarma27"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            GitHub profile ↗
          </a>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span>CS + Law background</span>
          <span>AI / Full-stack / Data</span>
          <span>Based in USA · open to remote</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-card">
          <div className="hero-card-top">
            <div>
              <div className="hero-pill">Currently building</div>
              <div style={{ fontSize: "0.85rem", marginTop: 6 }}>
                AI-powered restaurant tools
              </div>
            </div>
            <div style={{ textAlign: "right", fontSize: "0.75rem" }}>
              <div style={{ color: "#9cffd5" }}>Latency-aware</div>
              <div style={{ color: "var(--muted)" }}>Prod-ready</div>
            </div>
          </div>

          <div className="hero-tech-chips">
            <span className="hero-chip">React · Vite</span>
            <span className="hero-chip">Node.js · Express</span>
            <span className="hero-chip">PostgreSQL</span>
            <span className="hero-chip">Python · ML</span>
            <span className="hero-chip">Spark / Data</span>
          </div>

          <div className="hero-bottom-metrics">
            <div>
              <div style={{ fontSize: "0.78rem", color: "#9ea2ff" }}>
                10+ projects
              </div>
              <div style={{ fontSize: "0.75rem" }}>full-stack & AI</div>
            </div>
            <div>
              <div style={{ fontSize: "0.78rem", color: "#ffb3cf" }}>
                2 disciplines
              </div>
              <div style={{ fontSize: "0.75rem" }}>CS & Law fusion</div>
            </div>
            <div>
              <div style={{ fontSize: "0.78rem", color: "#ffd68b" }}>
                Loves learning
              </div>
              <div style={{ fontSize: "0.75rem" }}>and building in public</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
