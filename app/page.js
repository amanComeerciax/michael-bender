"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import About from "@/components/About";
import SportsPillars from "@/components/SportsPillars";
import GovernmentDiplomacy from "@/components/GovernmentDiplomacy";
import CreativeAdvertising from "@/components/CreativeAdvertising";
import ThoughtLeadership from "@/components/ThoughtLeadership";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  const [modalData, setModalData] = useState(null);

  const handleOpenImageModal = (data) => {
    setModalData(data);
  };

  const handleCloseImageModal = () => {
    setModalData(null);
  };

  return (
    <main>
      <Navbar />
      <Hero onOpenImageModal={handleOpenImageModal} />
      <StatsCounter />
      <About />
      <SportsPillars onOpenImageModal={handleOpenImageModal} />
      <GovernmentDiplomacy />
      <CreativeAdvertising onOpenImageModal={handleOpenImageModal} />
      <ThoughtLeadership />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
      <ImageModal modalData={modalData} onClose={handleCloseImageModal} />
    </main>
  );
}
