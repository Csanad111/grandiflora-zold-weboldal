import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { hu } from "date-fns/locale";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Clock, Calendar as CalendarIcon, X } from "lucide-react";

// Standard react-day-picker styles are often needed, but we'll use custom Tailwind classes
// to match the premium theme perfectly.

interface BookingCalendarProps {
  onClose: () => void;
  onConfirm: (date: Date) => void;
}

export function BookingCalendar({ onClose, onConfirm }: BookingCalendarProps) {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  const [status, setStatus] = useState<"idle" | "pending" | "accepted">("idle");

  const handleBooking = () => {
    if (!selected) return;
    setStatus("pending");
    
    // Simulate company approval after 3 seconds
    setTimeout(() => {
      setStatus("accepted");
    }, 3000);
  };

  const handleFinalize = () => {
    if (selected) onConfirm(selected);
    onClose();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-[#1a3a23]/40 p-4 sm:p-6 rounded-[24px] border border-[#DCF0DC]/10 backdrop-blur-xl">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={setSelected}
          locale={hu}
          disabled={{ before: new Date() }}
          styles={{
            caption: { color: "#DCF0DC", fontFamily: "DM Serif Display" },
            head_cell: { color: "#DCF0DC", opacity: 0.5 },
            cell: { color: "#DCF0DC" },
            day: { borderRadius: "12px", transition: "all 0.3s" },
          }}
          className="mx-auto"
          modifiersClassNames={{
            selected: "bg-[#DCF0DC] !text-[#132a18] font-bold shadow-lg",
            today: "text-[#DCF0DC] underline underline-offset-4 decoration-[#DCF0DC]/40"
          }}
        />

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-[#DCF0DC]/80 text-sm sm:text-base bg-[#132a18]/40 p-4 rounded-[16px]">
            <CalendarIcon size={20} className="text-[#DCF0DC]" />
            <span>Kiválasztott nap: <strong>{selected ? format(selected, "yyyy. MMMM d.", { locale: hu }) : "Válassz dátumot"}</strong></span>
          </div>

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.button
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={handleBooking}
                disabled={!selected}
                className="w-full bg-[#DCF0DC] hover:bg-white text-[#132a18] py-4 rounded-[16px] font-['DM_Serif_Display'] text-lg transition-all shadow-xl disabled:opacity-50"
              >
                Időpont véglegesítése
              </motion.button>
            )}

            {status === "pending" && (
              <motion.div
                key="pending"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full bg-amber-500/20 border border-amber-500/40 text-amber-200 py-4 rounded-[16px] flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2 font-['DM_Serif_Display']">
                  <Clock className="animate-spin-slow" size={20} />
                  Várakozás jóváhagyásra...
                </div>
                <p className="text-xs opacity-70 italic text-center px-4">
                  (Demó: 3 másodperc múlva automatikusan elfogadják)
                </p>
              </motion.div>
            )}

            {status === "accepted" && (
              <motion.div
                key="accepted"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="w-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 py-4 rounded-[16px] flex items-center justify-center gap-3 font-['DM_Serif_Display']">
                  <CheckCircle size={24} />
                  Időpont Elfogadva!
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-[#DCF0DC]/10 p-5 rounded-[20px] border border-[#DCF0DC]/20"
                >
                  <p className="text-[#DCF0DC] text-sm italic leading-relaxed text-center">
                    "Köszönjük a megkeresést! Kollégánk rögzítette az időpontot, és a megadott napon érkezik a helyszínre. Hamarosan egyeztetünk a részletekről."
                  </p>
                </motion.div>

                <button
                  onClick={handleFinalize}
                  className="w-full bg-[#DCF0DC] text-[#132a18] py-3 rounded-[12px] font-bold text-sm tracking-widest uppercase"
                >
                  Bezárás
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
