import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Pricing />
      <About />
      <Contact />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="sticky-mobile-cta sm:hidden">
        <Link href="/consultation">
          <button className="w-full bg-warm-orange text-white py-3 rounded-xl font-semibold text-lg hover:bg-opacity-90 transition-all">
            상담 신청하기
          </button>
        </Link>
      </div>
      
      {/* Desktop Sticky CTA */}
      <div className="sticky-desktop-cta hidden sm:block">
        <Link href="/consultation">
          <button className="bg-warm-orange text-white px-6 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center font-semibold">
            <span className="mr-2">📞</span>
            상담 신청
          </button>
        </Link>
      </div>
    </div>
  );
}
