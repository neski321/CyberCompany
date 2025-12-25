import { useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhatWeDo } from "@/components/WhatWeDo";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [location] = useLocation();

  useEffect(() => {
    // Handle hash navigation on page load and route changes
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <Hero />
      <Services />
      <WhatWeDo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
