"use client";
import { HeroSection } from "@/components/landing/Hero";
// import { FAQSection } from "./Faq";
// import { CtaSection } from "./Cta";
// import { Footer } from "./Footer";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-background text-foreground relative pt-5"
    >
      <HeroSection />
      {/* <FAQSection />
      <CtaSection />
      <Footer /> */}
    </div>
  );
}
