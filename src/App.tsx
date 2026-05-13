import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustIndicators from "./components/TrustIndicators";
import Partners from "./components/Partners";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Financing from "./components/Financing";
import WhyChooseUs from "./components/WhyChooseUs";
import Portfolio from "./components/Portfolio";
import Workflow from "./components/Workflow";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

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
