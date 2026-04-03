import { motion } from "motion/react";

import { 
  Hammer, 
  PenTool, 
  TreeDeciduous, 
  Droplets, 
  Recycle, 
  Sprout 
} from "lucide-react";

import imgConstruction from "@/assets/projects/p3_1.jpg";
import imgDesign from "@/assets/service_design_1775210353483.png";
import imgTreecare from "@/assets/service_treecare_1775210367470.png";
import imgIrrigation from "@/assets/projects/p2_1.jpg";
import imgWoodchip from "@/assets/projects/p1_1.jpg";
import imgMaintenance from "@/assets/service_maintenance_1775210426374.png";

const services = [
  {
    icon: Hammer,
    title: "Kertépítés",
    description: "Komplex kertépítési munkák a tervezéstől a megvalósításig. Terasszal, járdával és díszkertekkel.",
    image: imgConstruction
  },
  {
    icon: PenTool,
    title: "Kerttervezés",
    description: "Egyedi kerttervek készítése modern 3D vizualizációval és szakmai tanácsadással.",
    image: imgDesign
  },
  {
    icon: TreeDeciduous,
    title: "Faápolás",
    description: "Szakszerű faápolás, metszés és fakivágás minden fafajta esetében biztonsággal.",
    image: imgTreecare
  },
  {
    icon: Droplets,
    title: "Öntözéstechnika",
    description: "Modern automata öntözőrendszerek tervezése és telepítése energiatakarékosan.",
    image: imgIrrigation
  },
  {
    icon: Recycle,
    title: "Ágdarálás",
    description: "Professzionális ágdarálási szolgáltatás környezetbarát komposztálással.",
    image: imgWoodchip
  },
  {
    icon: Sprout,
    title: "Kertfenntartás",
    description: "Rendszeres kertgondozás és -karbantartás egész évben testre szabott ütemezéssel.",
    image: imgMaintenance
  }
];

interface ServicesGridProps {
  onServiceClick: () => void;
}

export function ServicesGrid({ onServiceClick }: ServicesGridProps) {
  return (
    <section id="services" className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 bg-[#132a18]">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl mb-4">
            Szolgáltatásaink
          </h2>
          <p className="text-[#DCF0DC]/80 text-base sm:text-lg px-4">
            Komplex kertészeti szolgáltatások szakértő csapattal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full">
                <div className="relative h-full p-6 sm:p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[24px] shadow-lg hover:shadow-2xl hover:border-[#DCF0DC]/30 transition-all duration-300 group cursor-pointer overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 hidden-on-hover">
                    <div className="mb-4 inline-flex p-3 sm:p-4 bg-[#DCF0DC]/10 rounded-full">
                      <service.icon size={28} className="text-[#DCF0DC] sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-xl sm:text-2xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#DCF0DC]/80 text-sm sm:text-base mb-6 leading-relaxed min-h-[4.5rem]">
                      {service.description}
                    </p>
                    <button
                      onClick={onServiceClick}
                      className="bg-[#DCF0DC]/10 hover:bg-[#DCF0DC] hover:text-[#132a18] text-[#DCF0DC] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[20px] text-sm sm:text-base font-medium transition-all duration-300 inline-flex items-center gap-2"
                    >
                      Érdekel
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}