import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-warm-orange to-orange-400">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          우리 아이의 특별한 시간을<br />
          <span className="text-orange-100">지금 시작하세요</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          전문적인 상담을 통해 우리 아이에게 맞는 최적의 프로그램을 찾아보세요
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/consultation">
            <motion.button 
              className="bg-white text-warm-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 전화 상담 신청
            </motion.button>
          </Link>
          <motion.button 
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-warm-orange transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📍 찾아오시는 길
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
