import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Coffee, Heart, Clock, Star, X } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MenuItem {
  category: string;
  items: {
    name: string;
    description: string;
    price: string;
    image: string;
    popular?: boolean;
  }[];
}


const menuData: MenuItem[] = [
  {
    category: "커피 & 음료",
    items: [
      {
        name: "퍼피빌 시그니처 블렌드",
        description: "특별히 블렌딩한 프리미엄 원두로 만든 시그니처 커피",
        price: "6,500원",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        popular: true
      },
      {
        name: "아메리카노",
        description: "깊고 진한 맛의 클래식 아메리카노",
        price: "4,500원",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "카페라떼",
        description: "부드러운 우유거품과 에스프레소의 조화",
        price: "5,500원",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "바닐라 라떼",
        description: "달콤한 바닐라 시럽이 들어간 라떼",
        price: "6,000원",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "아이스티",
        description: "상큼한 레몬과 허브가 들어간 아이스티",
        price: "4,000원",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "수제 레모네이드",
        description: "신선한 레몬으로 만든 상큼한 레모네이드",
        price: "5,000원",
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      }
    ]
  },
  {
    category: "디저트 & 베이커리",
    items: [
      {
        name: "마카롱 세트",
        description: "5가지 맛의 프리미엄 마카롱 세트",
        price: "12,000원",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        popular: true
      },
      {
        name: "치즈케이크",
        description: "진한 크림치즈로 만든 뉴욕 스타일 치즈케이크",
        price: "8,500원",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "크로와상",
        description: "바삭하고 고소한 버터 크로와상",
        price: "3,500원",
        image: "https://images.unsplash.com/photo-1555507036-ab794f4abb8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "시나몬롤",
        description: "달콤한 시나몬과 글레이즈가 올라간 롤",
        price: "4,500원",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      }
    ]
  },
  {
    category: "반려견 전용 간식",
    items: [
      {
        name: "펍케이크",
        description: "강아지 전용 재료로 만든 건강한 컵케이크",
        price: "3,000원",
        image: "https://images.unsplash.com/photo-1587736734049-7d4c6d9b7b86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        popular: true
      },
      {
        name: "치킨 저키",
        description: "100% 국산 닭가슴살로 만든 수제 저키",
        price: "8,000원",
        image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "고구마 칩",
        description: "무첨가 천연 고구마로 만든 바삭한 칩",
        price: "5,500원",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      },
      {
        name: "덴탈 츄",
        description: "치아 건강에 좋은 천연 덴탈 케어 간식",
        price: "6,000원",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
      }
    ]
  }
];

const cafeFeatures = [
  {
    icon: Coffee,
    title: "프리미엄 원두",
    description: "엄선된 스페셜티 원두만을 사용한 고품질 커피"
  },
  {
    icon: Heart,
    title: "반려견 친화적",
    description: "반려견이 편안하게 머물 수 있는 안전한 환경"
  },
  {
    icon: Clock,
    title: "여유로운 시간",
    description: "시간 제한 없이 편안하게 즐기는 여유로운 공간"
  }
];

export default function CafeDetail() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (src: string) => {
    setSelectedImage(src);
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
                퍼피빌 카페
              </h1>
              <p className="text-xl text-white/90 mb-6">반려견과 함께 즐기는 프리미엄 카페</p>
              <p className="text-white/80 mb-8 leading-relaxed">
                최고급 원두와 수제 디저트, 그리고 반려견을 위한 특별한 간식까지. 
                사랑하는 우리 아이와 함께 특별한 시간을 만들어보세요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <motion.button
                    className="bg-white text-warm-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    예약하기
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
                  src="https://www.youtube.com/embed/8Y3EvZ5FJV8?rel=0"
                  title="퍼피빌 카페 소개 영상"
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
              <span className="text-warm-orange">특별한 경험</span>
            </h2>
            <p className="text-medium-gray">반려견과 보호자 모두를 위한 프리미엄 서비스</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cafeFeatures.map((feature, index) => {
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

      {/* Menu Section */}
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
              <span className="text-warm-orange">메뉴</span>
            </h2>
            <p className="text-medium-gray">신선하고 건강한 재료로 만든 특별한 메뉴들</p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {menuData.map((category, index) => (
              <motion.button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === index
                    ? 'bg-warm-orange text-white shadow-lg'
                    : 'bg-white text-medium-gray hover:bg-warm-orange/10'
                }`}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.category}
              </motion.button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {menuData[selectedCategory].items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => openImage(item.image)}
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-warm-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                        인기메뉴
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-dark-gray mb-2">
                    {item.name}
                  </h3>
                  <p className="text-medium-gray text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-warm-orange">
                      {item.price}
                    </span>
                    <button className="bg-soft-mint text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-all">
                      주문하기
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
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
              <span className="text-warm-orange">카페 갤러리</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openImage(image)}
              >
                <img
                  src={image}
                  alt={`카페 갤러리 ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Info */}
      <section className="py-16 bg-gradient-to-r from-soft-mint/20 to-warm-orange/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-6">
              이용 안내
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-warm-orange mb-4">운영시간</h3>
                <div className="space-y-2 text-medium-gray">
                  <p>평일: 09:00 - 21:00</p>
                  <p>주말: 09:00 - 22:00</p>
                  <p>공휴일: 09:00 - 20:00</p>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-warm-orange mb-4">이용료</h3>
                <div className="space-y-2 text-medium-gray">
                  <p>반려견 동반 입장료: <span className="font-bold">15,000원/시간</span></p>
                  <p>음료 1잔 및 반려견 간식 포함</p>
                  <p>추가 시간: 10,000원/시간</p>
                </div>
              </div>
            </div>
            
            <Link href="/consultation">
              <motion.button
                className="bg-warm-orange text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-warm-orange/90 transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                예약 문의하기
              </motion.button>
            </Link>
          </motion.div>
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
    </div>
  );
}