import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Scissors, Star, X, Award, Heart, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface BeforeAfter {
  id: string;
  dogName: string;
  breed: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  ownerComment: string;
}

const beforeAfterData: BeforeAfter[] = [
  {
    id: "1",
    dogName: "몽이",
    breed: "말티즈",
    service: "전체 미용",
    beforeImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "털이 엉켜있던 몽이가 깔끔하고 예쁜 모습으로 변신했습니다.",
    ownerComment: "몽이가 이렇게 예뻐질 줄 몰랐어요! 정말 감사합니다."
  },
  {
    id: "2",
    dogName: "복실이",
    breed: "포메라니안",
    service: "부분 미용 + 목욕",
    beforeImage: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "포메라니안 특유의 풍성한 털을 살린 스타일링으로 더욱 사랑스럽게 변신했습니다.",
    ownerComment: "복실이 털이 이렇게 부드러워질 줄 몰랐어요. 향도 너무 좋아요!"
  },
  {
    id: "3",
    dogName: "치치",
    breed: "치와와",
    service: "전체 미용 + 네일케어",
    beforeImage: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "소형견 전문 케어로 치치만의 매력을 한층 더 돋보이게 했습니다.",
    ownerComment: "치치가 미용을 무서워했는데, 여기서는 편안하게 받더라고요."
  },
  {
    id: "4",
    dogName: "뽀뽀",
    breed: "요크셔테리어",
    service: "얼굴컷 + 전신미용",
    beforeImage: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "요크셔테리어의 우아한 모습을 살린 클래식한 스타일링입니다.",
    ownerComment: "뽀뽀가 진짜 귀족견 같아요. 너무 멋있어요!"
  },
  {
    id: "5",
    dogName: "코코",
    breed: "비숑프리제",
    service: "푸들컷 + 스파",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "비숑프리제의 곱슬털을 살린 귀여운 푸들컷으로 변신했습니다.",
    ownerComment: "코코가 구름같이 귀여워졌어요. 스파까지 받아서 털이 정말 부드러워요."
  },
  {
    id: "6",
    dogName: "바둑이",
    breed: "시츄",
    service: "여름컷 + 목욕",
    beforeImage: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    afterImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    description: "더운 여름을 위한 시원한 여름컷으로 건강하고 깔끔하게 변신했습니다.",
    ownerComment: "바둑이가 여름컷 받고 나서 훨씬 시원해보여요. 활동량도 늘었어요!"
  }
];

const groomingFeatures = [
  {
    icon: Scissors,
    title: "견종별 전문 케어",
    description: "각 견종의 특성을 고려한 맞춤형 미용 서비스"
  },
  {
    icon: Heart,
    title: "스트레스 프리",
    description: "반려견이 편안하게 받을 수 있는 특별한 케어 기법"
  },
  {
    icon: Shield,
    title: "프리미엄 제품",
    description: "안전하고 고급스러운 미용 제품만을 사용"
  }
];

export default function GroomingDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedBeforeAfter, setSelectedBeforeAfter] = useState<BeforeAfter | null>(null);
  const [pricingImageModalOpen, setPricingImageModalOpen] = useState<boolean>(false);
  // 실제 가격표 이미지 경로로 변경해주세요.
  const pricingImageUrl = "/images/grooming/pricing-table.jpg"; // 예시 경로

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const openBeforeAfter = (item: BeforeAfter) => {
    setSelectedBeforeAfter(item);
  };

  const openPricingImageModal = () => {
    setPricingImageModalOpen(true);
  };

  const closePricingImageModal = () => {
    setPricingImageModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-playfair font-bold text-warm-orange cursor-pointer">퍼피빌</h1>
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

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-warm-orange to-orange-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
                전문 미용 서비스
              </h1>
              <p className="text-xl text-white/90 mb-6">견종별 맞춤 케어와 스트레스 프리 미용</p>
              <p className="text-white/80 mb-8 leading-relaxed">
                15년 경력의 전문 미용사가 우리 아이의 특성을 고려한 맞춤형 미용 서비스를 제공합니다. 
                스트레스 없는 편안한 환경에서 더욱 아름답고 건강하게 변신시켜드립니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <motion.button
                    className="bg-white text-warm-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    미용 예약하기
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/xgG7BZPGZNU?rel=0"
                  title="퍼피빌 미용 서비스 소개"
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              <span className="text-warm-orange">전문가의 케어</span>
            </h2>
            <p className="text-medium-gray">15년 경력 전문 미용사의 섬세한 손길</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-dark-gray mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-medium-gray">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After Section - Main Feature */}
      <section className="py-20 bg-gradient-to-r from-soft-mint/20 to-warm-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              <span className="text-warm-orange">놀라운 변신</span> Before & After
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              전문 미용사의 마법 같은 손길로 탄생한 아름다운 변화를 만나보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openBeforeAfter(item)}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="font-playfair text-xl font-bold text-dark-gray mb-1">
                      {item.dogName}
                    </h3>
                    <p className="text-medium-gray text-sm">{item.breed} · {item.service}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <img 
                        src={item.beforeImage} 
                        alt="미용 전" 
                        className="w-full h-32 object-cover rounded-lg mb-2" 
                      />
                      <span className="text-xs font-semibold text-medium-gray bg-gray-100 px-2 py-1 rounded">BEFORE</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src={item.afterImage} 
                        alt="미용 후" 
                        className="w-full h-32 object-cover rounded-lg mb-2" 
                      />
                      <span className="text-xs font-semibold text-warm-orange bg-warm-orange/10 px-2 py-1 rounded">AFTER</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-medium-gray text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="bg-cream rounded-lg p-3">
                    <p className="text-xs text-medium-gray italic text-center">
                      "{item.ownerComment}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              <span className="text-warm-orange">미용 요금표</span>
            </h2>
            <p className="text-medium-gray">체중과 견종별 세분화된 합리적인 가격</p>
          </motion.div>

          <motion.div
            className="bg-cream rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-gray mb-2">
                상세 가격표는 이미지를 참고해주세요
              </h3>
              <p className="text-medium-gray">
                견종과 체중에 따른 정확한 가격 정보를 확인하실 수 있습니다
              </p>
            </div>
            
            {/* Pricing image holder */}
            <div 
              className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={openPricingImageModal}
            >
              <div className="w-full h-auto max-h-[600px] bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                {/* 실제 가격표 이미지로 교체 */}
                <img 
                  src={pricingImageUrl} 
                  alt="퍼피빌 미용 가격표" 
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x1000?text=가격표+이미지+준비중')}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">소형견 (5kg 미만)</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 전체미용: 80,000원~</li>
                    <li>• 부분미용: 50,000원~</li>
                    <li>• 목욕+기본케어: 35,000원~</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">중형견 (5-15kg)</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 전체미용: 120,000원~</li>
                    <li>• 부분미용: 80,000원~</li>
                    <li>• 목욕+기본케어: 60,000원~</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">특수견종</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 푸들, 비숑 등</li>
                    <li>• 털 상태에 따라 가격 상이</li>
                    <li>• 상담 후 견적 제공</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/consultation">
              <motion.button
                className="bg-warm-orange text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-warm-orange/90 transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                정확한 견적 상담받기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              <span className="text-warm-orange">미용 과정</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "상담 & 체크", description: "건강 상태 확인 및 스타일 상담" },
              { step: "2", title: "목욕 & 케어", description: "전용 샴푸로 깨끗하게 목욕" },
              { step: "3", title: "미용 & 스타일링", description: "견종별 특성을 살린 미용" },
              { step: "4", title: "마무리 & 케어", description: "네일케어 및 마무리 손질" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="font-bold text-dark-gray mb-2">{process.title}</h3>
                <p className="text-sm text-medium-gray">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before/After Detail Modal */}
      <AnimatePresence>
        {selectedBeforeAfter && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBeforeAfter(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-2">
                  {selectedBeforeAfter.dogName}의 변신
                </h3>
                <p className="text-medium-gray">{selectedBeforeAfter.breed} · {selectedBeforeAfter.service}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.beforeImage} 
                    alt="미용 전" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-medium-gray bg-gray-100 px-3 py-1 rounded-full">BEFORE</span>
                </div>
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.afterImage} 
                    alt="미용 후" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-warm-orange bg-warm-orange/10 px-3 py-1 rounded-full">AFTER</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-dark-gray mb-2">변화 포인트</h4>
                  <p className="text-medium-gray leading-relaxed">{selectedBeforeAfter.description}</p>
                </div>
                
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-bold text-dark-gray mb-2">보호자 후기</h4>
                  <p className="text-medium-gray italic">"{selectedBeforeAfter.ownerComment}"</p>
                </div>
              </div>
              
              <button
                className="absolute top-4 right-4 text-medium-gray hover:text-dark-gray transition-colors"
                onClick={() => setSelectedBeforeAfter(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}