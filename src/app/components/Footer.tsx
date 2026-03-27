import { Instagram, Mail, Phone } from "lucide-react";
import logoIcon from "@/assets/logo_new.png";

export function Footer() {
  return (
    <footer className="bg-[#061108] text-[#DCF0DC] py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoIcon} 
                alt="Grandiflora Logo" 
                className="w-24 h-24 sm:w-36 sm:h-36 object-contain brightness-0 invert opacity-90"
              />
              <h3 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-2xl sm:text-3xl">
                GRANDIFLORA
              </h3>
            </div>
            <p className="text-[#DCF0DC]/80 leading-relaxed mb-4 text-sm sm:text-base">
              Professzionális kertészeti szolgáltatások több mint 10 éves tapasztalattal.
            </p>
            <p className="text-[#DCF0DC]/60 text-sm">
              🇬🇧 C1 English Fluency Available
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['DM_Serif_Display'] text-lg sm:text-xl mb-4">
              Kapcsolat
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:kertepites@grandiflorakert.hu"
                className="flex items-center gap-3 text-[#DCF0DC]/80 hover:text-[#DCF0DC] transition-colors text-sm sm:text-base"
              >
                <Mail size={20} />
                <span className="break-all">kertepites@grandiflorakert.hu</span>
              </a>
              <a
                href="tel:+36301234567"
                className="flex items-center gap-3 text-[#DCF0DC]/80 hover:text-[#DCF0DC] transition-colors text-sm sm:text-base"
              >
                <Phone size={20} />
                <span>+36 30 123 4567</span>
              </a>
              <a
                href="https://instagram.com/grandiflora_kertepites"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#DCF0DC]/80 hover:text-[#DCF0DC] transition-colors text-sm sm:text-base"
              >
                <Instagram size={20} />
                <span>@grandiflora_kertepites</span>
              </a>
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h4 className="font-['DM_Serif_Display'] text-lg sm:text-xl mb-4">
              Szolgáltatások
            </h4>
            <ul className="space-y-2 text-[#DCF0DC]/80 text-sm sm:text-base">
              <li>Kertépítés</li>
              <li>Kerttervezés</li>
              <li>Faápolás</li>
              <li>Öntözéstechnika</li>
              <li>Ágdarálás</li>
              <li>Kertfenntartás</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 text-center text-[#DCF0DC]/60 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Grandiflora. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}