import { Instagram, Mail } from "lucide-react";
import logoIcon from "@/assets/logo_new.png";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "./ui/sheet";
import { motion } from "motion/react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#132a18]/90 shadow-lg border-b border-white/10">
      <div className="w-full px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={logoIcon} 
            alt="Grandiflora Logo" 
            className="w-20 h-20 sm:w-28 sm:h-28 object-contain brightness-0 invert opacity-90"
          />
          <h1 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-2xl sm:text-3xl tracking-wide">
            GRANDIFLORA
          </h1>
        </div>

        {/* Action Area (Hamburger only) */}
        <div className="flex items-center gap-4">
          {/* Mobile/Desktop Hamburger Menu (2-line, equal width) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col gap-2 p-2 focus:outline-none group">
                <motion.span 
                  className="w-8 h-[2px] bg-[#DCF0DC] rounded-full"
                />
                <motion.span 
                  className="w-8 h-[2px] bg-[#DCF0DC] rounded-full"
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#132a18] border-l border-white/10 p-0 w-full sm:max-w-sm">
              <SheetHeader className="p-8 border-b border-white/5">
                <SheetTitle className="text-[#DCF0DC] font-['DM_Serif_Display'] text-2xl tracking-widest">
                  GRANDIFLORA
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-8 gap-6">
                {["SZOLGÁLTATÁSOK", "REFERENCIA", "KAPCSOLAT"].map((item) => (
                  <SheetClose asChild key={item}>
                    <a
                      href={`#${item === "SZOLGÁLTATÁSOK" ? "services" : item === "KAPCSOLAT" ? "contact-form" : "services"}`}
                      className="text-[#DCF0DC]/70 hover:text-[#DCF0DC] text-2xl font-['DM_Serif_Display'] tracking-widest transition-all hover:pl-2"
                    >
                      {item}
                    </a>
                  </SheetClose>
                ))}
                
                <div className="mt-12 pt-8 border-t border-white/5 flex gap-6">
                   <a 
                     href="https://instagram.com/grandiflora_kertepites" 
                     target="_blank" 
                     className="text-[#DCF0DC]/60 hover:text-[#DCF0DC] transition-colors"
                   >
                     <Instagram size={24} />
                   </a>
                   <a 
                     href="mailto:kertepites@grandiflorakert.hu" 
                     className="text-[#DCF0DC]/60 hover:text-[#DCF0DC] transition-colors"
                   >
                     <Mail size={24} />
                   </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}