"use client";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "CEO & Major Shareholder",
      company: "RCD Espanyol de Barcelona Academy SA",
      period: "2020 – Present",
      highlight: "First official LaLiga academy in South Africa (King David Victory Park).",
    },
    {
      role: "Chief Executive Officer",
      company: "IberCup South Africa",
      period: "2019 – Present",
      highlight: "Inaugural 2024 tournament: 220 teams, 1,000+ matches, 35,000+ attendees.",
    },
    {
      role: "Diplomatic Envoy & Advisor",
      company: "SA Presidency & Generalitat de Catalunya",
      period: "2021 – Present",
      highlight: "Bilateral sports accords between South Africa, Catalonia & Malaga.",
    },
    {
      role: "Chief Executive Officer",
      company: "Think Advertising South Africa",
      period: "2011 – 2019",
      highlight: "Full-service advertising agency leadership for automotive & luxury brands.",
    },
    {
      role: "Group Marketing Executive",
      company: "Ster-Kinekor Entertainment & Theatres",
      period: "Executive Tenure",
      highlight: "Directing PlayStation, Sony Pictures, and Paramount/Universal portfolios.",
    },
    {
      role: "Executive Member & Keynote Speaker",
      company: "2010 FIFA World Cup & 2009 Confed Cup",
      period: "2009 – 2010",
      highlight: "Keynote speaker and tournament executive committee member.",
    },
  ];

  return (
    <section className="section section-azure" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "24px", textAlign: "left" }}>
          <div className="eyebrow-royal">
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Leadership Track Record</h2>
        </div>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "16px 20px",
                boxShadow: "0 1px 3px rgba(30, 64, 175, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {exp.role}
                </h3>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#1E40AF",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    padding: "3px 10px",
                    borderRadius: "9999px",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {exp.period}
                </span>
              </div>

              <span
                style={{
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#1E40AF",
                  textAlign: "left",
                  display: "block",
                }}
              >
                {exp.company}
              </span>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#64748B",
                  margin: 0,
                  textAlign: "left",
                  lineHeight: 1.45,
                }}
              >
                {exp.highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
