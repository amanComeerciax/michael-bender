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
    <section id="contact" className="section" style={{ padding: "50px 0" }}>
      <div className="container">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <div className="eyebrow-royal">
              <span>Contact</span>
            </div>
            <h2 className="section-title">Get In Touch</h2>
          </div>

          <div className="royal-card" style={{ padding: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                paddingBottom: "16px",
                marginBottom: "16px",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <div>
                <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0F172A", display: "block" }}>
                  Michael Bender
                </span>
                <span style={{ fontSize: "0.82rem", color: "#64748B" }}>Johannesburg &amp; Sandton, South Africa</span>
              </div>

              <a
                href="https://www.linkedin.com/in/michael-bender-43774625/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white-outline"
                style={{ fontSize: "0.82rem", minHeight: "36px", padding: "6px 14px" }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {sent ? (
              <div style={{ textAlign: "center", padding: "20px 10px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#EFF6FF",
                    color: "#1E40AF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                  }}
                >
                  <Check size={20} />
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0F172A", marginBottom: "4px" }}>
                  Message Sent
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748B", marginBottom: "12px" }}>
                  Thank you. Your message has been sent to Michael Bender&apos;s office.
                </p>
                <button
                  className="btn btn-white-outline"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  style={{ fontSize: "0.82rem", padding: "6px 12px" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        border: "1px solid #CBD5E1",
                        borderRadius: "8px",
                        fontSize: "0.88rem",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#334155", marginBottom: "4px" }}>
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly state your purpose..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      border: "1px solid #CBD5E1",
                      borderRadius: "8px",
                      fontSize: "0.88rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-royal" style={{ alignSelf: "flex-start", minHeight: "38px", padding: "8px 18px", fontSize: "0.85rem" }}>
                  <Send size={14} />
                  <span>Send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
