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
        <div style={{ marginBottom: "24px" }}>
          <div className="eyebrow-royal">
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Leadership Track Record</h2>
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "10px" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="royal-card"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "8px",
                padding: "14px 20px",
              }}
            >
              <div>
                <h3 style={{ fontSize: "0.98rem", fontWeight: 700, color: "#0F172A" }}>{exp.role}</h3>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1E40AF" }}>{exp.company}</span>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginTop: "2px" }}>{exp.highlight}</p>
              </div>

              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#1E40AF",
                  background: "#EFF6FF",
                  padding: "3px 8px",
                  borderRadius: "9999px",
                  border: "1px solid #BFDBFE",
                  alignSelf: "flex-start",
                }}
              >
                {exp.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
