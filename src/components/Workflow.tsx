import { motion } from "motion/react";

const Workflow = () => {
  const steps = [
    { title: "Consultation", desc: "Understanding your technical requirements and business objectives." },
    { title: "Design & Engineering", desc: "Architecting the hardware and software blueprints for reliability." },
    { title: "Development", desc: "Agile build cycles with continuous integration and stakeholder feedback." },
    { title: "Testing", desc: "Rigorous industrial-grade stress testing and quality assurance." },
    { title: "Deployment", desc: "Smooth rollout and field integration with minimal downtime." },
    { title: "Support", desc: "Ongoing maintenance and technical support to ensure longevity." },
  ];

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[#800000] font-bold tracking-widest uppercase text-sm mb-4">Our Method</div>
          <h2 className="text-4xl font-bold text-slate-900 font-display">Structured for Success</h2>
        </div>
        
        <div className="relative">
          {/* Vertical Line for Mobile */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-100 md:hidden" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="flex md:flex-col gap-4">
                  <div className="absolute left-0 md:relative w-10 h-10 bg-slate-950 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6 ring-8 ring-white shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
