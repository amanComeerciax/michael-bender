"use client";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "CEO & Major Shareholder",
      company: "RCD Espanyol de Barcelona SA & RCDE Academy South Africa",
      period: "2020 – Present",
      location: "Johannesburg & Sandton",
      bullets: [
        "Founded the first official LaLiga club academy in South Africa at King David Victory Park.",
        "Over 10,000 players trained through clinics and camps.",
      ],
    },
    {
      role: "Chief Executive Officer",
      company: "IberCup South Africa",
      period: "2019 – Present",
      location: "Sandton, South Africa",
      bullets: [
        "Delivered the 2024 inaugural tournament: 220 teams, 9 international teams, 35,000+ attendees.",
        "Staged over 1,000 matches in 5 days.",
      ],
    },
    {
      role: "Diplomatic Envoy & Presidential Working Group Advisor",
      company: "South Africa Presidency & Generalitat de Catalunya",
      period: "2021 – Present",
      location: "South Africa & Spain",
      bullets: [
        "Appointed to the President of South Africa's workshop group for sports tourism in eThekwini.",
        "Envoy to the Minister of Sport in Catalonia; facilitating Malaga-Durban Mayoral agreement.",
      ],
    },
    {
      role: "Chief Executive Officer",
      company: "Think Advertising South Africa",
      period: "2011 – 2019 (8 Years)",
      location: "Sandton, South Africa",
      bullets: [
        "Led creative direction, brand development, and advertising operations for automotive & hospitality.",
      ],
    },
    {
      role: "Group Marketing Executive",
      company: "Ster-Kinekor Entertainment & Theatres",
      period: "Executive Tenure",
      location: "Johannesburg",
      bullets: [
        "Directed marketing for PlayStation, Sony Pictures, and Paramount/Universal portfolios.",
      ],
    },
    {
      role: "Executive Tournament Member & Keynote Speaker",
      company: "2010 FIFA World Cup & 2009 FIFA Confed Cup",
      period: "2009 – 2010",
      location: "South Africa",
      bullets: [
        "Appointed executive committee member and delivered keynote address at 2010 FIFA World Cup event.",
      ],
    },
  ];

  return (
    <section className="section section-azure">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <div className="eyebrow-royal">
            <span>Career Milestones</span>
          </div>
          <h2 className="section-title">Leadership Track Record</h2>
          <p className="section-desc">
            A continuous trajectory across sports governance, blue-chip entertainment, and youth infrastructure.
          </p>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="royal-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "20px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A" }}>{exp.role}</h3>
                  <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1E40AF" }}>{exp.company}</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#1E40AF",
                      background: "#EFF6FF",
                      padding: "4px 10px",
                      borderRadius: "9999px",
                      border: "1px solid #BFDBFE",
                    }}
                  >
                    {exp.period}
                  </span>
                  <span style={{ display: "block", fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul style={{ listStyle: "disc", paddingLeft: "20px", marginTop: "4px" }}>
                {exp.bullets.map((b, idx) => (
                  <li key={idx} style={{ fontSize: "0.86rem", color: "#475569", lineHeight: 1.5 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
