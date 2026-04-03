import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { projects, Project } from "../../data/projects";

export function ReferenceGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

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
            Esettanulmányok & Referenciák
          </h2>
          <p className="text-[#DCF0DC]/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Tekintse meg korábbi munkáinkat. Gyakorlati megoldások, előtte-utána képek és részletes beszámolók, amelyekből kiderül, hogyan dolgozunk.
          </p>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 3 }}>
          <Masonry gutter="24px">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl group cursor-pointer relative bg-[#132a18] shadow-lg border border-white/5"
                onClick={() => openProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-[#DCF0DC]/80 text-sm font-medium tracking-wider mb-2 block">
                        {project.date}
                      </span>
                      <h3 className="text-[#DCF0DC] text-2xl font-['DM_Serif_Display'] leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
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

      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 ${isFullscreen ? 'bg-black' : 'bg-black/90 backdrop-blur-md'}`}
            onClick={() => !isFullscreen && setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`${
                isFullscreen 
                  ? 'w-full h-full flex items-center justify-center' 
                  : 'w-full max-w-6xl max-h-[90vh] bg-[#132a18] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10'
              }`}
            >
              {/* Close Button */}
              <button 
                onClick={() => isFullscreen ? setIsFullscreen(false) : setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[60] bg-black/50 hover:bg-[#DCF0DC] p-3 rounded-full text-white hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image Column */}
              <div className={`${isFullscreen ? 'w-full h-full relative' : 'w-full lg:w-[60%] relative bg-black flex flex-col'}`}>
                {/* Main Carousel Image */}
                <div className="relative flex-1 group flex items-center justify-center min-h-[40vh] lg:min-h-0">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Kép ${currentImageIndex + 1}`}
                      className={`object-contain ${isFullscreen ? 'w-full h-full max-h-screen' : 'w-full h-full max-h-[60vh] lg:max-h-full'}`}
                    />
                  </AnimatePresence>

                  {/* Controls */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#DCF0DC] text-white hover:text-black rounded-full backdrop-blur-sm transition-all shadow-xl opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-[#DCF0DC] text-white hover:text-black rounded-full backdrop-blur-sm transition-all shadow-xl opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                  
                  {/* Fullscreen Toggle */}
                  <button 
                        onClick={(e) => { e.stopPropagation(); setIsFullscreen(!isFullscreen); }}
                        className="absolute bottom-4 right-4 p-3 bg-black/50 hover:bg-[#DCF0DC] text-white hover:text-black rounded-full backdrop-blur-sm transition-all shadow-xl opacity-0 group-hover:opacity-100"
                      >
                        <Maximize2 size={24} />
                  </button>

                  {/* Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-1.5 rounded-full text-white/90 text-sm backdrop-blur-sm font-medium">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>
              </div>

              {/* Text Content Column */}
              {!isFullscreen && (
                <div className="w-full lg:w-[40%] p-6 sm:p-10 lg:p-12 overflow-y-auto max-h-[50vh] lg:max-h-[90vh] custom-scrollbar flex flex-col items-start bg-gradient-to-b from-[#132a18] to-[#0a1a0e]">
                  <span className="text-[#DCF0DC]/70 font-medium tracking-widest text-sm uppercase mb-4 block border border-[#DCF0DC]/20 px-3 py-1 rounded-full">
                    {selectedProject.date}
                  </span>
                  <h3 className="font-['DM_Serif_Display'] text-[#DCF0DC] text-3xl sm:text-4xl mb-6">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="text-[#DCF0DC]/80 space-y-4 text-base sm:text-lg leading-relaxed font-light">
                    {selectedProject.description.split('\n').map((paragraph, idx) => (
                      paragraph.trim() && <p key={idx}>{paragraph}</p>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      setTimeout(() => {
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                      }, 400); // Wait for modal close animation
                    }}
                    className="mt-10 sm:mt-auto bg-[#DCF0DC] text-[#132a18] hover:bg-[#DCF0DC]/90 w-full py-4 rounded-xl font-semibold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Hasonlót szeretnék
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
