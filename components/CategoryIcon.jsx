"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Category } from "@/data/category icone/Categoty";

function CategoryIcon() {
  // Split Category into chunks of 24 items each
  const chunkSize = 24;
  const chunks = [];
  for (let i = 0; i < Category.length; i += chunkSize) {
    chunks.push(Category.slice(i, i + chunkSize));
  }

  return (
    <section className="container m-auto mt-10">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="rounded-xl relative"
      >
        {chunks.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-6">
              {group.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Size OF Image*/}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-contain rounded-md cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}

        {/* Arrow Left && Right*/}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background: rgba(0, 0, 0, 0.4);
            padding: 12px;
            border-radius: 9999px;
            transition: all 0.3s ease;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(0, 0, 0, 0.7);
            transform: scale(1.1);
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
          .swiper-pagination-bullet {
            background: #000;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: #000;
            opacity: 1;
          }
        `}</style>
      </Swiper>
    </section>
  );
}

export default CategoryIcon;
