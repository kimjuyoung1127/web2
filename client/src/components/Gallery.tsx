import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const galleryImages = [
  {
    src: "/images/gallery/1.jpg",
    alt: "강아지들이 함께 노는 모습갤러리 이미지 1", // alt 속성에 의미있는 설명을 추가하는 것이 좋습니다.
    // height: "h-64" // height 속성 제거
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "갤러리 이미지 2",
    // height: "h-80" // height 속성 제거
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "갤러리 이미지 3",
    // height: "h-72" // height 속성 제거
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "",
    height: "h-68"
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "",
    height: "h-72"
  },
  {
    src: "/images/gallery/7.jpg",
    alt: "",
    height: "h-60"
  },
  {
    src: "/images/gallery/8.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/9.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/10.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/11.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/12.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/13.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/14.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/15.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/16.jpg",
    alt: "",
    height: "h-64"    
  },
  {
    src: "/images/gallery/17.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/18.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/19.jpg",
    alt: "",
    height: "h-64"
  },  
  {
    src: "/images/gallery/20.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/21.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/22.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/23.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/24.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/25.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/26.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/27.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/28.jpg",
    alt: "",
    height: "h-64"
  },
  {
    src: "/images/gallery/29.jpg",
    alt: "",
    // height: "h-64" // height 속성 제거
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            <span className="text-warm-orange">행복한 순간들</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            퍼피빌에서 보내는 우리 아이들의 즐거운 일상을 만나보세요
          </p>
        </motion.div>

        <div className="masonry">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover rounded-2xl shadow-lg cursor-pointer`} // image.height 클래스 제거
                whileHover={{ scale: 1.02, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)}
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage}
                  alt="Gallery lightbox"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-8 h-8" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
