"use client";

import Image from "next/image";
import { Shield, Trophy, HeartHandshake } from "lucide-react";

export default function SportsPillars({ onOpenImageModal }) {
  const cards = [
    {
      title: "RCD Espanyol Academy SA",
      badge: "LaLiga Partner",
      icon: Shield,
      desc: "First official LaLiga club academy in South Africa.",
      highlight: "King David Victory Park, Johannesburg",
    },
    {
      title: "IberCup South Africa",
      badge: "220 Teams",
      icon: Trophy,
      desc: "Africa's largest international youth football tournament.",
      highlight: "4,400+ Players · 1,000+ Matches · 35,000+ Fans",
    },
    {
      title: "Grassroots & Inclusivity",
      badge: "10,000+ Players",
      icon: HeartHandshake,
      desc: "Nationwide player clinics & Special Olympics partner.",
      highlight: "China, Hong Kong & South Africa with Kelme",
    },
  ];

  return (
    <section id="football" className="section section-azure" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "24px" }}>
          <div className="eyebrow-royal">
            <span>Football Leadership</span>
          </div>
          <h2 className="section-title">RCDE Academy &amp; IberCup SA</h2>
        </div>

        {/* Panoramic Stadium Photo - 100% Uncropped */}
        <div style={{ marginBottom: "24px" }}>
          <div
            className="img-frame-white"
            onClick={() =>
              onOpenImageModal({
                src: "/images/rcde-academy-squad.png",
                alt: "RCD Espanyol de Barcelona Academy South Africa squad and coaches",
                caption: "King David Victory Park, Johannesburg · Official RCDE Academy SA Assembly.",
              })
            }
          >
            <Image
              src="/images/rcde-academy-squad.png"
              alt="RCD Espanyol de Barcelona Academy South Africa squad"
              width={1600}
              height={550}
              className="img-original"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div style={{ marginTop: "6px", display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#64748B" }}>
            <span>King David Victory Park Stadium · RCDE Academy SA Squad</span>
            <span style={{ color: "#1E40AF", fontWeight: 600 }}>🔍 Tap to zoom</span>
          </div>
        </div>

        {/* 3 Ultra-Clean Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="royal-card" style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#1E40AF",
                      background: "#EFF6FF",
                      border: "1px solid #BFDBFE",
                      padding: "2px 8px",
                      borderRadius: "9999px",
                    }}
                  >
                    {c.badge}
                  </span>
                  <Icon size={16} color="#1E40AF" />
                </div>

                <h3 className="font-heading" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "10px" }}>{c.desc}</p>
                <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1E40AF" }}>
                  {c.highlight}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
