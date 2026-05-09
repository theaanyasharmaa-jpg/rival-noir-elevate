import { createFileRoute } from "@tanstack/react-router";
import { NeonBackground } from "@/components/site/Background";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { Membership } from "@/components/site/Membership";
import { Trainers } from "@/components/site/Trainers";
import { Transformations } from "@/components/site/Transformations";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { AIChat } from "@/components/site/AIChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rival Fitness Studio — Premium Gym in Behala Chowrasta, Kolkata" },
      {
        name: "description",
        content:
          "Premium fitness training, CrossFit, strength conditioning & transformation coaching at Rival Fitness Studio, Behala Chowrasta, Kolkata. Open till 11 PM.",
      },
      { property: "og:title", content: "Rival Fitness Studio — Elite Gym in Kolkata" },
      { property: "og:description", content: "Transform your body. Unlock elite performance." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen grain">
      <NeonBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Membership />
        <Trainers />
        <Transformations />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
