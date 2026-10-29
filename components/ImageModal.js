"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ImageModal({ modalData, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!modalData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close image modal">
          <X size={18} />
        </button>

        <Image
          src={modalData.src}
          alt={modalData.alt || "Portfolio image"}
          width={1600}
          height={1200}
          className="modal-img-tag"
          priority
        />

        {modalData.caption && (
          <p
            style={{
              marginTop: "12px",
              fontSize: "0.85rem",
              color: "#E2E8F0",
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            {modalData.caption}
          </p>
        )}
      </div>
    </div>
  );
}
