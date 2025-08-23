"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Panars } from "@/data/panars/Panal";

export default function Home() {
  return (
    <section className="container m-auto mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true, 
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="rounded-xl relative"
          >
              {/* Loop Paners */}
        {Panars.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
              {/* Aroow In Panar */}
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

 
          .swiper-pagination {
            bottom: 15px !important; 
          }
          .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.7);
            opacity: 1;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: white;
            width: 12px;
            height: 12px;
          }
        `}</style>
      </Swiper>

      {/* Panar Pay */}
      <div className="mt-2">
        <img
          src="/panar6.avif"
          alt="Panar"
          className="w-full h-auto object-cover rounded-xl"
        />
      </div>
    </section>
  );
}
