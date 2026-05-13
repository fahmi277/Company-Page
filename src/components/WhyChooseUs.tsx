import { motion } from "motion/react";
import { Settings, Shield, Zap, Factory, ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    { title: "End-to-end Engineering", desc: "From concept to full-scale deployment, we handle every stage of your project.", icon: Settings },
    { title: "Industrial Solutions", desc: "Ruggedized technology designed specifically for factory floors and field use.", icon: Shield },
    { title: "Fast Development", desc: "Agiile methodologies to bring your industrial solutions to life in record time.", icon: Zap },
    { title: "Full Integration", desc: "Seamless synergy between custom hardware, embedded logic, and cloud platforms.", icon: Factory },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="text-maroon font-bold tracking-widest uppercase text-sm mb-4">Why Partners Trust Us</div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight font-display">The Sundaya Advantage</h2>
            <p className="text-slate-600 mb-8">
              We don't just build systems; we build sustainable competitive advantages for our industrial partners through superior engineering.
            </p>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2 group">
              Speak with an Engineer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 shadow-card hover:border-maroon/20 transition-all"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <feature.icon className="text-[#800000]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
