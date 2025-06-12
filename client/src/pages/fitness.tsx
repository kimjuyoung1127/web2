import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import { ChevronLeft, Play, X, Star, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceDetailDataEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mainVideo: string;
  features: string[];
  benefits: string[];
  gallery: { src: string; alt: string; type: 'image' | 'video' }[];
  testimonials: {
    name: string;
    petName: string;
    comment: string;
    rating: number;
  }[];
  pricing: {
    title: string;
    price: string;
    period: string;
    includes: string[];
  };
}

interface ServiceData {
  [key: string]: ServiceDetailDataEntry;
}

const serviceData: ServiceData = {
  
  "fitness": {
    id: "fitness",
    title: "독 피트니스",
    subtitle: "건강한 체력 관리와 두뇌강화 운동 프로그램",
    description: "강아지에 특화된 전문 피트니스 프로그램으로 우리 아이의 건강한 체중 관리와 근력 강화를 도와드립니다. 재미있는 운동을 통해 스트레스도 해소하고 활력 넘치는 일상을 만들어보세요.",
    mainVideo: "QzsfkZJ_qeU", // Dog fitness/exercise video
    features: [
      "반려견 맞춤 운동 강도",
      "전문 피트니스 트레이너",
      "다양한 운동 기구 활용",
      "건강 상태 모니터링"
    ],
    benefits: [
      "건강한 체중 관리",
      "근력 및 지구력 향상",
      "스트레스 해소",
      "활동성 증가"
    ],
    gallery: [
      {
        src: "2H7lrnEb82Y",
        alt: "피트니스 운동 중인 강아지",
        type: "video"
      },
      {
        src: "Qgb9SBg8Plo", // Dog agility training
        alt: "전문 피트니스 프로그램",
        type: "video"
      },
      {
        src: "lzVvoOoz0K4",
        alt: "",
        type: "video"
      },
      {
        src: "HFTtC1Nrxbk",
        alt: "",
        type: "video"
      }
    ],
    testimonials: [
      {
        name: "뚜비 보호자님",
        petName: "뚜비",
        comment: "피트니스 프로그램으로 겁 많던 아이가 자신감이 생겼어요!. 너무 감사합니다~!.",
        rating: 5
      }
    ],
    pricing: {
      title: "독 피트니스 프로그램 ",
      price: "0 ",
      period: "원/월",
      includes: [
        "유치원 등록 시 무료",
        "개별 운동 계획 수립",
        "건강 상태 체크",
        "체형 교정, 근육 강화",
        "수술 후 재활"
      ]
    }
  },
  // 다른 서비스 데이터도 여기에 추가할 수 있습니다.
};export default function ServiceDetail() {
  const [currentLocation] = useLocation(); // 변수명 변경 (location -> currentLocation)
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  
  const params = new URLSearchParams(currentLocation.split('?')[1] || '');
  const serviceId = params.get('service') || 'fitness'; 
  const service = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    console.error(`Service with id "${serviceId}" not found.`);
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-warm-orange mb-4 text-center">서비스를 찾을 수 없습니다.</h1>
        <p className="text-medium-gray mb-8 text-center">요청하신 '{serviceId}' 서비스를 찾을 수 없습니다. 올바른 서비스인지 확인해주세요.</p>
        <Link href="/">
          <Button className="bg-warm-orange text-white hover:bg-orange-500">
            홈으로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }
  
    const openMedia = (src: string, type: 'image' | 'video') => {
      setSelectedMedia(src);
      setMediaType(type);
    };
  
    const closeMedia = () => {
      setSelectedMedia(null);
    };
  
    return (
      <div className="min-h-screen bg-cream">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <h1 className="text-2xl font-playfair font-bold text-warm-orange cursor-pointer hover:opacity-80 transition-opacity">
                  퍼피빌
                </h1>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="flex items-center text-dark-gray hover:text-warm-orange">
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  홈으로 돌아가기
                </Button>
              </Link>
            </div>
          </div>
        </header>
  
        {/* Hero Section with Main Video */}
        <section className="relative py-16 md:py-20 bg-gradient-to-r from-warm-orange to-orange-400 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-playfair text-4xl md:text-5xl font-bold text-warm-orange mb-4 drop-shadow-md">
                  {service.title}
                </h1>
                <p className="text-xl text-white/90 mb-6 drop-shadow-sm">{service.subtitle}</p>
                <p className="text-black/80 mb-8 leading-relaxed drop-shadow-sm">{service.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/consultation">
                    <motion.button
                      className="bg-white text-warm-orange px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl text-lg"
                      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      상담 신청하기
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                className="relative mt-10 lg:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${service.mainVideo}?rel=0&autoplay=1&mute=1&loop=1&playlist=${service.mainVideo}`}
                    title={`${service.title} 소개 영상`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Features & Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-8">
                  <Award className="inline-block w-8 h-8 text-warm-orange mr-3 align-middle" />
                  <span className="text-warm-orange">특별한</span> 특징
                </h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2.5 h-2.5 bg-warm-orange rounded-full mr-4 mt-1.5 flex-shrink-0"></div>
                      <span className="text-medium-gray text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-8">
                  <Star className="inline-block w-8 h-8 text-warm-orange mr-3 align-middle" />
                  <span className="text-warm-orange">기대</span> 효과
                </h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-medium-gray text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Gallery */}
        {service.gallery && service.gallery.length > 0 && (
          <section className="py-16 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
                  <span className="text-warm-orange">생생한</span> 현장
                </h2>
                <p className="text-medium-gray text-lg">퍼피빌에서의 특별한 순간들을 만나보세요</p>
              </motion.div>
  
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.gallery.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => openMedia(item.src, item.type)}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-black flex items-center justify-center">
                        <img 
                          src={`https://img.youtube.com/vi/${item.src}/hqdefault.jpg`} 
                          alt={item.alt} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out opacity-70 group-hover:opacity-90"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-white text-sm font-semibold drop-shadow-md">{item.alt}</p>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Testimonials */}
        {service.testimonials && service.testimonials.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
                  <Users className="inline-block w-8 h-8 text-warm-orange mr-3 align-middle" />
                  <span className="text-warm-orange">보호자</span> 후기
                </h2>
              </motion.div>
  
              <div className="space-y-8">
                {service.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-cream rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-xl flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-gray text-lg">{testimonial.name}</h4>
                        <div className="flex text-yellow-400 mt-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-medium-gray leading-relaxed italic text-md">
                      "{testimonial.comment}"
                    </p>
                    <p className="text-sm text-medium-gray/80 mt-3 text-right">
                      - {testimonial.petName} 보호자님
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
  
        {/* Pricing */}
        {service.pricing && (
          <section className="py-16 bg-cream">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-2">
                  {service.pricing.title}
                </h2>
                <p className="text-5xl font-bold text-warm-orange my-4">
                  {parseInt(service.pricing.price).toLocaleString()} <span className="text-2xl text-medium-gray font-normal">{service.pricing.period}</span>
                </p>
                <ul className="space-y-3 text-medium-gray my-8 text-left">
                  {service.pricing.includes.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Clock className="w-5 h-5 text-warm-orange mr-3 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link href="/consultation">
                  <motion.button
                    className="w-full bg-warm-orange text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg text-lg"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    지금 바로 상담 신청
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        )}
  
        {/* Media Lightbox */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
              onClick={closeMedia}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative bg-white p-2 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto" 
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal content
              >
                {mediaType === 'image' ? (
                  <img src={selectedMedia} alt="Selected media" className="w-full h-auto rounded object-contain max-h-[85vh]" />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedMedia}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded"
                    ></iframe>
                  </div>
                )}
                <button 
                  onClick={closeMedia} 
                  className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/70 transition-colors z-10"
                  aria-label="Close media view"
                >
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Back to Top Button (Optional) */}
        {/* Consider adding a back-to-top button for long pages for better UX */}
      </div>
    );
  }