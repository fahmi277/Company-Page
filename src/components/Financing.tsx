import { motion } from "motion/react";
import { Wallet, Banknote, BarChart3, CheckCircle2 } from "lucide-react";

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

export default Financing;
