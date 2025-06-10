import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, PawPrint, ChevronLeft, Instagram, MessageCircle } from "lucide-react"; // Instagram, MessageCircle 추가
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const consultationSchema = z.object({
  ownerName: z.string().min(2, "이름을 입력해주세요"),
  phone: z.string().min(10, "올바른 전화번호를 입력해주세요"),
  email: z.string().email("올바른 이메일을 입력해주세요"),
  petName: z.string().min(1, "반려견 이름을 입력해주세요"),
  petBreed: z.string().min(1, "견종을 선택해주세요"),
  petAge: z.string().min(1, "나이를 선택해주세요"),
  service: z.string().min(1, "서비스를 선택해주세요"),
  preferredDate: z.string().min(1, "희망 날짜를 선택해주세요"),
  preferredTime: z.string().min(1, "희망 시간을 선택해주세요"),
  message: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

const services = [
  "켄넬 교육",
  "피트니스 프로그램",
  "미용 & 목욕",
  "호텔 서비스",
  "데이케어",
  "카페 이용",
  "독피트니스 클래스",
  "맞춤 교육 클래스",
  "종합 상담"
];

const timeSlots = [
  "8:00", "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", 
  "20:00", "21:00", "22:00"
];

const petBreeds = [
  "꼬똥 드 툴레아", "골든 리트리버", "그레이트 데인", "그레이트 피레니즈", "기슈견",
  "닥스훈트", "달마시안", "도베르만 핀셔", "라사 압소", "래브라도 리트리버",
  "러프 콜리", "로트와일러", "마스티프", "말리노이즈", "말티즈", "비숑 프리제", "말티푸", "말티폼",
  "바센지", "보더 콜리", "보르조이", "보스턴 테리어", "불 테리어",
  "불마스티프", "브리타니", "비글", "비즐라", "사모예드", "샤페이",
  "세인트 버나드", "셰퍼드", "스코티시 테리어", "스피츠", "시베리안 허스키",
  "시바견", "시츄", "아메리칸 불리", "아프간 하운드", "알래스칸 말라뮤트",
  "아이리시 세터", "아키타견", "웰시코기", "잉글리시 불도그", "잉글리시 코커 스파니엘",
  "이탈리안 그레이하운드", "잭 러셀 테리어", "진돗개", "차우차우", "치와와",
  "카네 코르소", "코카 스파니엘", "케언 테리어", "콜리", "티베탄 마스티프",
  "파라오 하운드", "파피용", "페키니즈", "포메라니안", "포인터",
  "포르투갈 워터 독", "푸들", "프렌치 불도그", "핏불 테리어", "푸숑", 
  "기타"
];

const petAges = [
  "3개월 미만", "3-6개월", "6개월-1년", "1-2년", 
  "2-5년", "5-8년", "8년 이상"
];

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzVtAa6CY5CatOw8loQOSAiOpZWVGAl2L3crNv64dO1PyZ_yWRjKGTUFtoS03brIhdu/exec";

export default function Consultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      ownerName: "",
      phone: "",
      email: "",
      petName: "",
      petBreed: "",
      petAge: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationFormData) => {
    setIsSubmitting(true);
    
    const payload = {
      name: data.ownerName,
      phone: data.phone,
      email: data.email,
      dogName: data.petName,
      breed: data.petBreed,
      age: data.petAge,
      service: data.service,
      date: data.preferredDate,
      time: data.preferredTime,
      message: data.message || "",
    };

    try {
      console.log("Submitting form data:", JSON.stringify(payload, null, 2));
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        headers: {
          // "Content-Type": "application/json", // 'no-cors' mode does not allow custom headers like Content-Type for application/json. GAS typically expects application/x-www-form-urlencoded or text/plain for simple POSTs unless CORS is fully handled.
                                                // For JSON, GAS needs to parse e.postData.contents. If sending as form data, it's simpler.
                                                // Let's try sending as text/plain which is generally safer with no-cors and how GAS often handles simple POSTs.
                                                // However, your GAS is set up for JSON.parse(e.postData.contents), so we must try to send JSON.
                                                // The 'Content-Type' header might be stripped by the browser in 'no-cors' mode, but GAS might still parse it if the body is a valid JSON string.
        },
        body: JSON.stringify(payload), // GAS doPost expects e.postData.contents for JSON
        mode: 'no-cors', 
      });

      // With 'no-cors', we cannot access response.ok or response.status or response.json()
      // We assume the request was sent if no error was thrown by fetch itself.
      console.log("Form submission request sent. Due to 'no-cors' mode, client cannot see server response.");

      toast({
        title: "상담 신청이 완료되었습니다!",
        description: "빠른 시간 내에 확인 후 연락드리겠습니다",
      });
      
      form.reset();
    } catch (error) {
      // This catch block will handle network errors or issues with the fetch call itself.
      // It will NOT catch errors from within the Google Apps Script execution when using 'no-cors'.
      console.error("Error submitting form to Google Apps Script:", error);
      if (error instanceof Error) {
        console.error("Error name:", error.name);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      
      toast({
        title: "상담 신청 중 오류가 발생했습니다",
        description: "네트워크 연결을 확인 후 다시 시도해주시거나 전화로 문의해주세요.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section className="bg-gradient-to-r from-warm-orange to-orange-400 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PawPrint className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-orange mb-4">
              상담 신청 & 예약
            </h1>
            <p className="text-xl text-orange/90 max-w-2xl mx-auto">
              우리 아이에게 맞는 최적의 프로그램을 찾기 위한 전문 상담을 받아보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-fit sticky top-8 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-warm-orange flex items-center">
                    <PawPrint className="w-6 h-6 mr-2" />
                    퍼피빌 연락처
                  </CardTitle>
                  <CardDescription>
                    궁금한 점이 있으시면 언제든지 문의해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-warm-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-gray">전화 상담</p>
                      <a href="tel:010-3749-7299" className="text-medium-gray hover:text-warm-orange transition-colors">
                        010-3749-7299
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-warm-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-gray">이메일 문의</p>
                      <a href="mailto:hello@puppyville.co.kr" className="text-medium-gray hover:text-warm-orange transition-colors">
                        hello@puppyville.co.kr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="w-5 h-5 text-warm-orange mr-3 mt-1 flex-shrink-0" /> 
                    <div>
                      <p className="font-semibold text-dark-gray">카카오톡 채널</p>
                      <a 
                        href="http://pf.kakao.com/_nCxaAn" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-medium-gray hover:text-warm-orange transition-colors"
                      >
                        퍼피빌 채널 바로가기
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Instagram className="w-5 h-5 text-warm-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-gray">인스타그램</p>
                      <a 
                        href="https://www.instagram.com/puppy__vill?igsh=eDNjeno5YW5xNnZu" // 실제 인스타그램 URL로 변경해주세요
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-medium-gray hover:text-warm-orange transition-colors"
                      >
                        @puppy__vill
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-warm-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark-gray">운영 시간</p>
                      <p className="text-medium-gray">평일 07:30 - 22:00</p>
                      <p className="text-medium-gray">주말 10:00 - 22:00</p>
                      <p className="text-medium-gray text-sm">(연중 무휴)</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-warm-orange/20">
                    <h4 className="font-semibold mb-3 text-dark-gray">빠른 서비스 안내</h4>
                    <ul className="space-y-2 text-sm text-medium-gray list-disc list-inside">
                      <li>1시간 내 연락 보장 (영업일 기준)</li>
                      <li>무료 상담 제공</li>
                      <li>방문 상담 가능 (예약 필수)</li>
                      <li>반려견 맞춤 프로그램 제안</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Consultation Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-gray flex items-center">
                    <User className="w-5 h-5 mr-2 text-warm-orange" />
                    상담 신청 정보
                  </CardTitle>
                  <CardDescription>
                    정확한 상담을 위해 아래 정보를 입력해주세요
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* 보호자 정보 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-dark-gray border-b border-warm-orange/20 pb-2">
                          보호자 정보
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="ownerName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>이름 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="이름을 입력해주세요" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>전화번호 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="010-1234-5678" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>이메일 *</FormLabel>
                              <FormControl>
                                <Input placeholder="example@email.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* 반려견 정보 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-dark-gray border-b border-warm-orange/20 pb-2">
                          반려견 정보
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="petName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>반려견 이름 *</FormLabel>
                                <FormControl>
                                  <Input placeholder="반려견 이름" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="petBreed"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>견종 *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="견종을 선택해주세요" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {petBreeds.map((breed) => (
                                      <SelectItem key={breed} value={breed}>
                                        {breed}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="petAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>나이 *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="나이를 선택해주세요" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {petAges.map((age) => (
                                    <SelectItem key={age} value={age}>
                                      {age}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* 상담 정보 */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-dark-gray border-b border-warm-orange/20 pb-2">
                          상담 정보
                        </h3>
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>관심 서비스 *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="서비스를 선택해주세요" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service}>
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="preferredDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  희망 날짜 *
                                </FormLabel>
                                <FormControl>
                                  <Input type="date" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="preferredTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  희망 시간 *
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="시간 선택" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {timeSlots.map((time) => (
                                      <SelectItem key={time} value={time}>
                                        {time}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                추가 문의사항
                              </FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="궁금한 점이나 특별히 상담받고 싶은 내용을 적어주세요"
                                  className="resize-none"
                                  rows={4}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white py-6 text-lg font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "상담 신청 중..." : "상담 신청하기"}
                        </Button>
                      </motion.div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}