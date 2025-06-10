import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

const heroImages = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h1 
          className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          함께하는 하루,<br />
          <span className="text-warm-orange">건강한 발걸음</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          반려견 전문 케어 센터에서 특별한 하루를 시작하세요
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/consultation">
            <motion.button 
              className="bg-warm-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🗓️ 상담 신청하기
            </motion.button>
          </Link>
          <motion.button 
            className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToServices}
          >
            🐾 서비스 보기
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
