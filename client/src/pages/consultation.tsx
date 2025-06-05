import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, PawPrint, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
  "사회화 훈련",
  "종합 상담"
];

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00"
];

const petBreeds = [
  "포메라니안", "말티즈", "치와와", "요크셔테리어", "푸들",
  "시츄", "페키니즈", "비숑프리제", "파피용", "기타"
];

const petAges = [
  "3개월 미만", "3-6개월", "6개월-1년", "1-2년", 
  "2-5년", "5-8년", "8년 이상"
];

export default function Consultation() {
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

  const createConsultationMutation = useMutation({
    mutationFn: async (data: ConsultationFormData) => {
      const response = await apiRequest("POST", "/api/consultations", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "상담 신청이 완료되었습니다!",
        description: "24시간 내에 담당자가 연락드리겠습니다.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "오류가 발생했습니다",
        description: "다시 시도해주시거나 전화로 문의해주세요.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ConsultationFormData) => {
    createConsultationMutation.mutate(data);
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
              <Card className="h-fit sticky top-8">
                <CardHeader>
                  <CardTitle className="text-warm-orange">연락처 정보</CardTitle>
                  <CardDescription>
                    전화나 이메일로도 상담 받으실 수 있습니다
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-warm-orange mr-3" />
                    <div>
                      <p className="font-semibold">전화 상담</p>
                      <p className="text-medium-gray">02-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-warm-orange mr-3" />
                    <div>
                      <p className="font-semibold">이메일 문의</p>
                      <p className="text-medium-gray">hello@puppyville.co.kr</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-warm-orange mr-3" />
                    <div>
                      <p className="font-semibold">운영 시간</p>
                      <p className="text-medium-gray">평일 09:00 - 19:00</p>
                      <p className="text-medium-gray">토요일 09:00 - 17:00</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3 text-dark-gray">빠른 서비스 안내</h4>
                    <ul className="space-y-2 text-sm text-medium-gray">
                      <li>• 24시간 내 연락 보장</li>
                      <li>• 무료 초기 상담</li>
                      <li>• 방문 상담 가능</li>
                      <li>• 맞춤 프로그램 제안</li>
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
                          disabled={createConsultationMutation.isPending}
                        >
                          {createConsultationMutation.isPending ? "상담 신청 중..." : "상담 신청하기"}
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