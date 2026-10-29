"use client";

import Image from "next/image";
import { ArrowRight, MapPin, ShieldCheck, Trophy, Sparkles } from "lucide-react";

export default function Hero({ onOpenImageModal }) {
  return (
    <section className="section" style={{ paddingTop: "40px", paddingBottom: "50px" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {/* Left Text */}
          <div>
            <div className="eyebrow-royal">
              <MapPin size={12} />
              <span>Johannesburg, South Africa</span>
            </div>

            <h1
              className="font-heading"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "var(--color-royal-dark)",
                marginBottom: "12px",
              }}
            >
              Michael <span style={{ color: "var(--color-royal)" }}>Bender</span>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#1E293B",
                marginBottom: "8px",
              }}
            >
              CEO · RCD Espanyol de Barcelona Academy SA &amp; IberCup SA
            </p>

            <p
              style={{
                fontSize: "0.95rem",
                color: "#64748B",
                lineHeight: 1.5,
                marginBottom: "20px",
                maxWidth: "480px",
              }}
            >
              30+ years leading elite youth football infrastructure, international sports diplomacy, and corporate brand strategy.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <ShieldCheck size={13} />
                <span>LaLiga Academy CEO</span>
              </span>

              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Trophy size={13} />
                <span>IberCup Tournament CEO</span>
              </span>

              <span
                style={{
                  background: "#EFF6FF",
                  color: "#1E40AF",
                  border: "1px solid #BFDBFE",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Sparkles size={13} />
                <span>Bilateral Government Envoy</span>
              </span>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="#contact" className="btn btn-royal" style={{ padding: "10px 20px", minHeight: "40px" }}>
                <span>Get in Touch</span>
                <ArrowRight size={15} />
              </a>
              <a href="#football" className="btn btn-white-outline" style={{ padding: "10px 20px", minHeight: "40px" }}>
                <span>View Academy</span>
              </a>
            </div>
          </div>

          {/* Right Image - Original Uncropped */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              className="img-frame-white"
              style={{
                maxWidth: "420px",
                width: "100%",
                background: "#FFFFFF",
              }}
              onClick={() =>
                onOpenImageModal({
                  src: "/images/michael-bender-award.jpg",
                  alt: "Michael Bender honored at RCD Espanyol de Barcelona",
                  caption: "Barcelona, Spain · IX Annual RCDE Academies Meeting.",
                })
              }
              title="Click to view full image"
            >
              <Image
                src="/images/michael-bender-award.jpg"
                alt="Michael Bender at RCD Espanyol de Barcelona"
                width={800}
                height={800}
                priority
                className="img-original"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p style={{ fontSize: "0.75rem", color: "#64748B", marginTop: "8px", textAlign: "center" }}>
              Barcelona, Spain · IX RCDE Academies Convention
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
