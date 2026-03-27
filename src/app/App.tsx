import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { AboutSection } from "./components/AboutSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      // Calculate position with offset for fixed header (approx 80px) + extra breathing room
      const headerOffset = 100;
      const elementPosition = formSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#132a18] text-[#DCF0DC]">
      <Header />
      <main>
        <HeroSection onCtaClick={scrollToForm} />
        <AboutSection />
        <ServicesGrid onServiceClick={scrollToForm} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}