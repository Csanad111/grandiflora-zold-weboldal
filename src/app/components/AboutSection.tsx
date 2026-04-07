import { motion } from "motion/react";
import aboutImg from "@/assets/about_us.png";

export function AboutSection() {
  return (
    <section id="about" className="pt-28 pb-20 sm:pt-36 sm:pb-32 px-4 sm:px-6 bg-[#1a3020] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl lg:text-6xl mb-8">
              Friss tudás,<br />Modern szemlélet
            </h2>
            <div className="space-y-6 text-[#DCF0DC]/80 text-lg leading-relaxed">
              <p>
                A Grandiflorát két lelkes, frissen végzett mesterdiplomás szakember – egy kertépítő mérnök és egy növényorvos – alapította. Célunk, hogy a legújabb szakmai tudást és modern megoldásokat vigyük bele minden ránk bízott kertbe.
              </p>
              <p>
                Bár fiatal csapat vagyunk, a korábbi sikeres projektjeink is bizonyítják: a mérnöki precizitás, az egyetemi szintű szaktudás és a növények iránti elhivatottság garancia a tartós, prémium minőségre a tervezéstől a teljes kivitelezésig.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-['DM_Serif_Display'] text-[#DCF0DC] mb-1">MSc</h4>
                  <p className="text-sm uppercase tracking-widest text-[#DCF0DC]/50 mt-1">Kertépítő Mérnök</p>
                </div>
                <div>
                  <h4 className="text-3xl font-['DM_Serif_Display'] text-[#DCF0DC] mb-1">MSc</h4>
                  <p className="text-sm uppercase tracking-widest text-[#DCF0DC]/50 mt-1">Növényorvos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src={aboutImg}
                alt="Grandiflora Garden Design"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#DCF0DC]/10 backdrop-blur-3xl rounded-full -z-10 animate-pulse" />
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#DCF0DC]/5 backdrop-blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
