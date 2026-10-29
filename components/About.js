"use client";

import { Shield, Globe, Award } from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Youth Football",
      icon: Shield,
      bullets: [
        "First official LaLiga Academy in South Africa",
        "CEO of IberCup SA (Africa's largest tournament)",
        "Over 10,000+ players trained in clinics",
      ],
    },
    {
      title: "Sports Diplomacy",
      icon: Globe,
      bullets: [
        "Presidential Workshop Group (eThekwini)",
        "Gauteng Envoy to Catalonia Minister of Sport",
        "Malaga & Durban joint Mayoral Accord",
      ],
    },
    {
      title: "Brand Leadership",
      icon: Award,
      bullets: [
        "Ster-Kinekor (PlayStation, Sony, Paramount)",
        "CEO of Think Advertising (8 Years)",
        "MBA Lecturer at Wits Business School",
      ],
    },
  ];

  return (
    <section id="about" className="section" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "28px" }}>
          <div className="eyebrow-royal">
            <span>Executive Pillars</span>
          </div>
          <h2 className="section-title">Sports Development, Diplomacy &amp; Brands</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="royal-card royal-card-highlight" style={{ padding: "22px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                  }}
                >
                  <Icon size={20} color="#1E40AF" />
                </div>

                <h3
                  className="font-heading"
                  style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1E293B", marginBottom: "12px" }}
                >
                  {item.title}
                </h3>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {item.bullets.map((b, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "0.85rem",
                        color: "#334155",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span style={{ color: "#1E40AF", fontWeight: 700 }}>•</span>
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
