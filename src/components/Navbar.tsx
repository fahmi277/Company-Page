import { useState, useEffect } from "react";

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

export default Navbar;
