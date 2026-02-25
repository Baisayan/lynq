"use client";
import HeroSection from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <FAQSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
