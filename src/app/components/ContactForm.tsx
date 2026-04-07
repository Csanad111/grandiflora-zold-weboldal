import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { CheckCircle, Mail, Phone, Instagram } from "lucide-react";

const SERVICES = [
  "Kertépítés",
  "Kerttervezés",
  "Faápolás",
  "Öntözéstechnika",
  "Ágdarálás",
  "Kertfenntartás"
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service) 
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Contact form submitted:", { ...formData, selectedServices });
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", message: "" });
      setSelectedServices([]);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="pt-28 pb-20 sm:pt-36 sm:pb-32 px-4 sm:px-6 bg-[#0a1a0e] overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-4xl sm:text-5xl lg:text-6xl mb-6">
              Lépjen velünk<br />kapcsolatba
            </h2>
            <p className="text-[#DCF0DC]/70 text-lg mb-12 max-w-md">
              Kérdése van, vagy professzionális kertépítőt keres? Keressen minket bizalommal az alábbi elérhetőségeinken, akár azonnal!
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Telefon (Telefonszám)", value: "+36 30 123 4567", href: "tel:+36301234567" },
                { icon: Mail, label: "E-mail (Írjon nekünk)", value: "kertepites@grandiflorakert.hu", href: "mailto:kertepites@grandiflorakert.hu" },
                { icon: Instagram, label: "Instagram", value: "@grandiflora_kertepites", href: "https://instagram.com/grandiflora_kertepites" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === Instagram ? "_blank" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="flex items-center gap-5 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-[#DCF0DC]/10 flex items-center justify-center group-hover:bg-[#DCF0DC]/20 group-hover:scale-110 transition-all">
                    <item.icon className="text-[#DCF0DC]" size={26} />
                  </div>
                  <div>
                    <p className="text-[#DCF0DC]/50 text-xs sm:text-sm uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-[#DCF0DC] text-lg sm:text-xl font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LiquidGlassCard>
              <div className="relative p-8 sm:p-10 backdrop-blur-[40px] bg-[#1a3a23]/30 border border-[#DCF0DC]/10 rounded-[32px] shadow-2xl">
                <div className="mb-8">
                  <h3 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-2xl mb-2">Ajánlatkérés</h3>
                  <p className="text-[#DCF0DC]/60 text-sm">Töltse ki az űrlapot, és felvesszük Önnel a kapcsolatot!</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Service Selection */}
                  <div>
                    <p className="text-[#DCF0DC] font-medium mb-3 text-sm sm:text-base">Melyik szolgáltatásunk érdekli?</p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-all border ${
                            selectedServices.includes(service)
                              ? "bg-[#DCF0DC] text-[#132a18] border-[#DCF0DC]"
                              : "bg-white/5 text-[#DCF0DC]/70 border-[#DCF0DC]/10 hover:border-[#DCF0DC]/30"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-[#DCF0DC]/80 text-sm mb-1.5">Név</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[16px] bg-[#132a18]/50 border border-[#DCF0DC]/20 text-[#DCF0DC] placeholder-[#DCF0DC]/30 focus:outline-none focus:border-[#DCF0DC]/60 transition-colors text-sm"
                        placeholder="Kovács János"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-[#DCF0DC]/80 text-sm mb-1.5">Telefonszám</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-[16px] bg-[#132a18]/50 border border-[#DCF0DC]/20 text-[#DCF0DC] placeholder-[#DCF0DC]/30 focus:outline-none focus:border-[#DCF0DC]/60 transition-colors text-sm"
                        placeholder="+36 30 123 4567"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-[#DCF0DC]/80 text-sm mb-1.5">E-mail cím</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-[16px] bg-[#132a18]/50 border border-[#DCF0DC]/20 text-[#DCF0DC] placeholder-[#DCF0DC]/30 focus:outline-none focus:border-[#DCF0DC]/60 transition-colors text-sm"
                      placeholder="email@pelda.hu"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-[#DCF0DC]/80 text-sm mb-1.5">Üzenet, elképzelés</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-[16px] bg-[#132a18]/50 border border-[#DCF0DC]/20 text-[#DCF0DC] placeholder-[#DCF0DC]/30 focus:outline-none focus:border-[#DCF0DC]/60 transition-colors text-sm resize-none"
                      placeholder="Írja le röviden, miben segíthetünk..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#DCF0DC] hover:bg-white text-[#132a18] px-6 py-4 rounded-[20px] font-bold text-lg shadow-lg transition-all duration-300 mt-2"
                  >
                    Üzenet küldése
                  </motion.button>
                </form>
              </div>
            </LiquidGlassCard>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-[#132a18] border border-[#DCF0DC]/10 p-8 sm:p-12 rounded-[24px] shadow-2xl max-w-md text-center w-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#DCF0DC] to-transparent"></div>
              <CheckCircle size={64} className="text-[#DCF0DC] mx-auto mb-6" />
              <h3 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-2xl sm:text-3xl mb-3">
                Üzenet elküldve!
              </h3>
              <p className="text-[#DCF0DC]/80 text-base sm:text-lg mb-6">
                Köszönjük az érdeklődését, <strong>{formData.name}</strong>!
              </p>
              <p className="text-[#DCF0DC]/60 text-sm">
                Munkatársunk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségeken.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}