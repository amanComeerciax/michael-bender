"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Youth Football", href: "#football" },
    { label: "Diplomacy", href: "#diplomacy" },
    { label: "Creative Work", href: "#creative" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="site-nav">
      <div className="container nav-row">
        <div>
          <a href="#" className="brand-text">
            Michael <span>Bender</span>
          </a>
          <span className="brand-sub">CEO · Sports Governance &amp; Academies</span>
        </div>

        {/* Desktop Menu */}
        <nav>
          <ul className="nav-menu">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-item-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="https://www.linkedin.com/in/michael-bender-43774625/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-royal"
            style={{ padding: "8px 18px", fontSize: "0.85rem", minHeight: "38px" }}
          >
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-drawer-link"
            onClick={() => setMobileOpen(false)}
          >
            <span>{link.label}</span>
            <ChevronRight size={16} color="#94A3B8" />
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-royal"
          style={{ width: "100%", marginTop: "6px" }}
          onClick={() => setMobileOpen(false)}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
