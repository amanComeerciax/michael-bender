"use client";

import { Landmark, Compass, Building2, Scale } from "lucide-react";

export default function GovernmentDiplomacy() {
  const roles = [
    {
      title: "Presidential Strategy Workshop",
      detail: "Appointed to the President of South Africa’s working group to present a sustainable sports tourism and football development plan for eThekwini (Durban).",
      tag: "Presidency of South Africa",
      icon: Landmark,
    },
    {
      title: "Catalonia Bilateral Envoy",
      detail: "Appointed by Gauteng Provincial Government MEC as envoy to the Minister of Sport in the Generalitat de Catalunya Government for bilateral opportunities.",
      tag: "Spain & South Africa",
      icon: Compass,
    },
    {
      title: "Malaga & Durban Mayoral Accord",
      detail: "Leading negotiations between the City of Malaga (Spain) and Durban (South Africa) for a joint Mayoral agreement spanning sport, trade, and youth exchange.",
      tag: "Municipal Accord",
      icon: Building2,
    },
  ];

  return (
    <section id="diplomacy" className="section">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <div className="eyebrow-royal">
            <span>Diplomatic Envoyship</span>
          </div>
          <h2 className="section-title">Government Advisory &amp; International Relations</h2>
          <p className="section-desc">
            Bridging provincial leadership, foreign ministries, and international sports federations to build lasting
            institutional partnerships.
          </p>
        </div>

        {/* 3 Responsive Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "32px",
          }}
        >
          {roles.map((r, i) => {
            const Icon = r.icon;
            return (
              <div key={i} className="royal-card">
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#1E40AF",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    marginBottom: "14px",
                    alignSelf: "flex-start",
                  }}
                >
                  {r.tag}
                </span>

                <h3
                  className="font-heading"
                  style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0F172A", marginBottom: "8px" }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.6 }}>{r.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Grassroots Accountability Callout */}
        <div
          style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)",
            border: "1.5px solid #BFDBFE",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            boxShadow: "var(--shadow-subtle)",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              background: "#1E40AF",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Scale size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#1E40AF", marginBottom: "4px" }}>
              Advocacy for Grassroots Accountability
            </h4>
            <p style={{ fontSize: "0.88rem", color: "#334155", lineHeight: 1.6, margin: 0 }}>
              &quot;Mass participation sports cannot suffer while unverified millions are spent on temporary spectacles.
              Real national impact happens when funding reaches community coaches, verified structures, and grassroots
              facilities.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
