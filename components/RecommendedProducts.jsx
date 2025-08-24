"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecommendedProducts({ limit = 15 }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${apiUrl}/products?limit=${limit}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(err.message);
      }
    };

    fetchProducts();
  }, [limit, apiUrl]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!products.length) return <div>Loading products...</div>;

  return (
    <div className="space-y-6 mt-10 mb-10 p-4">
      <h2 className="text-2xl font-bold">Recommended For You</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={4}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} badgeText="Best Seller" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
