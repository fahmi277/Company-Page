import { motion } from "motion/react";

const Partners = () => {
  const partners = [
    { name: "SolarTech", sector: "Energy", logo: "https://loremflickr.com/200/200/logo,solar" },
    { name: "EcoGrid", sector: "Renewable", logo: "https://loremflickr.com/200/200/logo,grid" },
    { name: "IndustrialFlow", sector: "Engineering", logo: "https://loremflickr.com/200/200/logo,factory" },
    { name: "SmartDev", sector: "Software", logo: "https://loremflickr.com/200/200/logo,software" },
    { name: "HardwarePro", sector: "Electronics", logo: "https://loremflickr.com/200/200/logo,electronic" },
    { name: "PowerGrid", sector: "Farm Tech", logo: "https://loremflickr.com/200/200/logo,grid" },
    { name: "GigaFactory", sector: "Manufacturing", logo: "https://loremflickr.com/200/200/logo,industrial" },
    { name: "PurePower", sector: "Mining", logo: "https://loremflickr.com/200/200/logo,power" },
  ];

  // Double the partners to create a seamless infinite loop
  const scrollPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Trusted by Industry Leaders</h3>
      </div>
      <div className="relative flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 items-center whitespace-nowrap min-w-max"
        >
          {scrollPartners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-full border-2 border-slate-100 p-1 bg-white shadow-sm overflow-hidden flex items-center justify-center shrink-0">
                <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900">{partner.name}</span>
                <span className="text-[10px] font-bold text-maroon uppercase tracking-widest">{partner.sector}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
