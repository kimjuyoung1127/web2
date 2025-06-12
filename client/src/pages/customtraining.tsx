import { motion } from "framer-motion";
import { Check, Dog, Users, ShieldCheck, Award, MapPin, Dumbbell, ChevronLeft, Youtube } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import Pricing from "@/components/Pricing";

// 강사 정보 데이터
const instructors = [
  {
    name: "김주영 트레이너",
    certification: "CSCC 국제 독피트니스 강사, 강아지 훈련사",
    experience: "경력 10년",
    specialty: "문제행동수정, 독피트니스"
  },

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
    buttonColor: "bg-warm-orange",
    // 이미지 데이터 추가
    images: [
      { url: "/images/behaviorclass/1.jpg", alt: "행동수정 클래스 이미지 1" },
      { url: "/images/behaviorclass/2.jpg", alt: "행동수정 클래스 이미지 2" }
    ],
    // 패키지 포함사항 분리
    packageIncludes: [
      "1회 60분 전문 트레이닝",
      "센터 내에서 진행, 우천 시에도 가능",
      "평생 피드백 제공"
    ],
    pricing: [
      { name: "원데이 수업", price: "70,000원" },
      { name: "4회 패키지", price: "250,000원" },
      { name: "8회 패키지", price: "400,000원" },
      { name: "12회 패키지 (추천)", price: "600,000원" },
    ]
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
    instructor: instructors[0],
    bgColor: "bg-[#F0F9F6]",
    accentColor: "text-soft-mint",
    buttonColor: "bg-soft-mint",
    // 이미지 데이터 추가
    images: [
      { url: "/images/homevisit/1.jpg", alt: "방문교육 프로그램 이미지 1" },
      { url: "/images/homevisit/2.jpg", alt: "방문교육 프로그램 이미지 2" },
      { url: "/images/homevisit/3.jpg", alt: "방문교육 프로그램 이미지 3" },
      { url: "/images/homevisit/4.jpg", alt: "방문교육 프로그램 이미지 4" },
      { url: "/images/homevisit/5.jpg", alt: "방문교육 프로그램 이미지 5" },
      { url: "/images/homevisit/6.jpg", alt: "방문교육 프로그램 이미지 6" },
    ],
    // 패키지 포함사항 분리
    packageIncludes: [
      "1회 60분 방문 트레이닝",
      "맞춤형 환경 분석 보고서",
      "가족 구성원 교육 포함"
    ],
    pricing: [
      { name: "체험 수업 (1회)", price: "100,000원" },
      { name: "4회 패키지", price: "220,000원" },
      { name: "8회 패키지", price: "400,000원" },
      { name: "12회 패키지 (추천)", price: "550,000원" },
    ]
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
    instructor: instructors[0],
    bgColor: "bg-[#FFF5EB]",
    accentColor: "text-orange-400",
    buttonColor: "bg-orange-400",
    // 유튜브 비디오 데이터 추가
    videos: [
      { id: "Jci_jS2fVf0", title: "독피트니스 연습" },
      { id: "ck_Y_r3vpTU", title: "독피트니스 운동 예시" },
      { id: "MErce5ihwAQ", title: "독피트니스 운동 예시"}
    ],
    // 패키지 포함사항 분리
    packageIncludes: [
      "1회 60분 피트니스 트레이닝",
      "체력 평가 및 맞춤 운동 계획",
      "자세교정 및 수술 후 재활"
    ],
    pricing: [
      { name: "체험 수업 (1회)", price: "50,000원" },
      { name: "4회 패키지 (추천)", price: "150,000원" },
      { name: "8회 패키지", price: "350,000원" },
      { name: "12회 패키지", price: "10000,000원" },
    ]
  }
];

// 이미지 갤러리 컴포넌트
const ImageGallery = ({ images }: { images: { url: string; alt: string; }[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
      {images.map((image, index) => (
        <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
          {image.url ? (
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <p>이미지 준비중</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// 유튜브 비디오 갤러리 컴포넌트
const VideoGallery = ({ videos }: { videos: { id: string; title: string; }[] }) => {
  return (
    <div className="space-y-4 mb-6">
      {videos.map((video, index) => (
        <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          {video.id ? (
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Youtube className="w-10 h-10 mr-2" />
              <p>비디오 준비중</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// 행동수정 클래스 컴포넌트
const BehaviorClass = ({ classData, index }: { 
  classData: { 
    bgColor: string;
    icon: JSX.Element;
    title: string;
    accentColor: string;
    shortDesc: string;
    details: string[];
    images: { url: string; alt: string; }[];
    instructor: {
      name: string;
      certification: string;
      experience: string;
      specialty: string;
    };
    buttonColor: string;
    packageIncludes: string[];
    pricing: { name: string; price: string; }[]; // pricing 타입 추가
  }, 
  index: number 
}) => {
  return (
    <section className={`py-20 ${classData.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Class Info */}
          <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center mb-4">
              {classData.icon}
              <h2 className={`font-playfair text-3xl font-bold ml-3 ${classData.accentColor}`}>
                {classData.title}
              </h2>
            </div>
            
            <p className="text-xl text-dark-gray mb-6">{classData.shortDesc}</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
              <h3 className="text-lg font-semibold text-dark-gray mb-4">프로그램 특징</h3>
              <ul className="space-y-3">
                {classData.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${classData.accentColor}`} />
                    <span className="text-medium-gray">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 이미지 갤러리 추가 */}
            <ImageGallery images={classData.images} />
            
            {/* Instructor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-center">
              <div className={`w-16 h-16 rounded-full ${classData.buttonColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-gray">{classData.instructor.name}</h3>
                <p className={`text-sm ${classData.accentColor} font-medium`}>{classData.instructor.certification}</p>
                <div className="flex flex-wrap text-sm text-medium-gray mt-1">
                  <span className="mr-3">{classData.instructor.experience}</span>
                  <span>{classData.instructor.specialty}</span>
                </div>
              </div>
            </div>
            
            <Link href="/consultation">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${classData.buttonColor} text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto`}
              >
                상담 및 예약 신청
              </motion.button>
            </Link>
          </div>
          
          {/* BehaviorClass Pricing Card (행동수정 클래스 가격) */}
          <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-dark-gray mb-6 text-center">프로그램 요금 안내</h3>
              
              <div className="space-y-4 mb-8">
                {classData.pricing.map((item, i) => (
                  <div key={i} className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-medium-gray">{item.name}</span>
                    <span className="text-lg font-semibold text-dark-gray">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-dark-gray mb-2">패키지 포함 사항</h4>
                <ul className="space-y-2">
                  {classData.packageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-4 h-4 mr-2 mt-0.5 ${classData.accentColor}`} />
                      <span className="text-sm text-medium-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 방문교육 프로그램 컴포넌트
const HomeVisitClass = ({ classData, index }: { 
  classData: {
    bgColor: string;
    icon: JSX.Element;
    title: string;
    accentColor: string;
    shortDesc: string;
    details: string[];
    images: { url: string; alt: string; }[];
    instructor: {
      name: string;
      certification: string;
      experience: string;
      specialty: string;
    };
    buttonColor: string;
    packageIncludes: string[];
    pricing: { name: string; price: string; }[]; // pricing 타입 추가
  };
  index: number;
}) => {
  return (
    <section className={`py-20 ${classData.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Class Info */}
          <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center mb-4">
              {classData.icon}
              <h2 className={`font-playfair text-3xl font-bold ml-3 ${classData.accentColor}`}>
                {classData.title}
              </h2>
            </div>
            
            <p className="text-xl text-dark-gray mb-6">{classData.shortDesc}</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
              <h3 className="text-lg font-semibold text-dark-gray mb-4">프로그램 특징</h3>
              <ul className="space-y-3">
                {classData.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${classData.accentColor}`} />
                    <span className="text-medium-gray">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 이미지 갤러리 추가 */}
            <ImageGallery images={classData.images} />
            
            {/* Instructor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-center">
              <div className={`w-16 h-16 rounded-full ${classData.buttonColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-gray">{classData.instructor.name}</h3>
                <p className={`text-sm ${classData.accentColor} font-medium`}>{classData.instructor.certification}</p>
                <div className="flex flex-wrap text-sm text-medium-gray mt-1">
                  <span className="mr-3">{classData.instructor.experience}</span>
                  <span>{classData.instructor.specialty}</span>
                </div>
              </div>
            </div>
            
            <Link href="/consultation">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${classData.buttonColor} text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto`}
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
                  <span className="text-medium-gray"> 원데이 수업</span>
                  <span className="text-lg font-semibold text-dark-gray">100,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">4회 패키지 (추천)</span>
                  <span className="text-lg font-semibold text-dark-gray">350,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">8회 패키지</span>
                  <span className="text-lg font-semibold text-dark-gray">700,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">12회 패키지 </span>
                  <span className="text-lg font-semibold text-dark-gray">1,000,000원</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-dark-gray mb-2">패키지 포함 사항</h4>
                <ul className="space-y-2">
                  {classData.packageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-4 h-4 mr-2 mt-0.5 ${classData.accentColor}`} />
                      <span className="text-sm text-medium-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 독피트니스 PT 컴포넌트
const FitnessClass = ({ classData, index }: { 
  classData: {
    bgColor: string;
    icon: JSX.Element;
    title: string;
    accentColor: string;
    shortDesc: string;
    details: string[];
    videos: { id: string; title: string; }[];
    instructor: {
      name: string;
      certification: string;
      experience: string;
      specialty: string;
    };
    buttonColor: string;
    packageIncludes: string[];
    pricing: { name: string; price: string; }[]; // pricing 필드 추가
  };
  index: number;
}) => {
    
  return (
    <section className={`py-20 ${classData.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Class Info */}
          <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="flex items-center mb-4">
              {classData.icon}
              <h2 className={`font-playfair text-3xl font-bold ml-3 ${classData.accentColor}`}>
                {classData.title}
              </h2>
            </div>
            
            <p className="text-xl text-dark-gray mb-6">{classData.shortDesc}</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
              <h3 className="text-lg font-semibold text-dark-gray mb-4">프로그램 특징</h3>
              <ul className="space-y-3">
                {classData.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${classData.accentColor}`} />
                    <span className="text-medium-gray">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 유튜브 비디오 갤러리 추가 */}
            <VideoGallery videos={classData.videos} />
            
            {/* Instructor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-center">
              <div className={`w-16 h-16 rounded-full ${classData.buttonColor} flex items-center justify-center mr-4 flex-shrink-0`}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-dark-gray">{classData.instructor.name}</h3>
                <p className={`text-sm ${classData.accentColor} font-medium`}>{classData.instructor.certification}</p>
                <div className="flex flex-wrap text-sm text-medium-gray mt-1">
                  <span className="mr-3">{classData.instructor.experience}</span>
                  <span>{classData.instructor.specialty}</span>
                </div>
              </div>
            </div>
            
            <Link href="/consultation">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`${classData.buttonColor} text-white py-3 px-8 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all w-full md:w-auto`}
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
                  <span className="text-medium-gray">원데이 수업</span>
                  <span className="text-lg font-semibold text-dark-gray">50,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">4회 패키지 (추천) </span>
                  <span className="text-lg font-semibold text-dark-gray">150,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">8회 패키지</span>
                  <span className="text-lg font-semibold text-dark-gray">350,000원</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                  <span className="text-medium-gray">12회 패키지 (추천)</span>
                  <span className="text-lg font-semibold text-dark-gray">400,000원</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-dark-gray mb-2">패키지 포함 사항</h4>
                <ul className="space-y-2">
                  {classData.packageIncludes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`w-4 h-4 mr-2 mt-0.5 ${classData.accentColor}`} />
                      <span className="text-sm text-medium-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-dark_gray mb-4">
              퍼피빌 맞춤 클래스
            </h1>
            <p className="text-xl text-dark-gray/90 max-w-2xl mx-auto">
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
              퍼피빌의 모든 클래스는 전문 자격을 갖춘 트레이너가 진행합니다. 각 반려견의 특성과 환경을 고려한 맞춤형 접근으로 효과적인 교육 결과를 제공합니다.
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

      {/* 각 클래스 섹션을 분리된 컴포넌트로 렌더링 */}
      <BehaviorClass 
        classData={{
          bgColor: classes[0].bgColor,
          icon: classes[0].icon,
          title: classes[0].title,
          accentColor: classes[0].accentColor,
          shortDesc: classes[0].shortDesc,
          details: classes[0].details,
          images: classes[0].images || [],
          instructor: classes[0].instructor,
          buttonColor: classes[0].buttonColor,
          packageIncludes: classes[0].packageIncludes,
          pricing: classes[0].pricing // 행동수정 클래스 가격 정보 전달
        }} 
        index={0} 
      />
      <HomeVisitClass 
        classData={{
          bgColor: classes[1].bgColor,
          icon: classes[1].icon,
          title: classes[1].title,
          accentColor: classes[1].accentColor,
          shortDesc: classes[1].shortDesc,
          details: classes[1].details,
          images: classes[1].images || [],
          instructor: classes[1].instructor,
          buttonColor: classes[1].buttonColor,
          packageIncludes: classes[1].packageIncludes,
          pricing: classes[1].pricing // 방문교육 프로그램 가격 정보 전달
        }} 
        index={1} 
      />
            
      <FitnessClass
        classData={{
          bgColor: classes[2].bgColor,
          icon: classes[2].icon,
          title: classes[2].title,
          accentColor: classes[2].accentColor,
          shortDesc: classes[2].shortDesc,
          details: classes[2].details,
          videos: classes[2].videos || [],
          instructor: classes[2].instructor,
          buttonColor: classes[2].buttonColor,
          packageIncludes: classes[2].packageIncludes,
          pricing: classes[2].pricing // 피트니스 클래스 가격 정보 전달
        }} 
        index={2}
      />
      
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