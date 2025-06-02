import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    title: "유치원 주2회권",
    subtitle: "기본 사회화 프로그램",
    price: "180,000",
    period: "원/월",
    features: [
      "주 2회 유치원 이용",
      "기본 사회화 교육",
      "건강 체크 서비스",
      "일일 활동 리포트"
    ],
    buttonColor: "bg-soft-mint",
    popular: false
  },
  {
    title: "데이케어 종일권",
    subtitle: "하루 종일 전문 케어",
    price: "280,000",
    period: "원/월",
    features: [
      "하루 종일 케어 서비스",
      "전문 피트니스 프로그램",
      "개별 맞춤 교육",
      "픽업 & 드롭 서비스"
    ],
    buttonColor: "bg-warm-orange",
    popular: true
  },
  {
    title: "미용 & 목욕",
    subtitle: "전문 미용사 케어",
    price: "80,000",
    period: "원~",
    features: [
      "견종별 맞춤 미용",
      "프리미엄 샴푸 사용",
      "네일 케어 포함",
      "귀 청소 & 구강 케어"
    ],
    buttonColor: "bg-orange-300",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            <span className="text-warm-orange">합리적인 요금</span>으로 시작하세요
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            우리 아이에게 맞는 최적의 프로그램을 선택해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 relative ${
                plan.popular ? 'bg-warm-orange text-white' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-dark-gray text-white px-6 py-2 rounded-full text-sm font-semibold">
                    POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${plan.popular ? 'bg-white' : plan.buttonColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl ${plan.popular ? 'text-warm-orange' : 'text-white'}`}>
                    {index === 0 ? '🎓' : index === 1 ? '☀️' : '✂️'}
                  </span>
                </div>
                <h3 className={`font-playfair text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-dark-gray'}`}>
                  {plan.title}
                </h3>
                <p className={`${plan.popular ? 'text-white/90' : 'text-medium-gray'}`}>
                  {plan.subtitle}
                </p>
              </div>
              
              <div className="text-center mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-warm-orange'}`}>
                  {plan.price}
                </span>
                <span className={`${plan.popular ? 'text-white/80' : 'text-medium-gray'}`}>
                  {plan.period}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${plan.popular ? 'text-white' : 'text-soft-mint'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-medium-gray'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-white text-warm-orange hover:bg-gray-100' 
                  : `${plan.buttonColor} text-white hover:opacity-90`
              }`}>
                상담 신청
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
