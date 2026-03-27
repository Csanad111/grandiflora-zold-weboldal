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
    <div className="min-h-screen bg-[#132a18] text-[#eae5d9]">
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