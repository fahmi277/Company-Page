import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    { title: "Smart Solar Grid Control", category: "Solar", image: "https://loremflickr.com/800/600/solar,energy,grid" },
    { title: "Industrial IoT Edge Gateway", category: "IoT", image: "https://loremflickr.com/800/600/iot,device,electronics" },
    { title: "Cloud ERP for Manufacturing", category: "Software", image: "https://loremflickr.com/800/600/data,center,server" },
    { title: "Automated Trial Mold System", category: "Manufacturing", image: "https://loremflickr.com/800/600/manufacturing,robot,factory" },
    { title: "Real-time Machine Monitoring", category: "Software", image: "https://loremflickr.com/800/600/monitor,screen,dashboard" },
    { title: "Energy Storage Management", category: "Solar", image: "https://loremflickr.com/800/600/battery,storage,energy" },
  ];

  const categories = ["All", "Solar", "IoT", "Software", "Manufacturing"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[#800000] font-bold tracking-widest uppercase text-sm mb-4">Our Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-display">Proof of Excellence</h2>
            <p className="text-slate-600">A showcase of complex technical problems solved through elegant engineering and deep integration.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? "bg-maroon text-white shadow-lg shadow-maroon/20" 
                    : "bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-[#800000] font-bold text-xs uppercase tracking-widest mb-1">{project.category}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <button className="flex items-center gap-2 text-white/70 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
