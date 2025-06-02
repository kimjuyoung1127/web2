import { motion } from "framer-motion";
import { Heart, Zap, Shield, Award, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "무리 없는 사회화",
    description: "소형견의 특성을 고려한 단계별 사회화 프로그램으로 스트레스 없는 교육을 제공합니다."
  },
  {
    icon: Zap,
    title: "전문 피트니스",
    description: "소형견에 맞는 운동 강도와 프로그램으로 건강한 체력 관리를 도와드립니다."
  },
  {
    icon: Shield,
    title: "안전 관리 시스템",
    description: "24시간 CCTV 모니터링과 전문 수의사 협진 시스템으로 안전을 보장합니다."
  }
];

const staff = [
  {
    name: "김미용 원장",
    position: "수석 미용사",
    experience: "15년 경력",
    description: "15년 경력의 전문 미용사로 견종별 특성을 고려한 맞춤 미용 서비스를 제공합니다.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    credentials: [
      "반려동물 미용 자격증 보유",
      "스트레스 프리 미용 전문",
      "소형견 미용 1000+ 케이스 경험"
    ]
  },
  {
    name: "박훈련 코치",
    position: "수석 트레이너",
    experience: "12년 경력",
    description: "동물행동학 전공으로 과학적인 접근을 통한 효과적인 훈련 프로그램을 진행합니다.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    credentials: [
      "동물행동학 석사 학위",
      "반려동물 행동교정 전문가",
      "소형견 특화 훈련 프로그램 개발"
    ]
  },
  {
    name: "이건강 수의사",
    position: "협진 수의사",
    experience: "10년 경력",
    description: "소형견 전문 수의사로 건강 상태 체크와 응급 상황 대응을 담당합니다.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    credentials: [
      "수의사 면허 보유",
      "소형견 전문 진료",
      "응급의료 인증"
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            퍼피빌만의 <span className="text-warm-orange">특별함</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            소형견 전문 케어 센터로서 차별화된 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="퍼피빌 시설" 
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-bold text-dark-gray mb-6">
              <span className="text-warm-orange">소형견 전문</span> 케어 시스템
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-gray mb-2">{feature.title}</h4>
                      <p className="text-medium-gray">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Staff Introduction */}
        <motion.div
          className="bg-cream rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-dark-gray mb-12">
            전문가와 함께하는 <span className="text-warm-orange">케어 서비스</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                />
                <h4 className="font-bold text-dark-gray mb-2">{member.name}</h4>
                <p className="text-warm-orange font-semibold mb-2">{member.position}</p>
                <p className="text-sm text-medium-gray mb-4">{member.description}</p>
                
                <div className="space-y-2">
                  {member.credentials.map((credential, credIndex) => (
                    <div key={credIndex} className="flex items-center text-sm text-medium-gray">
                      <Star className="w-4 h-4 text-warm-orange mr-2" />
                      <span>{credential}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
