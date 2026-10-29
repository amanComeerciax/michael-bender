"use client";

export default function ThoughtLeadership() {
  const principles = [
    {
      title: "Culture Before Results",
      text: "Success in the youth category is built on a strong cultural foundation rather than immediate wins. A relentless desire to improve and personal respect will always outlast weekend trophies.",
    },
    {
      title: "Structure Above All Else",
      text: "From the groundskeeper and transport driver to the academy director and board chairman, everyone must understand their role and work towards the same objective without personal agendas.",
    },
    {
      title: "Purpose Beyond the Pitch",
      text: "Youth development extends well beyond football. Sustainable organizations invest in community engagement, coach succession, and clear boundaries for parents.",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <div className="eyebrow-royal">
            <span>Leadership Philosophy</span>
          </div>
          <h2 className="section-title">Core Operating Principles</h2>
          <p className="section-desc">
            Guiding beliefs distilled from 30+ years in international football, corporate marketing, and youth academies.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {principles.map((p, i) => (
            <div key={i} className="royal-card" style={{ borderLeft: "4px solid #1E40AF" }}>
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.78rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                0{i + 1}
              </span>
              <h3
                className="font-heading"
                style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0F172A", margin: "6px 0 8px" }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.65 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
