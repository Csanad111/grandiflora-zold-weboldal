import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesGrid } from "./components/ServicesGrid";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-transparent via-white/60 to-white">
      <Header />
      <main>
        <HeroSection onCtaClick={scrollToForm} />
        <ServicesGrid onServiceClick={scrollToForm} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}