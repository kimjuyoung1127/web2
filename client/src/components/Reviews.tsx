import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "호두 보호자님",
    petName: "호두",
    petBreed: "요크셔테리어",
    service: "유치원",
    rating: 5,
    comment: " 체계적인 유치원 교육프로그램과 보호자를 위한 활동사진, 알림장 서비스, 직원분들의 세심한 서비스 마인드, 맞춤 스타일링 미용서비스, 훈련사님의 전문성과 디테일한 케어까지 최고입니다! ",
    avatar: "유치원"
  },
  {
    name: "핀핀이 보호자님",
    petName: "핀핀이",
    petBreed: "말티즈",
    service: "미용 서비스",
    rating: 5,
    comment: "아이들 데리고 오고 일년째 모든 미용 맡기고 있어요! 미용 실장님에게 항상 하는 말이 “추천해주세요!😊” 인데 한 번도 실망한 적 없어요! 모든 미용이 진짜 너무너무 마음에 들어요! 진짜 인스타그램에 나오는 스타 강쥐들보다 스타일 더 좋은 강쥐가 됐어요 🐶 특히, 스타일도 마음에 드는데 강아지들이 미용실 다녀오고 스트레스 받거나 기 죽는 모습이 없어서 그게 제일 안심입니다 😊만약 미용실 가려고 하면 낑낑거리거나 떨면 신경쓰였을텐데 미용 전, 후 완죤 깨발랄! 항상 최선을 다해주셔서 감사해요 실장님 💖  앞으로도 잘 부탁드려요!",
    avatar: "미용"
  },
  {
    name: "꼬미 엄마",
    petName: "꼬미",
    petBreed: "치와와",
    service: "호텔 서비스",
    rating: 5,
    comment: "분리불안이 있어서 호텔링을 잘 안맡기려고 하는편인데 어쩔 수 없이 1박2일 호텔링 맡겼습니다. 워낙 분리불안이 심한 아이라 호텔링 맡기고도 계속 걱정했는데 선생님께서 틈틈히 사진이랑 영상 보내주시고 잘 지내고 있다고 말씀해주시고, 불편해서 그런지 저녁밥도 거른 저희 강아지 걱정해주시면서 아침에 사료에 간식 섞어서 숟가락으로 떠먹여 주는 영상보고 너무 감동했습니다🥹🥹 호텔링으로 하루 묵고 강아지가 아닌 키우는 강아지처럼 옆에서 계속 공놀이 해주고 보살펴주신게 느껴져서 너무 감사했습니다! 구름이도 선생님들이랑 친해졌는지 집가기 전까지 공 던져달라고 달려가는 모습보고 다음에 또 호텔링 맡길 일이 있다면 무조건 퍼피빌이다!!라고 생각했어요 ㅎㅎ 자주 놀러갈게요😆😆",
    avatar: "호텔"
  },
  {
    name: "라온이 보호자님",
    petName: "라온이",
    petBreed: "말티즈",
    service: "데이케어",
    rating: 5,
    comment: "데이케어를 처음 받은건데 너무너무 만족스러웠어요!! 걱정할까봐 사진도 많이 보내주시고 라온이도 활짝 웃으며 신나게 뛰어놀다 왔어요. 퍼피빌 짱! 애견카페로만 와봤는데 더더더 번창했음 좋겠어용",
    avatar: "케어"
  }
];

const beforeAfterData = [
  {
    title: "꽁지의 자신감 변화",
    description: "체계화된 유치원 프로그램으로 자신감 100% 강아지로 성장",
    beforeImage: "/images/reviews/1.jpg",
    afterImage: "/images/reviews/2.jpg"
  },
  {
    title: "후추의 자신감 충전",
    description: "조심성 많던 강아지에서 대담한 강아지로 성장",
    beforeImage: "/images/reviews/3.jpg",
    afterImage: "/images/reviews/4.jpg"
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
                      className="w-full h-48 object-cover rounded-lg mb-2" 
                    />
                    <span className="text-sm font-semibold text-medium-gray">BEFORE</span>
                  </div>
                  <div className="text-center">
                    <img 
                      src={item.afterImage} 
                      alt="훈련 후" 
                      className="w-full h-48 object-cover rounded-lg mb-2" 
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
