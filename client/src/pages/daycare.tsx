import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react'; // ChevronLeft 아이콘 import 추가
import { Button } from '@/components/ui/button'; // Button 컴포넌트 import 추가

// 데이터 인터페이스 정의
interface HeroSectionData {
  title: string;
  subtitle: string;
  backgroundImage: string; // 실제 이미지 경로 또는 영상 썸네일 경로
}

interface PriceInfo {
  weight: string;
  twoHours: string;
  perHourExtra: string;
  fullDay: string;
}

interface Activity {
  name: string;
  description: string;
  icon: string;
}

interface GalleryImage {
  src: string;
  caption: string;
}

interface Testimonial {
  quote: string;
  author: string;
  rating: number;
}

interface DaycareServiceData {
  hero: HeroSectionData;
  pricing: PriceInfo[];
  pricingNotice: string;
  activities: Activity[];
  gallery: GalleryImage[];
  testimonials: Testimonial[];
  cta: {
    text: string;
    buttonText: string;
    link: string;
  };
}

// 목업 데이터
const serviceData: DaycareServiceData = {
  hero: {
    title: '퍼피빌 데이케어',
    subtitle: '짧은 시간도 걱정 없이, 퍼피빌에서 즐거운 하루를',
    backgroundImage: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080', // 예시 경로, 실제 이미지로 교체 필요
  },
  pricing: [
    {
      weight: '~6.9kg',
      twoHours: '10,000원',
      perHourExtra: '+5,000원',
      fullDay: '30,000원',
    },
    {
      weight: '7kg~15kg',
      twoHours: '16,000원',
      perHourExtra: '+8,000원',
      fullDay: '48,000원',
    },
  ],
  pricingNotice: '종일권에는 산책, 놀이, 노즈워크 등 다양한 활동 포함',
  activities: [
    {
      name: '기본 놀이',
      description: '장난감, 친구들과의 교감 놀이',
      icon: '🎾',
    },
    {
      name: '휴식 시간',
      description: '해먹, 쿠션, 실내 조용한 공간 제공',
      icon: '💤',
    },
    {
      name: '자율 산책',
      description: '잔디 운동장, 야외테라스 자율산책',
      icon: '🐾',
    },
    {
      name: '사회화 연습',
      description: '다른 강아지와의 자연스러운 만남',
      icon: '🧠',
    },
    {
      name: '하루 종일 놀기',
      description: '하루 종일 놀기',
      icon: '🥰',
    },
    {
      name: '두뇌 발달',
      description: '후각 마음껏 사용하기',
      icon: '🤔',
    }
  ],
  gallery: [
    // public/images/daycare/ 폴더에 실제 이미지 파일 이름을 넣어주세요.
    { src: '/images/daycare/1.jpg', caption: '하루 종일 놀기' },
    { src: '/images/daycare/2.jpg', caption: '하루 종일 놀기' },
    { src: '/images/daycare/3.jpg', caption: '친구들과 신나게 뛰어놀아요' },
    { src: '/images/daycare/4.jpg', caption: '안전한 실내 놀이 공간' },
    { src: '/images/daycare/5.jpg', caption: '하루 종일 놀기' },
    { src: '/images/daycare/6.jpg', caption: '하루 종일 놀기' },
  ],
  testimonials: [
    {
      quote: '병원갈 일이 생겨서 맡겼는데, 예쁜 사진도 계속 찍어서 연락주시고 넘 안심됐습니다! 올때마다 또 맡기려고 합니다. 너무 만족스러워요, 감사드립니다!☺️🙂☺️',
      author: '행복이 보호자님',
      rating: 5,
    },
    {
      quote: '카페로 갔다가 강아지가 좋아해서 멀지만 데이케어보낼일있을때 다녀왔어요!! 잘놀고온거같아서 만족해요!',
      author: '애플이 보호자님',
      rating: 5,
    },
  ],
  cta: {
    text: '2시간부터 종일까지, 퍼피빌 데이케어를 지금 경험해보세요!',
    buttonText: '데이케어 예약 상담하기',
    link: '/consultation',
  },
};

// 애니메이션 설정
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const DaycareDetail: React.FC = () => {
  const [modalImage, setModalImage] = React.useState<GalleryImage | null>(null);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-playfair font-bold text-warm-orange cursor-pointer hover:opacity-80 transition-opacity">
                퍼피빌
              </h1>
            </Link>
            <Link href="/"> {/* 또는 이전 서비스 목록 페이지로 이동 */}
              <Button variant="ghost" className="flex items-center text-dark-gray hover:text-warm-orange">
                <ChevronLeft className="w-4 h-4 mr-2" />
                돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="py-20 md:py-32 bg-cover bg-center relative text-center bg-cream-dark overflow-hidden"
        style={{ backgroundImage: `url(${serviceData.hero.backgroundImage})` }} // 배경 이미지 설정
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* 어두운 오버레이 */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {serviceData.hero.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {serviceData.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFA94D] mb-12">요금 안내</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {serviceData.pricing.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border border-[#FFA94D]"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-[#FFA94D] mb-4">{plan.weight}</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">2시간권:</span> {plan.twoHours}</li>
                <li><span className="font-semibold">시간당 추가:</span> {plan.perHourExtra}</li>
                <li><span className="font-semibold">종일권 (6시간 이상):</span> {plan.fullDay}</li>
              </ul>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8 text-sm">{serviceData.pricingNotice}</p>
      </motion.section>

      {/* Activities Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-orange-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFA94D] mb-12">무엇을 하나요?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {serviceData.activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.name}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFA94D] mb-12">시설 및 활동 모습</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {serviceData.gallery.map((image, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md cursor-pointer group"
              onClick={() => setModalImage(image)}
              variants={cardVariants}
            >
              <img src={image.src} alt={image.caption} className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-black bg-opacity-50 rounded">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-orange-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#FFA94D] mb-12">보호자님들의 후기</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {serviceData.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg relative"
              variants={cardVariants}
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFA94D] text-white text-3xl p-3 rounded-full shadow-md">
                💬
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-600 font-semibold">- {testimonial.author}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-2xl ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 px-4 text-center bg-[#FFF9F5]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <p className="text-xl md:text-2xl text-gray-700 mb-8">{serviceData.cta.text}</p>
        <Link href={serviceData.cta.link}>
          <motion.a
            className="bg-orange-400 text-white font-bold py-4 px-8 rounded-full text-lg hover:opacity-90 transition-opacity duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {serviceData.cta.buttonText}
          </motion.a>
        </Link>
      </motion.section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <motion.div
            className="bg-white p-4 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            <img src={modalImage.src} alt={modalImage.caption} className="w-full h-auto rounded-md mb-4" />
            <p className="text-center text-gray-700">{modalImage.caption}</p>
            <button 
              onClick={() => setModalImage(null)} 
              className="mt-4 bg-orange-400 text-white py-2 px-4 rounded-md hover:opacity-90 w-full"
            >
              닫기
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DaycareDetail;