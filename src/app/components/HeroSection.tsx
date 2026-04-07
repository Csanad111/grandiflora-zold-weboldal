import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero_bg_flower.jpg";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Garden Design"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay on the left to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a0e]/95 via-[#0a1a0e]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 md:px-20 w-full pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start max-w-2xl"
        >
          {/* Tagline */}
          <div className="flex flex-col items-start space-y-4">
            <h1 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-left drop-shadow-xl tracking-tight">
              Egyedi kertek<br />szakértőktől
            </h1>
            
            {/* Elegant separator line */}
            <div className="w-16 h-[1px] bg-[#DCF0DC]/40 my-2" />
            
            <p className="font-['DM_Serif_Display'] text-[#DCF0DC]/90 text-xl sm:text-2xl md:text-3xl italic tracking-wide">
              tervezéstől gondozásig.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-white text-[#132a18] rounded-full font-bold text-lg sm:text-xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 mt-12"
          >
            <span className="relative z-10 flex items-center gap-3">
              Kérjen felmérést!
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 blur-md"></div>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-12 sm:left-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-[2px] h-20 bg-gradient-to-b from-[#DCF0DC]/70 to-transparent" />
      </motion.div>
    </section>
  );
}