import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Package } from "lucide-react";
import { Product } from "../types";
import ProductDetailModal from "./ProductDetailModal";

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

export default Products;
