import { Instagram, Linkedin, Youtube, Facebook, Music2, MapPin, Phone, Mail } from "lucide-react";

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

export default Footer;
