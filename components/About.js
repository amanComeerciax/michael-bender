"use client";

import { Shield, Globe, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Youth Football Infrastructure",
      icon: Shield,
      desc: "Founded the first official LaLiga club academy in South Africa (RCD Espanyol de Barcelona Academy) at King David Victory Park. CEO of IberCup South Africa, staging Africa's largest international youth football tournament.",
      bullets: [
        "10,000+ players trained in LaLiga camps",
        "220 teams & 4,400+ players at IberCup SA",
        "5+ years direct partnership with Barcelona",
      ],
    },
    {
      title: "Government & Sports Diplomacy",
      icon: Globe,
      desc: "Appointed to the President of South Africa's workshop group to present a sports tourism blueprint for eThekwini. Envoy for the Gauteng Provincial Government to the Minister of Sport in the Generalitat de Catalunya.",
      bullets: [
        "Malaga & Durban joint Mayoral Accord",
        "Spanish Chamber of Commerce Member",
        "Special Olympics partner (China, HK, SA)",
      ],
    },
    {
      title: "Blue-Chip Advertising Heritage",
      icon: Award,
      desc: "Former Group Marketing Executive of Ster-Kinekor Entertainment (PlayStation, Sony Pictures, Universal/Paramount), New Business Director at DDB SA, and CEO of Think Advertising for 8 years.",
      bullets: [
        "Executive producer for TV & luxury brands",
        "MBA lecturer at Wits Business School",
        "Cannes Lions, MIPED & Monaco Sportel delegate",
      ],
    },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div style={{ marginBottom: "36px" }}>
          <div className="eyebrow-royal">
            <span>Executive Overview</span>
          </div>
          <h2 className="section-title">A career built on sports development, diplomacy, and brand leadership.</h2>
          <p className="section-desc">
            Michael Bender operates where international sports governance, youth empowerment, and high-impact commercial
            strategy meet.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="royal-card royal-card-highlight">
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <Icon size={22} color="#1E40AF" />
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1E293B", marginBottom: "8px" }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, marginBottom: "18px" }}>
                  {item.desc}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", marginTop: "auto" }}>
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "0.83rem",
                        color: "#0F172A",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: "#EFF6FF",
                          color: "#1E40AF",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.72rem",
                          fontWeight: "bold",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
