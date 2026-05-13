import { motion } from "motion/react";
import { X, Wallet, CreditCard, RefreshCw, MessageSquare } from "lucide-react";
import { Product } from "../types";

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

export default ProductDetailModal;
