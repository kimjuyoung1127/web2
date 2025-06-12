import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose }) => {
  const address = "미사강변중앙로170번길 10 제12층 제1201호 (퍼피빌)";
  const naverMapLink = "https://naver.me/5A3HzaGO";
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      // 사용자에게 복사 실패를 알릴 수 있는 로직 추가 가능
    });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={onClose} // 배경 클릭 시 닫기
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FFF6EE] p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
          >
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-warm-orange-700 mb-6 text-center">
              퍼피빌 찾아오시는 길
            </h2>

            <div className="mb-6">
              <p className="text-gray-700 mb-2 text-sm sm:text-base">주소:</p>
              <input 
                type="text" 
                value={address} 
                readOnly 
                className="w-full p-3 border border-orange-200 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-300 select-all"
                onFocus={(e) => e.target.select()} // 클릭 시 전체 선택
              />
              <button 
                onClick={handleCopyAddress}
                className="mt-3 w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md text-sm sm:text-base"
              >
                {copied ? "복사 완료 ✅" : "📋 주소 복사하기"}
              </button>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-2 text-sm sm:text-base">위치:</p>
              <div className="aspect-square w-full overflow-hidden rounded-md border border-orange-200">
                <iframe 
                  src={naverMapLink}
                  width="100%" 
                  height="100%" 
                  frameBorder="0"
                  className="block"
                  title="퍼피빌 위치"
                ></iframe>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href={naverMapLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md text-center text-sm sm:text-base"
              >
                🗺️ 네이버 지도에서 보기
              </a>
              <button 
                onClick={onClose}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md text-sm sm:text-base"
              >
                ❌ 닫기
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LocationModal;