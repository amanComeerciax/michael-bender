"use client";

import { useState } from "react";
import { ArrowUpRight, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div className="eyebrow-royal">
              <span>Get In Touch</span>
            </div>
            <h2 className="section-title">Direct Inquiries &amp; Consultations</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Reach out regarding RCD Espanyol Academy programs, IberCup team delegations, or government sports tourism advisory.
            </p>
          </div>

          <div className="royal-card" style={{ padding: "32px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
                paddingBottom: "20px",
                marginBottom: "20px",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <div>
                <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", display: "block" }}>
                  Michael Bender
                </span>
                <span style={{ fontSize: "0.85rem", color: "#64748B" }}>Johannesburg &amp; Sandton, South Africa</span>
              </div>

              <a
                href="https://www.linkedin.com/in/michael-bender-43774625/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white-outline"
                style={{ fontSize: "0.85rem", minHeight: "40px" }}
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {sent ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#EFF6FF",
                    color: "#1E40AF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                  }}
                >
                  <Check size={24} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: "6px" }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748B", marginBottom: "16px" }}>
                  Thank you. Your inquiry has been directed to Michael Bender&apos;s executive office.
                </p>
                <button
                  className="btn btn-white-outline"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@organization.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "10px 14px",
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly state your purpose or proposal..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      border: "1px solid #CBD5E1",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-royal" style={{ alignSelf: "flex-start" }}>
                  <Send size={15} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
