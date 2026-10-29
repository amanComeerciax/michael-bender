"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #BFDBFE",
        background: "#EFF6FF",
        padding: "36px 0 28px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <span style={{ fontSize: "1rem", fontWeight: 800, color: "#1E40AF", display: "block" }}>
              Michael Bender
            </span>
            <span style={{ fontSize: "0.82rem", color: "#475569" }}>
              CEO · RCD Espanyol de Barcelona Academy SA &amp; IberCup SA
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="https://www.linkedin.com/in/michael-bender-43774625/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.82rem",
                color: "#1E40AF",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={13} />
            </a>
            <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
              © {new Date().getFullYear()} Michael Bender
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
