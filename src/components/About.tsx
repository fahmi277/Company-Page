import { motion } from "motion/react";
import { CheckCircle2, Award, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="w-12 h-1 bg-maroon" />
            <h2 className="text-4xl font-bold text-charcoal leading-tight font-display">
              A Legacy of <span className="text-maroon">Reliability</span> & Innovation in Industrial Engineering
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed">
              Founded on the principles of precision and forward-thinking, Sundaya provides 
              end-to-end industrial technology services. We bridge the gap between abstract 
              innovation and practical, industrial-grade implementation.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {[
                "Industrial-Grade Solutions",
                "Custom Development",
                "Integrated Hardware/Software",
                "Manufacturing Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-maroon/10 flex items-center justify-center rounded-full">
                    <CheckCircle2 size={14} className="text-maroon" />
                  </div>
                  <span className="text-sm font-semibold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="flex items-center gap-2 text-maroon font-bold group">
                Learn more about our team <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 aspect-video md:aspect-square">
            <img 
                src="https://loremflickr.com/800/800/engineering,team,office" 
                alt="Engineering Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#800000]/10 rounded-3xl -z-0" />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-white">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium">ISO Certified</div>
                  <div className="text-lg font-bold text-slate-900">Industry Leader</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
