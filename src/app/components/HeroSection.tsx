import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
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
          <h1 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] text-left drop-shadow-lg">
            Egyedi kertek szakértőktől –<br /> tervezéstől gondozásig.
          </h1>
        </motion.div>

        <motion.button
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-[#DCF0DC] hover:bg-white text-[#132a18] px-8 sm:px-12 py-4 sm:py-5 rounded-[20px] font-['DM_Serif_Display'] text-lg sm:text-xl shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
        >
          Kérjen ingyenes felmérést!
          <ArrowDown size={24} className="animate-bounce" />
        </motion.button>
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