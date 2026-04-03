import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// Use some generated and local images for the gallery
import galleryHero from "@/assets/gallery_hero_1775210443404.png";
import aboutImg from "@/assets/about_us.png";
import heroImg from "@/assets/hero_bg_flower.jpg";
import service1 from "@/assets/service_construction_1775210339594.png";
import service2 from "@/assets/service_design_1775210353483.png";
import service3 from "@/assets/service_maintenance_1775210426374.png";

const galleryImages = [
  galleryHero,
  service1,
  aboutImg,
  service2,
  heroImg,
  service3,
];

export function ReferenceGallery() {
  return (
    <section id="referencia" className="pt-28 pb-20 sm:pt-36 sm:pb-32 px-4 sm:px-6 bg-[#0a1a0e]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl lg:text-6xl mb-6">
            Referenciáink
          </h2>
          <p className="text-[#DCF0DC]/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Tekintse meg korábbi munkáinkat. A prémium minőség és a részletekre való maximális odafigyelés minden projektünk védjegye.
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
          <Masonry gutter="24px">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Referencia Kép ${i + 1}`}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        
        <div className="mt-16 text-center">
           <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#DCF0DC]/10 hover:bg-[#DCF0DC] text-[#DCF0DC] hover:text-[#132a18] px-8 py-4 rounded-[20px] font-['DM_Serif_Display'] text-lg shadow-lg border border-[#DCF0DC]/20 transition-all duration-300"
            >
              Kérjen ajánlatot saját kertjéhez
            </motion.button>
        </div>
      </div>
    </section>
  );
}
