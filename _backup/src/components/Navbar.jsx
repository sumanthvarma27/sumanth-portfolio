import React from "react";

const links = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="nav-logo">
          <div className="nav-avatar" />
          <div>
            <div className="nav-name">Sumanth Varma Gadiraju</div>
            <div className="nav-tagline">Software Developer · AI/ML</div>
          </div>
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className="nav-link"
              onClick={() => scrollToId(l.id)}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:varma.gadiraju2001@gmail.com"
            className="nav-cta"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
