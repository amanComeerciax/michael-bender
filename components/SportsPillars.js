"use client";

import Image from "next/image";
import { Shield, Trophy, HeartHandshake, MapPin } from "lucide-react";

export default function SportsPillars({ onOpenImageModal }) {
  const cards = [
    {
      title: "RCD Espanyol de Barcelona Academy SA",
      badge: "LaLiga Partner · 5th Year",
      icon: Shield,
      desc: "The first official LaLiga club academy in South Africa, based at King David Victory Park in Johannesburg. Integrates European youth training methodology and provides direct pathways for African players and coaches to Barcelona.",
      highlight: "King David Victory Park Campus · Johannesburg",
    },
    {
      title: "IberCup South Africa",
      badge: "Inaugural SA Edition",
      icon: Trophy,
      desc: "Brought the world's premier international youth football tournament to South Africa. The 2024 tournament hosted 220 teams, 9 international contingents, and over 35,000 attendees over 5 days.",
      highlight: "220 Teams · 4,400+ Players · 1,000+ Matches",
    },
    {
      title: "Clinics & Special Olympics",
      badge: "Inclusivity & Grassroots",
      icon: HeartHandshake,
      desc: "Delivered LaLiga player clinics to over 10,000 young South Africans. Lifelong advocate for inclusive sport, leading Special Olympics initiatives in China and Hong Kong with Kelme.",
      highlight: "10,000+ Players Impacted · Kelme Partner",
    },
  ];

  return (
    <section id="football" className="section section-azure">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <div className="eyebrow-royal">
            <span>Football Infrastructure</span>
          </div>
          <h2 className="section-title">RCD Espanyol de Barcelona &amp; IberCup SA</h2>
          <p className="section-desc">
            Directing elite youth academies and staging Africa’s largest international youth football competitions.
          </p>
        </div>

        {/* Panoramic Stadium Photo - 100% Uncropped Original */}
        <div style={{ marginBottom: "36px" }}>
          <div
            className="img-frame-white"
            onClick={() =>
              onOpenImageModal({
                src: "/images/rcde-academy-squad.png",
                alt: "RCD Espanyol de Barcelona Academy South Africa squad and coaches",
                caption:
                  "King David Victory Park, Johannesburg — Full squad and technical staff of RCD Espanyol de Barcelona Academy South Africa.",
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
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
              padding: "0 4px",
            }}
          >
            <span style={{ fontSize: "0.82rem", color: "#475569" }}>
              <strong style={{ color: "#1E40AF" }}>Official RCDE Academy SA Assembly</strong> · King David Victory Park Stadium, Johannesburg.
            </span>
            <span style={{ fontSize: "0.8rem", color: "#1E40AF", fontWeight: 700 }}>
              🔍 Click to view full panoramic assembly
            </span>
          </div>
        </div>

        {/* 3 Clean Royal Blue & White Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="royal-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#1E40AF",
                      background: "#EFF6FF",
                      border: "1px solid #BFDBFE",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                    }}
                  >
                    {c.badge}
                  </span>
                  <Icon size={20} color="#1E40AF" />
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6, marginBottom: "16px" }}>
                  {c.desc}
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "12px",
                    borderTop: "1px solid #E2E8F0",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#1E40AF",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <MapPin size={14} color="#1E40AF" />
                  <span>{c.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
