import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { AboutSection } from "./components/AboutSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

import { ReferenceGallery } from "./components/ReferenceGallery";

export default function App() {
  return (
    <div className="min-h-screen bg-[#132a18] text-[#DCF0DC]">
      <Header />
      <main>
        <HeroSection onCtaClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} />
        <AboutSection />
        <ReferenceGallery />
        <ServicesGrid onServiceClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}