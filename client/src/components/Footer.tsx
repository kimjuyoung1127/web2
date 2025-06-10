import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-warm-orange mb-4">퍼피빌</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              반려견 전문 케어 센터 퍼피빌에서<br />
              우리 아이의 건강하고 행복한 하루를 함께 만들어가세요.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/puppy__vill?igsh=eDNjeno5YW5xNnZu" className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@puppyvill?si=kbOmYq4URo9tff9d" className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-warm-orange rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-warm-orange transition-colors">기본 교육</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">독 피트니스</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">미용 & 목욕</a></li>
              <li><a href="#" className="hover:text-warm-orange transition-colors">호텔 & 데이케어</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">상담 및 문의</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-warm-orange" />
                0507-1343-7299
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-warm-orange" />
                hello@puppyville.co.kr
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-warm-orange" />
                미사강변중앙로170번길 10 제12층 제1201호 (퍼피빌)
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-warm-orange" />
                평일 7:30 - 22:00
                주말 10:30 - 22:00
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 퍼피빌. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
