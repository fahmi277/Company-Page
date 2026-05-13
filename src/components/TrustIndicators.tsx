import { motion } from "motion/react";
import { Clock, Users, CheckCircle2, Globe } from "lucide-react";

const TrustIndicators = () => {
  const stats = [
    { label: "Uptime Guaranteed", value: "99.9%", icon: Clock },
    { label: "Engineering Experts", value: "15+", icon: Users },
    { label: "Succesful Projects", value: "250+", icon: CheckCircle2 },
    { label: "Global Clients", value: "85+", icon: Globe },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-card border border-slate-100 hover:border-maroon/20 transition-all group metric-border"
              >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#800000]/10 transition-colors">
                <stat.icon className="text-slate-400 group-hover:text-[#800000] transition-colors" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
