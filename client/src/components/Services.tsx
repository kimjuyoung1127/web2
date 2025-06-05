import { motion } from "framer-motion";
import { GraduationCap, Zap, Scissors, Bed, Clock, Coffee, Users, Heart } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: GraduationCap,
    title: "켄넬 교육",
    description: "올바른 생활 습관과 사회화 교육",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-soft-mint"
  },
  {
    icon: Zap,
    title: "피트니스",
    description: "건강한 체력 관리와 운동 프로그램",
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-warm-orange"
  },
  {
    icon: Scissors,
    title: "미용 & 목욕",
    description: "전문 미용사의 섬세한 케어",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-warm-orange"
  },
  {
    icon: Bed,
    title: "호텔 & 데이케어",
    description: "안전하고 편안한 숙박 서비스",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-soft-mint"
  },
  {
    icon: Clock,
    title: "데이케어",
    description: "종일 안심하고 맡길 수 있는 돌봄",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-warm-orange"
  },
  {
    icon: Coffee,
    title: "카페",
    description: "반려견과 함께 즐기는 편안한 공간",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-soft-mint"
  },
  {
    icon: Users,
    title: "독피트니스 클래스",
    description: "그룹별 맞춤 트레이닝 프로그램",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-warm-orange"
  },
  {
    icon: Heart,
    title: "사회화 훈련",
    description: "다른 강아지들과의 건강한 관계 형성",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    color: "bg-soft-mint"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            퍼피빌의 <span className="text-warm-orange">특별한 서비스</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            우리 아이에게 맞는 최고의 케어 프로그램을 제공합니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="flip-card h-80"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flip-card-inner">
                  {/* Front of card */}
                  <div className={`flip-card-front ${service.color} p-8 flex flex-col items-center justify-center text-center shadow-xl text-white`}>
                    <IconComponent className="w-16 h-16 mb-4" />
                    <h3 className="font-playfair text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="flip-card-back overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white w-full">
                        <h3 className="font-playfair text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-sm mb-4">{service.description}</p>
                        <Link href="/consultation">
                          <button className="bg-warm-orange px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition-all">
                            자세히 보기
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
