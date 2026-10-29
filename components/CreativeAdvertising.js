"use client";

import Image from "next/image";

export default function CreativeAdvertising({ onOpenImageModal }) {
  const campaigns = [
    {
      id: "rockets-1",
      title: "Rockets Lifestyle",
      client: "Bryanston & Parkhurst",
      src: "/images/campaign-rockets-1.png",
    },
    {
      id: "rockets-2",
      title: "Rockets Experience",
      client: "Food, Music & Mixology",
      src: "/images/campaign-rockets-2.png",
    },
    {
      id: "values",
      title: "Values Campaign",
      client: "Auto Care Diagnostics",
      src: "/images/campaign-values.png",
    },
  ];

  return (
    <section id="creative" className="section section-azure" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ marginBottom: "24px" }}>
          <div className="eyebrow-royal">
            <span>Creative Portfolios</span>
          </div>
          <h2 className="section-title">Brand &amp; Campaign Direction</h2>
        </div>

        {/* 3 Short Role Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <div className="royal-card" style={{ padding: "14px 18px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Ster-Kinekor Entertainment
            </span>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0F172A", marginTop: "2px" }}>
              PlayStation, Sony Pictures &amp; Paramount
            </p>
          </div>

          <div className="royal-card" style={{ padding: "14px 18px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Think Advertising SA
            </span>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0F172A", marginTop: "2px" }}>
              CEO (8 Years) · Creative &amp; Media Agency
            </p>
          </div>

          <div className="royal-card" style={{ padding: "14px 18px" }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#1E40AF", textTransform: "uppercase" }}>
              Academic Lecturer
            </span>
            <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#0F172A", marginTop: "2px" }}>
              Wits Business School (MBA), Vega &amp; AFDA
            </p>
          </div>
        </div>

        {/* 3 Posters (Uncropped) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {campaigns.map((c) => (
            <div
              key={c.id}
              className="royal-card"
              style={{ padding: "10px", cursor: "pointer" }}
              onClick={() =>
                onOpenImageModal({
                  src: c.src,
                  alt: c.title,
                  caption: `${c.title} — ${c.client}. Directed by Michael Bender.`,
                })
              }
            >
              <div className="img-frame-white" style={{ background: "#FFFFFF", marginBottom: "8px", padding: "4px" }}>
                <Image
                  src={c.src}
                  alt={c.title}
                  width={800}
                  height={1000}
                  className="img-original"
                  style={{ width: "100%", height: "auto", maxHeight: "360px" }}
                />
              </div>
              <div style={{ padding: "0 4px 4px" }}>
                <h4 style={{ fontSize: "0.92rem", fontWeight: 700, color: "#0F172A" }}>{c.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "#64748B" }}>{c.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
