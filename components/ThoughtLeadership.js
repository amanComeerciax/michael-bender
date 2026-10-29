"use client";

export default function ThoughtLeadership() {
  const principles = [
    {
      title: "Culture Before Results",
      text: "Character and long-term development outlast weekend trophies.",
    },
    {
      title: "Structure Above All Else",
      text: "Unified institutional alignment with zero room for internal politics.",
    },
    {
      title: "Purpose Beyond The Pitch",
      text: "Sport as a direct catalyst for youth dignity and social justice.",
    },
  ];

  return (
    <section className="section" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "24px" }}>
          <div className="eyebrow-royal">
            <span>Philosophy</span>
          </div>
          <h2 className="section-title">Core Operating Principles</h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {principles.map((p, i) => (
            <div key={i} className="royal-card" style={{ borderLeft: "4px solid #1E40AF", padding: "18px 20px" }}>
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                }}
              >
                0{i + 1}
              </span>
              <h3 className="font-heading" style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", margin: "4px 0" }}>
                {p.title}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.5 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
