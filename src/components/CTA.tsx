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

export default CTA;
