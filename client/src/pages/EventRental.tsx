import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, CheckCircle, MessageSquare, Users, ShieldCheck, Wind, Sun } from 'lucide-react';
import { Link } from 'react-router-dom'; // React Router 사용 시

// Gallery 컴포넌트를 가져옵니다. (경로가 정확한지 확인 필요)
// import Gallery from '../components/Gallery'; 

// 임시 데이터 (실제 데이터로 교체 필요)
const spaceGalleryImages = [
  { id: 1, src: '/images/event/1.jpg', alt: '넓고 쾌적한 실내 놀이방 전경', overlay: '실내 놀이방' },
  { id: 2, src: '/images/event/2.jpg', alt: '넓은 잔디 운동장', overlay: '잔디 운동장' },
  { id: 3, src: '/images/event/3.jpg', alt: '귀여운 포토존', overlay: '포토존' },
  { id: 4, src: '/images/event/4.jpg', alt: '편안한 보호자 대기 공간', overlay: '편안한 대기공간' },
  { id: 5, src: '/images/event/5.jpg', alt: '야외 테라스 ', overlay: '야외 테라스' }, // 실제 이미지로 교체
];

const activityExamples = [
  { id: 1, src: '/images/event/6.jpg', alt: '' },
  { id: 2, src: '/images/event/7.jpg', alt: '' },
  { id: 3, src: '/images/event/8.jpg', alt: '' },
  { id: 4, src: '/images/event/9.jpg', alt: '' },
  { id: 5, src: '/images/event/10.jpg', alt: '' },
  { id: 6, src: '/images/event/11.jpg', alt: '' },
  { id: 7, src: '/images/event/12.jpg', alt: '' },
  { id: 8, src: '/images/event/13.jpg', alt: '' },
  { id: 9, src: '/images/event/14.jpg', alt: '' },
  { id: 10, src: '/images/event/15.jpg', alt: '' },
  { id: 11, src: '/images/event/16.jpg', alt: '' },
  { id: 12, src: '/images/event/17.jpg', alt: '' },

];

const features = [
  { id: 1, icon: <ShieldCheck size={40} className="text-sky-500" />, title: '안전 매트 설치', description: '미끄럼 방지 및 충격 흡수 기능의 안전 매트가 바닥 전체에 설치되어 있습니다.' },
  { id: 2, icon: <Users size={40} className="text-sky-500" />, title: '반려견 전용 설계', description: '소형견 아이들이 안전하고 즐겁게 놀 수 있도록 맞춤 설계되었습니다.' }, 
  { id: 3, icon: <CheckCircle size={40} className="text-sky-500" />, title: 'CCTV 상시 녹화', description: '24시간 CCTV 녹화로 아이들의 모든 순간을 안전하게 지켜봅니다.' },
  { id: 4, icon: <Wind size={40} className="text-sky-500" />, title: '에어컨/난방 완비', description: '사계절 내내 쾌적한 온도를 유지하여 아이들이 편안하게 놀 수 있습니다.' },
  { id: 5, icon: <Sun size={40} className="text-sky-500" />, title: '항균 청소 매일 진행', description: '매일 항균 청소와 소독을 통해 청결한 환경을 제공합니다.' },
  { id: 6, icon: <MessageSquare size={40} className="text-sky-500" />, title: '사회성 발달 유도', description: '또래 친구들과의 건강한 상호작용을 통해 사회성을 길러줍니다.' },
];

const testimonials = [
  { id: 1, name: '다롱이 보호자', comment: '애견카페 넓고 쾌적하고 야외까지 너무 잘되어 있어서 신나게 뛰어놀 수 있어서 좋습니다. 청소도 잘 되어있고 냄새 안 나고 너무 북적북적하지 않아서 좋아요. 첫 방문이었는데 다음에도 또 방문하려고 합니다. 저는 야외가 너무 마음에 들고 너무 좋아요.', dogName: '다롱이' },
  { id: 2, name: '초코 보호자', comment: '처음 방문 했어요! 이 근처에 애카가 많은데 이곳처럼 애기들이 뛰어놀수 있는 공간이 넓은곳은 여기밖에 없는것 같아요! 시설도 잘 되있구 야외테라스도 비 안맞게 되있어서 뛰어놀수있구 정원도 있지만 오늘은 비와서 이용을 못했어요! 다음에 이용하러 또 올게용!! >.<', dogName: '초코' },
  { id: 3, name: '몽이 보호자', comment: '미사 애견카페 중에 제일 좋은것같아요! 분위기도 환경도 강아지들에게 좋을것같고 세 군데로 나눠진 공간이 있어서 강아지들 성향이나 취향에 맞게 이용하기 좋습니다 ❤️', dogName: '몽이' },
];

const EventRental: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === spaceGalleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? spaceGalleryImages.length - 1 : prev - 1));
  };

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-cream-100 min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center text-white px-4"
        style={{ backgroundImage: "url('/images/event/hero.jpg')" }} // 실제 이미지 경로로 변경
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div 
          className="relative z-10 text-center max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            비 오는 날도, 추운 날도 <span className="whitespace-nowrap">괜찮아요!</span> 
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            퍼피빌 실내 놀이방에서 마음껏 뛰놀아요 🐾
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-sm sm:text-base">
            {['#안전한공간', '#쾌적한환기', '#다양한놀이기구', '#소형견전용'].map((tag) => (
              <span key={tag} className="bg-sky-500 bg-opacity-70 text-white py-2 px-4 rounded-full shadow-md">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Space Gallery Section */}
      <section id="space-gallery" className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-gray mb-12 text-center">
            퍼피빌 실내 놀이방 <span className="text-sky-600">둘러보기</span>
          </h2>
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <AnimatePresence initial={false} custom={currentSlide}>
                <motion.div
                  key={currentSlide}
                  className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: `url(${spaceGalleryImages[currentSlide].src})` }}
                  onClick={() => openLightbox(spaceGalleryImages[currentSlide].src)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 md:p-6">
                    <h3 className="text-white text-lg md:text-2xl font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                      {spaceGalleryImages[currentSlide].overlay}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button 
              onClick={prevSlide} 
              className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            >
              <ChevronLeft size={24} className="text-sky-700" />
            </button>
            <button 
              onClick={nextSlide} 
              className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 p-2 sm:p-3 rounded-full shadow-lg transition-colors z-10"
            >
              <ChevronRight size={24} className="text-sky-700" />
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {spaceGalleryImages.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-sky-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-mint-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-gray mb-16 text-center">
            우리 아이를 위한 <span className="text-mint-600">특별한 공간</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 p-3 bg-mint-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-gray mb-2">{feature.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Examples Section - Gallery 컴포넌트 활용 고려 */}
      <section id="activities" className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-gray mb-12 text-center">
            놀이방에서의 <span className="text-warm-orange-500">즐거운 순간들</span>
          </h2>
          {/* Gallery 컴포넌트를 여기에 통합하거나, 아래와 같이 직접 구현할 수 있습니다. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityExamples.map((image, index) => (
              <motion.div
                key={image.id}
                className="rounded-xl shadow-lg overflow-hidden cursor-pointer group relative"
                onClick={() => openLightbox(image.src)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">자세히 보기</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-gray mb-16 text-center">
            보호자님들의 <span className="text-sky-600">생생한 후기</span> 🐾
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-3">
                  <img src={`/images/avatar/dog_avatar_${testimonial.id}.png`} alt={`${testimonial.dogName} 아바타`} className="w-12 h-12 rounded-full mr-4 border-2 border-sky-200" /> {/* 실제 아바타 이미지로 교체 */}
                  <div>
                    <h4 className="font-semibold text-sky-700 text-lg">{testimonial.dogName}</h4>
                    <p className="text-sm text-medium-gray">{testimonial.name}</p>
                  </div>
                </div>
                <p className="text-dark-gray leading-relaxed text-base md:text-lg">
                  “{testimonial.comment}”
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 md:py-24 bg-warm-orange-400 text-dark-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-playfair text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            지금 바로 퍼피빌 놀이방을 경험해보세요!
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            궁금한 점이 있으신가요? 언제든지 편하게 문의해주세요.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/consultation" 
              className="bg-white text-dark-grey-500 font-bold py-4 px-10 rounded-lg text-lg hover:bg-cream-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-md inline-block"
            >
              상담 신청하기
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for Gallery and Activity Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-3xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
            >
              <img
                src={selectedImage}
                alt="확대된 이미지"
                className="w-full h-full object-contain"
              />
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Floating CTA Button */}
      {/* 
      <Link 
        to="/consultation"
        className="fixed bottom-6 right-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-5 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 z-50 flex items-center gap-2"
      >
        <MessageSquare size={20} /> 상담하기
      </Link>
      */}
    </div>
  );
};

export default EventRental;