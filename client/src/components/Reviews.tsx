import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "복실이 엄마",
    petName: "복실",
    petBreed: "포메라니안",
    service: "켄넬 교육",
    rating: 5,
    comment: "복실이가 퍼피빌에 다닌 후로 정말 많이 달라졌어요. 다른 강아지들과 잘 어울리고, 집에서도 훨씬 차분해졌답니다. 특히 피트니스 프로그램 덕분에 건강도 좋아졌어요!",
    avatar: "복"
  },
  {
    name: "몽이 아빠",
    petName: "몽이",
    petBreed: "말티즈",
    service: "미용 서비스",
    rating: 5,
    comment: "전문적인 미용 서비스에 감동했습니다. 몽이의 털 상태를 꼼꼼히 체크해주시고, 견종에 맞는 스타일로 예쁘게 만들어주셔서 너무 만족해요. 직원분들도 정말 친절하세요.",
    avatar: "몽"
  },
  {
    name: "꼬미 엄마",
    petName: "꼬미",
    petBreed: "치와와",
    service: "호텔 서비스",
    rating: 5,
    comment: "출장이 많은 저에게 퍼피빌의 호텔 서비스는 정말 든든한 존재예요. 꼬미가 스트레스받지 않고 즐겁게 지낼 수 있어서 안심하고 맡길 수 있어요. 24시간 케어 서비스 최고!",
    avatar: "꼬"
  }
];

const beforeAfterData = [
  {
    title: "바둑이의 피트니스 변화",
    description: "3개월간의 전문 피트니스 프로그램으로 건강한 체중과 근육량을 되찾았습니다.",
    beforeImage: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    afterImage: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  },
  {
    title: "초코의 사회화 성공",
    description: "켄넬 교육과 사회화 프로그램을 통해 자신감 넘치는 반려견으로 변화했습니다.",
    beforeImage: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    afterImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            보호자님들의 <span className="text-warm-orange">진심 후기</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            퍼피빌과 함께한 특별한 변화를 경험해보세요
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-cream rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">{review.avatar}</span>
                </div>
                <div>
                  <h4 className="font-bold text-dark-gray">{review.name}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-medium-gray leading-relaxed mb-4 italic">
                "{review.comment}"
              </p>
              <div className="text-sm text-medium-gray">
                <span className="font-semibold">{review.petName}</span> · {review.petBreed} · {review.service}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Section */}
        <motion.div
          className="bg-gradient-to-r from-soft-mint/20 to-warm-orange/20 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-dark-gray mb-12">
            <span className="text-warm-orange">Before & After</span> 변화의 순간들
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <img 
                      src={item.beforeImage} 
                      alt="훈련 전" 
                      className="w-full h-32 object-cover rounded-lg mb-2" 
                    />
                    <span className="text-sm font-semibold text-medium-gray">BEFORE</span>
                  </div>
                  <div className="text-center">
                    <img 
                      src={item.afterImage} 
                      alt="훈련 후" 
                      className="w-full h-32 object-cover rounded-lg mb-2" 
                    />
                    <span className="text-sm font-semibold text-warm-orange">AFTER</span>
                  </div>
                </div>
                <h4 className="font-bold text-dark-gray mb-2">{item.title}</h4>
                <p className="text-sm text-medium-gray">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
