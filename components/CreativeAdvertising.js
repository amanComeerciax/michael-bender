"use client";

import Image from "next/image";

export default function CreativeAdvertising({ onOpenImageModal }) {
  const campaigns = [
    {
      id: "rockets-1",
      title: "Rockets: Food, Music & Lifestyle",
      client: "Bryanston & Parkhurst",
      src: "/images/campaign-rockets-1.png",
      desc: "Luxury dining & nightlife lifestyle campaign in Johannesburg.",
    },
    {
      id: "rockets-2",
      title: "Rockets: Mixology & Atmosphere",
      client: "Rockets Life",
      src: "/images/campaign-rockets-2.png",
      desc: "Experiential culinary and bar branding campaign.",
    },
    {
      id: "values",
      title: "Values: Precision & Trust",
      client: "Auto Care Diagnostics",
      src: "/images/campaign-values.png",
      desc: "Nationwide automotive diagnostic and quality parts campaign.",
    },
  ];

  return (
    <section id="creative" className="section section-azure">
      <div className="container">
        <div style={{ marginBottom: "32px" }}>
          <div className="eyebrow-royal">
            <span>Creative Heritage</span>
          </div>
          <h2 className="section-title">Brand Leadership &amp; Creative Direction</h2>
          <p className="section-desc">
            Former Group Marketing Executive at Ster-Kinekor (PlayStation, Sony Pictures, Universal/Paramount),
            New Business Director at DDB SA, and CEO of Think Advertising for 8 years.
          </p>
        </div>

        {/* 3 Executive Role Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div className="royal-card" style={{ padding: "20px 22px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Ster-Kinekor Entertainment
            </span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", margin: "6px 0" }}>
              Group Marketing Executive
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#475569" }}>
              Managed marketing &amp; distribution for PlayStation, Sony Pictures, and Paramount across Southern Africa.
            </p>
          </div>

          <div className="royal-card" style={{ padding: "20px 22px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Think Advertising SA
            </span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", margin: "6px 0" }}>
              Chief Executive Officer (8 Yrs)
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#475569" }}>
              Directed full-service agency strategy, automotive campaigns, and hospitality brand identity.
            </p>
          </div>

          <div className="royal-card" style={{ padding: "20px 22px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Academic Lecturer
            </span>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", margin: "6px 0" }}>
              Wits Business School (MBA)
            </h3>
            <p style={{ fontSize: "0.85rem", color: "#475569" }}>
              Lectured MBA Honours candidates, as well as students at Vega Advertising College and AFDA Film School.
            </p>
          </div>
        </div>

        {/* 3 Original Campaign Posters (Completely Uncropped) */}
        <div>
          <h3
            className="font-heading"
            style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0F172A", marginBottom: "16px" }}
          >
            Selected Campaign Artifacts
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {campaigns.map((c) => (
              <div
                key={c.id}
                className="royal-card"
                style={{
                  padding: "12px",
                  cursor: "pointer",
                }}
                onClick={() =>
                  onOpenImageModal({
                    src: c.src,
                    alt: c.title,
                    caption: `${c.title} — ${c.client}. Directed by Michael Bender.`,
                  })
                }
              >
                <div
                  className="img-frame-white"
                  style={{
                    background: "#FFFFFF",
                    marginBottom: "12px",
                    padding: "6px",
                  }}
                >
                  <Image
                    src={c.src}
                    alt={c.title}
                    width={800}
                    height={1000}
                    className="img-original"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "380px",
                    }}
                  />
                </div>
                <div style={{ padding: "0 6px 6px" }}>
                  <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#0F172A", marginBottom: "2px" }}>
                    {c.title}
                  </h4>
                  <p style={{ fontSize: "0.8rem", color: "#64748B" }}>{c.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
