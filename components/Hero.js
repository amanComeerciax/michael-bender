"use client";

import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function Hero({ onOpenImageModal }) {
  return (
    <section className="section" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {/* Left Column */}
          <div>
            <div className="eyebrow-royal">
              <MapPin size={13} />
              <span>Johannesburg, South Africa</span>
            </div>

            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "var(--color-royal-dark)",
                marginBottom: "18px",
              }}
            >
              Building world-class pathways in <span style={{ color: "var(--color-royal)" }}>youth football</span> &amp; sports diplomacy.
            </h1>

            <p
              style={{
                fontSize: "1.08rem",
                color: "#334155",
                lineHeight: 1.65,
                marginBottom: "24px",
                maxWidth: "540px",
              }}
            >
              Chief Executive Officer of <strong>RCD Espanyol de Barcelona Academy South Africa</strong> and{" "}
              <strong>IberCup SA</strong>. Over 30 years bridging elite youth development with international sports governance
              and corporate marketing leadership.
            </p>

            {/* Badges in Royal Blue & White */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "30px" }}>
              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <ShieldCheck size={14} color="#1E40AF" />
                <span>RCD Espanyol de Barcelona SA</span>
              </span>

              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Trophy size={14} color="#1E40AF" />
                <span>IberCup International SA</span>
              </span>

              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  padding: "6px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={14} color="#1E40AF" />
                <span>SA &amp; Spain Diplomatic Envoy</span>
              </span>
            </div>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a href="#contact" className="btn btn-royal">
                <span>Start a Dialogue</span>
                <ArrowRight size={16} />
              </a>
              <a href="#football" className="btn btn-white-outline">
                <span>Explore Academy &amp; Tournaments</span>
              </a>
            </div>
          </div>

          {/* Right Column: Original Uncropped Barcelona Award Image */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              className="img-frame-white"
              style={{
                maxWidth: "480px",
                width: "100%",
                background: "#FFFFFF",
              }}
              onClick={() =>
                onOpenImageModal({
                  src: "/images/michael-bender-award.jpg",
                  alt: "Michael Bender honored at RCD Espanyol de Barcelona",
                  caption:
                    "Barcelona, Spain — Michael Bender recognized at the IX Annual RCDE Academies Meeting alongside club directors.",
                })
              }
              title="Click to view full image in high resolution"
            >
              <Image
                src="/images/michael-bender-award.jpg"
                alt="Michael Bender at RCD Espanyol de Barcelona"
                width={800}
                height={800}
                priority
                className="img-original"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#64748B",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              <strong style={{ color: "#1E40AF" }}>Barcelona, Spain</strong> · Honored at the IX RCDE Academies Convention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
