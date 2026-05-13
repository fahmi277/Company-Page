import { motion } from "motion/react";
import { LucideIcon, Sun, Code, Cpu, Factory, ChevronRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, items, image, delay }: { icon: LucideIcon, title: string, items: string[], image: string, delay: number, key?: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:border-maroon/20 transition-all duration-500 flex flex-col"
  >
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maroon transition-colors duration-500">
        <Icon className="text-slate-400 group-hover:text-white transition-colors duration-500" size={28} />
      </div>
      <h3 className="text-2xl font-bold text-charcoal mb-4">{title}</h3>
      <ul className="space-y-3 flex-grow">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-maroon" />
            {item}
          </li>
        ))}
      </ul>
      <button className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-500 group-hover:text-maroon transition-colors">
        View Details <ChevronRight size={16} />
      </button>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "Solar Power Solutions",
      icon: Sun,
      image: "https://loremflickr.com/600/400/solar,panel,industrial",
      items: ["PLTS Installation", "Monitoring System", "Battery Storage", "Energy Management"]
    },
    {
      title: "Software Development",
      icon: Code,
      image: "https://loremflickr.com/600/400/software,dashboard,ui",
      items: ["Web Applications", "IoT Dashboards", "ERP Systems", "Cloud Platforms"]
    },
    {
      title: "Hardware & IoT Dev",
      icon: Cpu,
      image: "https://loremflickr.com/600/400/circuitboard,electronics,iot",
      items: ["Embedded Systems", "PCB Design", "Industrial Bus Integration", "Device Prototyping"]
    },
    {
      title: "Industrial Manufacturing Solutions",
      icon: Factory,
      image: "https://loremflickr.com/600/400/injection,molding,machine",
      items: ["Injection Mold Rental", "Mold Trials", "Precision Manufacturing", "Small Batch Production"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[#800000] font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display">Engineered for the Future</h2>
          <p className="text-slate-600 text-lg">
            High-performance solutions tailored for industrial environments and demanding technical requirements.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              title={service.title}
              icon={service.icon}
              image={service.image}
              items={service.items}
              delay={idx * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
