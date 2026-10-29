"use client";

import { Landmark, Compass, Building2 } from "lucide-react";

export default function GovernmentDiplomacy() {
  const roles = [
    {
      title: "Presidential Workshop",
      detail: "Formulating national football and sports tourism framework for eThekwini (Durban).",
      tag: "SA Presidency",
      icon: Landmark,
    },
    {
      title: "Catalonia Bilateral Envoy",
      detail: "Appointed by Gauteng MEC to meet Minister of Sport in Generalitat de Catalunya.",
      tag: "Spain & SA",
      icon: Compass,
    },
    {
      title: "Malaga & Durban Accord",
      detail: "Negotiating joint Mayoral agreement for youth football and cultural exchange.",
      tag: "Mayoral Accord",
      icon: Building2,
    },
  ];

  return (
    <section id="diplomacy" className="section" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "24px" }}>
          <div className="eyebrow-royal">
            <span>Diplomacy</span>
          </div>
          <h2 className="section-title">Government Envoyship &amp; Accords</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {roles.map((r, i) => (
            <div key={i} className="royal-card" style={{ padding: "20px" }}>
              <span
                style={{
                  display: "inline-block",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#1E40AF",
                  background: "#EFF6FF",
                  border: "1px solid #BFDBFE",
                  padding: "3px 8px",
                  borderRadius: "9999px",
                  marginBottom: "10px",
                  alignSelf: "flex-start",
                }}
              >
                {r.tag}
              </span>

              <h3 className="font-heading" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                {r.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5 }}>{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
