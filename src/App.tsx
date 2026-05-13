import { 
  Sun, 
  Code, 
  Cpu, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Zap, 
  Shield, 
  Clock, 
  Globe, 
  Settings,
  MessageSquare,
  ChevronRight,
  TrendingUp,
  Award,
  Wallet,
  Banknote,
  BarChart3,
  Smartphone,
  Package,
  X,
  CreditCard,
  RefreshCw,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Music2,
  LucideIcon
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://www.sundaya.com/wp-content/uploads/2018/06/sundaya-logo.png" 
            alt="Sundaya Logo" 
            className="h-10 w-auto"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#services" className="hover:text-maroon transition-colors">Services</a>
          <a href="#about" className="hover:text-maroon transition-colors">About</a>
          <a href="#portfolio" className="hover:text-maroon transition-colors">Portfolio</a>
          <a href="#workflow" className="hover:text-maroon transition-colors">Workflow</a>
          <button className="bg-maroon text-white px-6 py-2.5 rounded-full hover:bg-maroon-light transition-all shadow-lg shadow-maroon/10">
            Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

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

const ServiceCard = ({ icon: Icon, title, items, image, delay }: { icon: LucideIcon, title: string, items: string[], image: string, delay: number }) => (
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
            <ServiceCard key={idx} {...service} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Product {
  name: string;
  category: string;
  image: string;
  recommendedUse: string;
  specs?: string[];
  description?: string;
}

const ProductDetailModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  const financingSchemes = [
    {
      title: "Beli Putus",
      icon: Wallet,
      desc: "Kepemilikan aset penuh sejak hari pertama. Investasi awal yang memberikan keuntungan jangka panjang maksimal.",
      color: "bg-green-50 text-green-700"
    },
    {
      title: "Sewa Beli",
      icon: CreditCard,
      desc: "Skema cicilan bulanan yang fleksibel. Setelah masa tenor berakhir, aset resmi menjadi milik Anda sepenuhnya.",
      color: "bg-blue-50 text-blue-700"
    },
    {
      title: "Sewa Selamanya",
      icon: RefreshCw,
      desc: "Model OpEx di mana Anda hanya membayar biaya layanan energi. Kami menangani seluruh pemeliharaan selamanya.",
      color: "bg-purple-50 text-purple-700"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-slate-400 hover:text-maroon transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-maroon uppercase tracking-wider shadow-sm mb-3 inline-block">
              {product.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display leading-tight">{product.name}</h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="mb-10">
            <h3 className="text-sm font-bold text-maroon uppercase tracking-widest mb-4">Deskripsi Produk</h3>
            <p className="text-slate-500 leading-relaxed mb-6">
              Solusi rekayasa tingkat tinggi yang dirancang khusus untuk efisiensi maksimal dalam ekosistem industri modern. Produk ini telah melewati standar pengujian ketat Sundaya untuk menjamin keandalan operasional.
            </p>
            
            <div className="bg-maroon/5 border-l-4 border-maroon p-5 rounded-r-2xl">
              <h4 className="text-xs font-bold text-maroon uppercase tracking-wider mb-2">Rekomendasi Penggunaan</h4>
              <p className="text-sm text-slate-600 italic">"{product.recommendedUse}"</p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-bold text-maroon uppercase tracking-widest mb-6">Skema Pembiayaan Tersedia</h3>
            <div className="grid gap-4">
              {financingSchemes.map((scheme, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-maroon/20 hover:bg-white transition-all group">
                  <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center ${scheme.color}`}>
                    <scheme.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal mb-1">{scheme.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{scheme.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 bg-maroon text-white py-4 rounded-2xl font-bold hover:bg-maroon-light transition-all flex items-center justify-center gap-2">
              <MessageSquare size={18} /> Ajukan Konsultasi
            </button>
            <button className="flex-1 border-2 border-slate-200 text-slate-600 py-4 rounded-2xl font-bold hover:border-maroon hover:text-maroon transition-all">
              Download PDF
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    "All",
    "Energy Storage System",
    "Energy Metering",
    "Monitoring Apps",
    "Hardware IoT"
  ];

  const products: Product[] = [
    { name: "LV 48V Battery Module", category: "Energy Storage System", image: "https://loremflickr.com/600/400/lithium,battery,storage", recommendedUse: "Ideal for residential energy storage and small-scale off-grid power systems." },
    { name: "MD 72V Power Rack", category: "Energy Storage System", image: "https://loremflickr.com/600/400/battery,rack,industrial", recommendedUse: "Perfect for medium-scale commercial facilities and backup power for data centers." },
    { name: "HV 800V Industrial Storage", category: "Energy Storage System", image: "https://loremflickr.com/600/400/energy,storage,system", recommendedUse: "Designed for heavy industrial microgrids and large-scale utility power plants." },
    { name: "kwh Meter AMI 1 Phasa", category: "Energy Metering", image: "https://loremflickr.com/600/400/smart,meter,electricity", recommendedUse: "Suitable for residential energy monitoring and smart home grid integration." },
    { name: "Energy Accounting System", category: "Monitoring Apps", image: "https://loremflickr.com/600/400/dashboard,software,data", recommendedUse: "Recommended for large companies looking to audit and optimize facility-wide power consumption." },
    { name: "BMS Monitoring Dashboard", category: "Monitoring Apps", image: "https://loremflickr.com/600/400/ui,monitoring,apps", recommendedUse: "Essential for battery pack manufacturers and large-scale storage operators to track cell health." },
    { name: "PCB BMS", category: "Hardware IoT", image: "https://loremflickr.com/600/400/pcb,electronics,bms", recommendedUse: "Best for hardware engineering teams building custom lithium battery packs for industrial equipment." },
    { name: "PCB DC Energy Management", category: "Hardware IoT", image: "https://loremflickr.com/600/400/electronics,circuit,power", recommendedUse: "Ideal for complex DC microgrids and advanced electric vehicle charging infrastructure." },
    { name: "Relay Smart Control", category: "Hardware IoT", image: "https://loremflickr.com/600/400/iot,relay,control", recommendedUse: "Great for factory automation and remote power switching in telecommunication towers." },
  ];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="text-maroon font-bold tracking-widest uppercase text-sm mb-4">Product Catalog</div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 font-display">Specialized Engineering Products</h2>
            <p className="text-slate-500">Discover our range of high-performance industrial components and systems.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
                  activeCategory === cat 
                    ? "bg-maroon text-white border-maroon shadow-lg shadow-maroon/20" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-maroon hover:text-maroon"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProduct(product)}
                className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:border-maroon/20 hover:bg-white transition-all shadow-card cursor-pointer"
              >
                <div className="h-60 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-maroon uppercase tracking-wider shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mt-6">
                    <button className="text-sm font-bold text-maroon flex items-center gap-2 group/btn">
                      Product Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-300 group-hover:text-maroon transition-colors shadow-sm">
                      <Package size={18} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const Financing = () => {
  const schemes = [
    {
      title: "Beli Putus (Capex)",
      desc: "Investasi satu kali untuk kepemilikan penuh sistem PLTS sejak hari pertama.",
      icon: Wallet,
      benefits: [
        "Kepemilikan Aset 100%",
        "ROI Optimal (3-5 Tahun)",
        "Bebas Biaya Bulanan",
        "Garansi Performa Jangka Panjang"
      ],
      highlight: "Investment"
    },
    {
      title: "Leasing / Kredit",
      desc: "Cicilan bulanan yang ringan tanpa mengganggu arus kas operasional Anda.",
      icon: Banknote,
      benefits: [
        "Tanpa DP Besar",
        "Tenor Fleksibel",
        "Ownership Setelah Lunas",
        "Hemat Tagihan Listrik Langsung"
      ],
      highlight: "Flexible"
    },
    {
      title: "Sewa Energi (PPA)",
      desc: "Zero upfront cost. Anda hanya membayar energi yang dihasilkan oleh sistem.",
      icon: BarChart3,
      benefits: [
        "Investasi Rp 0",
        "Free Maintenance & Monitoring",
        "Hanya Bayar Sesuai Produksi",
        "Risiko Teknis di Tangan Kami"
      ],
      highlight: "Zero Risk"
    }
  ];

  return (
    <section id="financing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-maroon font-bold tracking-widest uppercase text-sm mb-4">Financing Schemes</div>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 font-display">Pilih Skema Pembiayaan Anda</h2>
          <p className="text-slate-500 text-lg">
            Kami menyediakan berbagai pilihan pembiayaan fleksibel untuk membantu Anda beralih ke energi surya tanpa kendala biaya.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schemes.map((scheme, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-card hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-maroon/10 text-maroon text-[10px] font-black uppercase tracking-tighter px-4 py-2 rounded-bl-xl">
                {scheme.highlight}
              </div>
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-maroon transition-colors duration-500">
                <scheme.icon className="text-slate-400 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-charcoal mb-4">{scheme.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {scheme.desc}
              </p>
              
              <div className="space-y-4 mb-10">
                {scheme.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-maroon/10 flex items-center justify-center rounded-full shrink-0">
                      <CheckCircle2 size={12} className="text-maroon" />
                    </div>
                    <span className="text-sm font-medium text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 bg-slate-50 text-slate-700 rounded-2xl font-bold text-sm group-hover:bg-maroon group-hover:text-white transition-all shadow-sm">
                Hubungi Konsultan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const CTA = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-charcoal rounded-[3rem] overflow-hidden relative border border-gray-100 shadow-card">
        {/* Decorative Grid */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="relative z-10 py-20 px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display">
            Let's Build Your Industrial Technology Solution
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Ready to integrate professional engineering into your business? 
            Our team of experts is standing by to help you scale.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-maroon text-white rounded-full font-bold text-lg hover:bg-maroon-light transition-all shadow-xl shadow-red-950/40">
              Start Free Consultation
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Youtube", icon: Youtube, url: "#" },
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "TikTok", icon: Music2, url: "#" },
  ];

  return (
    <footer className="bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img 
                src="https://www.sundaya.com/wp-content/uploads/2018/06/sundaya-logo.png" 
                alt="Sundaya Logo" 
                className="h-8 w-auto grayscale brightness-0" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Empowering global industrial growth through high-precision technology integrations and elite engineering support.
            </p>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="flex items-center gap-2 text-slate-500 hover:text-maroon transition-colors group"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-maroon group-hover:text-white transition-all">
                    <social.icon size={16} />
                  </div>
                  <span className="text-xs font-bold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-maroon transition-colors">Solar Power Solutions</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Software Engineering</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">IoT & Hardware Dev</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Industrial Manufacturing Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-maroon transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-maroon transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase text-xs tracking-widest">Factory & Contact</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-maroon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-charcoal mb-1 uppercase">Location</h5>
                  <p className="text-sm text-slate-500">Kawasan Industri Jababeka, Cikarang, Indonesia</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-maroon">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-charcoal mb-1 uppercase">Call Us</h5>
                  <p className="text-sm text-slate-500">+62 21 1234 5678</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-maroon">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-charcoal mb-1 uppercase">Email</h5>
                  <p className="text-sm text-slate-500">info@sundaya.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2026 Sundaya. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-maroon selection:text-white relative">
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0" />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <TrustIndicators />
          <Partners />
          <About />
          <Services />
          <Products />
          <Financing />
          <WhyChooseUs />
          <Portfolio />
          <Workflow />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

