import { motion } from "framer-motion";
import { Check, Dog, Users, ShieldCheck, Award, MapPin, Dumbbell, ChevronLeft } from "lucide-react";
import { Link } from "wouter";
import Pricing from "@/components/Pricing";

// 강사 정보 데이터
const instructors = [
  {
    name: "김민준 트레이너",
    certification: "반려동물행동교정사 1급",
    experience: "경력 7년",
    specialty: "문제행동 교정 전문"
  },
  {
    name: "이서연 트레이너",
    certification: "동물훈련사 자격증",
    experience: "경력 5년",
    specialty: "가정 방문 교육 전문"
  },
  {
    name: "박지훈 트레이너",
    certification: "반려동물 피트니스 전문가",
    experience: "경력 6년",
    specialty: "체력 증진 및 건강관리 전문"
  }
];

// 클래스 정보 데이터
const classes = [
  {
    id: "behavior",
    title: "행동수정 클래스",
    shortDesc: "반려견의 문제행동을 체계적으로 개선하는 맞춤형 교육",
    icon: <ShieldCheck className="w-10 h-10 text-warm-orange" />,
    details: [
      "짖음, 분리불안, 공격성 등 다양한 문제행동 개선",
      "반려견의 성격과 환경을 고려한 맞춤형 접근법",
      "보호자와 반려견의 신뢰 관계 형성에 중점",
      "과학적 행동 분석을 통한 체계적인 교육 방식"
    ],
    instructor: instructors[0],
    bgColor: "bg-[#FFF9F2]",
    accentColor: "text-warm-orange",
    buttonColor: "bg-warm-orange"
  },
  {
    id: "homevisit",
    title: "방문교육 프로그램",
    shortDesc: "반려견이 가장 편안한 환경에서 진행되는 1:1 맞춤 교육",
    icon: <MapPin className="w-10 h-10 text-soft-mint" />,
    details: [
      "반려견의 실제 생활 환경에서 진행되는 실전 교육",
      "가정 내 환경 분석 및 맞춤형 솔루션 제공",
      "보호자와 가족 구성원 모두 참여 가능한 교육 방식",
      "일상생활에 바로 적용 가능한 실용적인 훈련 방법"
    ],
    instructor: instructors[1],
    bgColor: "bg-[#F0F9F6]",
    accentColor: "text-soft-mint",
    buttonColor: "bg-soft-mint"
  },
  {
    id: "fitness",
    title: "독피트니스 PT",
    shortDesc: "반려견의 체력 증진과 건강 관리를 위한 전문 피트니스 프로그램",
    icon: <Dumbbell className="w-10 h-10 text-orange-400" />,
    details: [
      "반려견의 나이와 체형에 맞춘 맞춤형 운동 프로그램",
      "근력 강화, 유연성 향상, 체중 관리를 위한 종합 훈련",
      "전문 장비를 활용한 안전하고 효과적인 운동 지도",
      "정기적인 체력 평가와 프로그램 조정으로 최적의 결과 도출"
    ],
    instructor: instructors[2],
    bgColor: "bg-[#FFF5EB]",
    accentColor: "text-orange-400",
    buttonColor: "bg-orange-400"
  }
];

export default function CustomTraining() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-playfair font-bold text-warm-orange cursor-pointer">퍼피빌</h1>
            </Link>
            <Link href="/">
              <button className="flex items-center text-dark-gray hover:text-warm-orange transition-colors">
                <ChevronLeft className="w-4 h-4 mr-2" />
                홈으로 돌아가기
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-warm-orange to-orange-400 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Dog className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              퍼피빌 맞춤 클래스
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              반려견의 개성과 특성에 맞춘 전문 교육 프로그램으로 더 행복한 반려 생활을 만들어 드립니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-gray mb-6">
              <span className="text-warm-orange">전문가</span>와 함께하는 맞춤형 교육
            </h2>
            <p className="text-lg text-medium-gray max-w-3xl mx-auto">
              퍼피빌의 모든 클래스는 전문 자격을 갖춘 트레이너들이 진행합니다. 각 반려견의 특성과 환경을 고려한 맞춤형 접근으로 효과적인 교육 결과를 제공합니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <Award className="w-12 h-12 text-warm-orange mb-4" />
              <h3 className="text-xl font-semibold text-dark-gray mb-2">전문 자격 보유</h3>
              <p className="text-medium-gray">국내외 공인 자격증을 보유한 전문 트레이너가 교육합니다</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <Users className="w-12 h-12 text-soft-mint mb-4" />
              <h3 className="text-xl font-semibold text-dark-gray mb-2">1:1 맞춤 교육</h3>
              <p className="text-medium-gray">반려견의 성격과 특성에 맞춘 개별화된 교육을 제공합니다</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <ShieldCheck className="w-12 h-12 text-orange-400 mb-4" />
              <h3 className="text-xl font-semibold text-dark-gray mb-2">과학적 접근법</h3>
              <p className="text-medium-gray">최신 행동 심리학을 기반으로 한 과학적인 교육 방식을 적용합니다</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      {classes.map((classItem, index) => (
        <section key={classItem.id} className={`py-20 ${classItem.bgColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Class Info */}
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}}`}>
                <div className="flex items-center mb-4">
                  {classItem.icon}
                  <h2 className={`font-playfair text-3xl font-bold ml-3 ${classItem.accentColor}`}>
                    {classItem.title}
                  </h2>
                </div>
                
                <p className="text-xl text-dark-gray mb-6">{classItem.shortDesc}</p>
                
                <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
                  <h3 className="text-lg font-semibold text-dark-gray mb-4">프로그램 특징</h3>
                  <ul className="space-y-3">
                    {classItem.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${classItem.accentColor}`} />
                        <span className="text-medium-gray">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Instructor Card */}
                <div className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-center">
                  <div className={`w-16 h-16 rounded-full ${classItem.buttonColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-gray">{classItem.instructor.name}</h3>
                    <p className={`text-sm ${classItem.accentColor} font-medium`}>{classItem.instructor.certification}</p>
                    <div className="flex flex-wrap text-sm text-medium-gray mt-1">
                      <span className="mr-3">{classItem.instructor.experience}</span>
                      <span>{classItem.instructor.specialty}</span>
                    </div>
                  </div>
                </div>
                
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${classItem.buttonColor} text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto`}
                  >
                    상담 및 예약 신청
                  </motion.button>
                </Link>
              </div>
              
              {/* Pricing Card */}
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-semibold text-dark-gray mb-6 text-center">프로그램 요금 안내</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-medium-gray">체험 수업 (1회)</span>
                      <span className="text-lg font-semibold text-dark-gray">50,000원</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-medium-gray">4회 패키지</span>
                      <span className="text-lg font-semibold text-dark-gray">180,000원</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-medium-gray">8회 패키지</span>
                      <span className="text-lg font-semibold text-dark-gray">320,000원</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-medium-gray">12회 패키지 (추천)</span>
                      <span className="text-lg font-semibold text-dark-gray">450,000원</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-dark-gray mb-2">패키지 포함 사항</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className={`w-4 h-4 mr-2 mt-0.5 ${classItem.accentColor}`} />
                        <span className="text-sm text-medium-gray">1회 60분 전문 트레이닝</span>
                      </li>
                      <li className="flex items-start">
                        <Check className={`w-4 h-4 mr-2 mt-0.5 ${classItem.accentColor}`} />
                        <span className="text-sm text-medium-gray">교육 일지 및 진도 보고서</span>
                      </li>
                      <li className="flex items-start">
                        <Check className={`w-4 h-4 mr-2 mt-0.5 ${classItem.accentColor}`} />
                        <span className="text-sm text-medium-gray">WhatsApp 무제한 질문 지원</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-warm-orange to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              우리 아이에게 맞는 클래스를 찾아보세요
            </h2>
            <p className="text-xl mb-8 text-white/90">
              전문 트레이너와의 1:1 상담을 통해 반려견에게 가장 적합한 교육 프로그램을 추천해 드립니다
            </p>
            <Link href="/consultation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-warm-orange py-4 px-10 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                무료 상담 신청하기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}