"use client";

export default function StatsCounter() {
  const metrics = [
    { num: "30+", label: "Years in Football" },
    { num: "10,000+", label: "Clinic Players" },
    { num: "35,000+", label: "Tournament Attendees" },
    { num: "220", label: "Teams Hosted" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1E40AF 0%, #172554 100%)",
        color: "#FFFFFF",
        padding: "26px 0",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "20px",
            textAlign: "center",
          }}
        >
          {metrics.map((m, idx) => (
            <div key={idx}>
              <span
                className="font-heading"
                style={{
                  display: "block",
                  fontSize: "clamp(1.9rem, 3.2vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                }}
              >
                {m.num}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#BFDBFE",
                  marginTop: "4px",
                }}
              >
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
