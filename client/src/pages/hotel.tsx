import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import { ChevronLeft, Play, X, Star, Users, CalendarDays, Dog, Maximize, Home, Heart } from "lucide-react"; // 필요한 아이콘 추가
import { Button } from "@/components/ui/button";

// 호텔 요금제 인터페이스
interface HotelPricingTier {
  id: string;
  weightRange: string;
  pricePerNight: string;
  sevenNightDiscount?: string;
}

// 호텔 이미지 인터페이스
interface HotelImage {
  src: string;
  alt: string;
  caption: string;
}

// 호텔 후기 인터페이스
interface HotelTestimonial {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date?: string;
}

interface ServiceDetailDataEntry {
  id: string;
  title: string;
  subtitle: string;
  heroImage?: string; // Hero 섹션 배경 이미지 (선택적)
  pricingTiers?: HotelPricingTier[];
  additionalPricingInfo?: {
    familyDiscount: string;
    hourlyExtension: string;
    checkInOutTime: string;
  };
  gallery?: HotelImage[];
  testimonials?: HotelTestimonial[];
  ctaText?: string;
}

interface ServiceData {
  [key: string]: ServiceDetailDataEntry;
}

const serviceData: ServiceData = {
  "hotel": {
    id: "hotel",
    title: "퍼피빌 호텔 HOTEL",
    subtitle: "우리 아이를 위한 조용하고 안락한 1박 2일",
    heroImage: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // 예시 경로, 실제 이미지로 교체 필요
    pricingTiers: [
      { id: "tier1", weightRange: "~5kg", pricePerNight: "40,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier2", weightRange: "~10kg", pricePerNight: "50,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier3", weightRange: "~15kg", pricePerNight: "55,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier4", weightRange: "15kg 이상", pricePerNight: "별도 상담", sevenNightDiscount: "별도 상담" },
    ],
    additionalPricingInfo: {
      familyDiscount: "-10,000원",
      hourlyExtension: "+5,000원",
      checkInOutTime: "체크인 07:30 / 체크아웃 22:00",
    },
    gallery: [
      // 아래 src 경로는 /public/images/hotel/ 내부의 실제 파일명으로 교체해주세요.
      { src: "/images/hotel/room-single-a.jpg", alt: "싱글룸 A형 내부", caption: "싱글룸 A형" },
      { src: "/images/hotel/room-terrace.jpg", alt: "테라스룸 내부", caption: "테라스룸" },
      { src: "/images/hotel/hotel-exterior.jpg", alt: "호텔 외관", caption: "호텔 외관" },
      { src: "/images/hotel/lounge.jpg", alt: "호텔 라운지", caption: "라운지" },
      { src: "/images/hotel/playground.jpg", alt: "실내 놀이 공간", caption: "실내 놀이 공간" },
      { src: "/images/hotel/grooming-room.jpg", alt: "미용 시설", caption: "미용 시설" },
    ],
    testimonials: [
      {
        id: "review1",
        rating: 5,
        comment: "밤새 잘 자고 기분 좋게 인사해줘서 감동이었어요. 시설도 깨끗하고 선생님들도 친절하셔서 안심하고 맡길 수 있었습니다.",
        author: "보리 보호자",
        date: "2023년 10월 26일",
      },
      {
        id: "review2",
        rating: 5,
        comment: "혼자 자는 게 처음인데 생각보다 잘 적응했어요! 넓은 공간에서 친구들이랑 신나게 뛰어놀고, 간식도 잘 먹었다고 해서 너무 기뻤습니다.",
        author: "뭉치 아빠",
        date: "2023년 11월 05일",
      },
    ],
    ctaText: "지금 예약하고 퍼피빌 호텔의 특별한 밤을 경험하세요!",
  }
};

export default function HotelDetail() {
  const [currentLocation] = useLocation();
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [selectedMediaCaption, setSelectedMediaCaption] = useState<string>("");

  // 기본적으로 'hotel' 서비스 ID를 사용하거나, 쿼리 파라미터가 있다면 해당 ID를 사용합니다.
  const params = new URLSearchParams(currentLocation.split('?')[1] || '');
  const serviceId = params.get('service') || 'hotel'; 
  const service = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const openMedia = (src: string, caption: string) => {
    setSelectedMedia(src);
    setSelectedMediaCaption(caption);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    setSelectedMediaCaption("");
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-warm-orange mb-4 text-center">서비스를 찾을 수 없습니다.</h1>
        <p className="text-medium-gray mb-8 text-center">요청하신 '{serviceId}' 서비스를 찾을 수 없습니다.</p>
        <Link href="/">
          <Button className="bg-warm-orange text-white hover:bg-orange-500">홈으로 돌아가기</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream font-sans">
      {/* Header (기존 다른 페이지와 유사하게 구성 가능) */}
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

      {/* 1. Hero Section */}
      <motion.section 
        className="py-20 md:py-32 bg-cover bg-center relative text-center bg-cream-dark overflow-hidden"
        style={{ backgroundImage: service.heroImage ? `url(${service.heroImage})` : 'none' }} // 배경 이미지 설정
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* 어두운 오버레이 */} 
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            className="font-playfair text-4xl md:text-6xl font-bold text-orange mb-6 drop-shadow-lg"
            initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.7, delay: 0.2}}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-orange/90 mb-8 drop-shadow-md"
            initial={{ opacity:0, y: 20 }} animate={{ opacity:1, y: 0 }} transition={{ duration: 0.7, delay: 0.4}}
          >
            {service.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* 2. 체중별 요금 안내 */}
      {service.pricingTiers && service.pricingTiers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-3">
                <Dog className="inline-block w-8 h-8 text-warm-orange mr-2 align-middle" />
                호텔 <span className="text-warm-orange">요금 안내</span>
              </h2>
              <p className="text-medium-gray text-lg">우리 아이 체중에 맞는 요금을 확인하세요.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {service.pricingTiers.map((tier) => (
                <motion.div 
                  key={tier.id} 
                  className="bg-cream rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col"
                  initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay: service.pricingTiers!.indexOf(tier) * 0.1 }} viewport={{ once: true }}
                >
                  <h3 className="font-semibold text-lg text-dark-gray mb-1">{tier.weightRange}</h3>
                  <p className="text-2xl font-bold text-warm-orange mb-2">{tier.pricePerNight}</p>
                  {tier.sevenNightDiscount && (
                    <p className="text-xs text-orange-500 bg-orange-100 px-2 py-0.5 rounded-full inline-block mx-auto">
                      {tier.sevenNightDiscount}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {service.additionalPricingInfo && (
              <motion.div 
                className="bg-cream-light rounded-xl p-6 shadow-md text-medium-gray text-sm space-y-3"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }} viewport={{ once: true }}
              >
                <h4 className="font-semibold text-dark-gray text-md mb-2">추가 안내</h4>
                <p><strong className="text-warm-orange">가족견 할인:</strong> {service.additionalPricingInfo.familyDiscount} (두 마리 이상 시, 두 번째 아이부터 적용)</p>
                <p><strong className="text-warm-orange">시간당 연장 요금:</strong> {service.additionalPricingInfo.hourlyExtension} (체크아웃 시간 이후)</p>
                <p><strong className="text-warm-orange">체크인/아웃:</strong> {service.additionalPricingInfo.checkInOutTime}</p>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* 3. 호텔 이미지 갤러리 */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-3">
                <Home className="inline-block w-8 h-8 text-warm-orange mr-2 align-middle" />
                호텔 <span className="text-warm-orange">둘러보기</span>
              </h2>
              <p className="text-medium-gray text-lg">퍼피빌 호텔의 아늑한 공간을 확인하세요.</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3] bg-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => openMedia(item.src, item.caption)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-white text-sm font-semibold drop-shadow-md">{item.caption}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize className="w-4 h-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. 후기 섹션 */}
      {service.testimonials && service.testimonials.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-3">
                <Users className="inline-block w-8 h-8 text-warm-orange mr-2 align-middle" />
                보호자 <span className="text-warm-orange">생생 후기</span>
              </h2>
            </motion.div>
            <div className="space-y-8">
              {service.testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-cream rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-4 left-4 text-yellow-400 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-medium-gray leading-relaxed italic text-md mt-8 mb-4">
                    “{testimonial.comment}”
                  </p>
                  <div className="text-sm text-right">
                    <p className="font-semibold text-dark-gray">- {testimonial.author}</p>
                    {testimonial.date && <p className="text-medium-gray/80">{testimonial.date}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. 예약 CTA 섹션 */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }} viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-warm-orange mx-auto mb-4" />
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              {service.ctaText || "우리 아이에게 최고의 휴식을 선물하세요"}
            </h2>
            <p className="text-medium-gray mb-8 text-lg">
              퍼피빌 호텔은 전문적인 케어와 함께 편안하고 안전한 환경을 제공합니다.
            </p>
            <Link href="/consultation">
              <motion.button
                className="bg-warm-orange text-white px-10 py-4 rounded-full font-semibold hover:bg-orange-500 transition-all shadow-lg text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
              >
                호텔 예약 상담하기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Media Lightbox (기존 다른 페이지와 유사하게 구성) */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedMedia} alt={selectedMediaCaption || "Selected media"} className="w-full h-auto rounded object-contain max-h-[80vh]" />
              {selectedMediaCaption && <p className="text-center py-2 text-sm text-medium-gray">{selectedMediaCaption}</p>}
              <button 
                onClick={closeMedia} 
                className="absolute top-3 right-3 bg-black/50 text-white rounded-full p-1.5 hover:bg-black/70 transition-opacity"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer (선택적, 기존 다른 페이지와 유사하게 구성 가능) */}
      <footer className="py-8 text-center bg-white border-t border-gray-200">
        <p className="text-medium-gray text-sm">&copy; {new Date().getFullYear()} 퍼피빌. All rights reserved.</p>
      </footer>
    </div>
  );
}