"use client";

export default function StatsCounter() {
  const metrics = [
    { num: "30+", label: "Years in Football", detail: "FIFA 2010 WC, France 98, IberCup" },
    { num: "10,000+", label: "LaLiga Clinic Players", detail: "Trained across nationwide programs" },
    { num: "35,000+", label: "IberCup Attendees", detail: "Spectators at inaugural SA edition" },
    { num: "220", label: "Teams Hosted", detail: "9 international squads, 1,000+ matches" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1E40AF 0%, #172554 100%)",
        color: "#FFFFFF",
        padding: "36px 0",
        borderTop: "1px solid #1E3A8A",
        borderBottom: "1px solid #1E3A8A",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "24px",
          }}
        >
          {metrics.map((m, idx) => (
            <div key={idx} style={{ padding: "0 8px" }}>
              <span
                className="font-heading"
                style={{
                  display: "block",
                  fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {m.num}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#93C5FD",
                  marginTop: "4px",
                }}
              >
                {m.label}
              </span>
              <span style={{ display: "block", fontSize: "0.8rem", color: "#DBEAFE", marginTop: "2px" }}>
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
