import { Instagram, Mail } from "lucide-react";
import logoIcon from "figma:asset/059c293333deaf670cb9e3e54dcb31770524a2e7.png";
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
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-2xl sm:text-3xl tracking-wide">
            GRANDIFLORA
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["SZOLGÁLTATÁSOK", "REFERENCIA", "KAPCSOLAT"].map((item) => (
            <a
              key={item}
              href={`#${item === "SZOLGÁLTATÁSOK" ? "services" : item === "KAPCSOLAT" ? "contact-form" : "services"}`}
              className="text-[#DCF0DC]/80 hover:text-[#DCF0DC] text-sm font-medium tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Icons & Mobile Menu */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4 sm:gap-6">
            <a
              href="https://instagram.com/grandiflora_kertepites"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DCF0DC] hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="mailto:kertepites@grandiflorakert.hu"
              className="text-[#DCF0DC] hover:text-white transition-colors hover:scale-110 duration-200"
              aria-label="Email"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>

          {/* Mobile Hamburger Menu (2-line) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col gap-1.5 p-2 focus:outline-none group">
                <motion.span 
                  className="w-8 h-[2px] bg-[#DCF0DC] rounded-full"
                  whileHover={{ width: "32px" }}
                />
                <motion.span 
                  className="w-5 h-[2px] bg-[#DCF0DC] rounded-full self-end group-hover:w-8 transition-all duration-300"
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
                   <a href="#" className="text-[#DCF0DC]/60 hover:text-[#DCF0DC] transition-colors">
                     <Instagram size={24} />
                   </a>
                   <a href="#" className="text-[#DCF0DC]/60 hover:text-[#DCF0DC] transition-colors">
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