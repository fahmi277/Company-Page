import { motion } from "motion/react";
import { ArrowRight, Zap, TrendingUp, Sun } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#800000]/5 -skew-x-12 transform translate-x-20 z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#800000]/5 rounded-full blur-3xl z-0" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon/10 text-maroon text-xs font-bold uppercase tracking-wider mb-6">
            <Zap size={14} />
            Next Gen Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1] mb-6 font-display">
            Integrated <span className="text-maroon">Engineering</span> & Technology Solutions
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed">
            Empowering industrial growth through renewable energy, professional software systems, 
            cutting-edge hardware, and world-class manufacturing support.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-maroon text-white rounded-full font-semibold hover:bg-maroon-light transition-all flex items-center gap-2 group shadow-xl shadow-maroon/20">
              Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-maroon text-maroon rounded-full font-semibold hover:bg-maroon hover:text-white transition-all">
              Our Services
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://loremflickr.com/1200/900/industrial,technology,engineering" 
              alt="Engineering Dashboard" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#800000] rounded-2xl -z-0 opacity-20 blur-xl" />
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-48 h-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <TrendingUp size={20} />
              </div>
              <div className="space-y-1">
                <div className="h-2 w-24 bg-slate-100 rounded" />
                <div className="h-2 w-16 bg-slate-100 rounded" />
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900">99.9% Uptime</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">System Stability</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden md:block z-20"
          >
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 bg-maroon/10 rounded-lg flex items-center justify-center text-maroon">
                <Sun size={20} />
              </div>
              <div className="space-y-1">
                <div className="h-2 w-24 bg-slate-100 rounded" />
                <div className="h-2 w-16 bg-slate-100 rounded" />
              </div>
              <div className="mt-2 text-xl font-bold text-slate-900">50+ MW</div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">PLTS Installed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
