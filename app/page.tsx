"use client";

import { useState } from "react";
import PhoneGrid from "@/components/PhoneGrid";
import LiquidLensSearchModal from "@/components/LiquidLensSearchModal";
import { phones } from "@/data/phones";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Hàm cuộn mượt xuống danh sách sản phẩm
  const scrollToAllPhones = () => {
    const section = document.getElementById("all-phones-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-4">
          Tra cứu điện thoại<br />nhanh, rõ ràng, không<br />rối mắt.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          Minh Thanh tổng hợp giá bán, cấu hình và thông số của các dòng điện thoại phổ biến tại Việt Nam — giúp bạn so sánh và chọn máy dễ dàng hơn.
        </p>

        {/* 2 Nút hành động */}
        <div className="flex flex-wrap gap-4">
          {/* Nút 1: Khám phá điện thoại -> Cuộn xuống danh sách */}
          <button
            onClick={scrollToAllPhones}
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
          >
            Khám phá điện thoại
          </button>

          {/* Nút 2: Tìm kiếm thiết bị -> Mở Popup Ống kính lỏng */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition backdrop-blur-md shadow-sm"
          >
            Tìm kiếm thiết bị 🔍
          </button>
        </div>
      </section>

      {/* Popup Tìm kiếm Ống kính lỏng */}
      <LiquidLensSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Danh mục nhanh (iPhone, Samsung, Xiaomi, Khác) */}
      {/* ... Giữ nguyên phần danh mục nhanh của bạn ở đây ... */}

      {/* Phần Danh Sách Tất Cả Điện Thoại */}
      <section id="all-phones-section" className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Tất cả điện thoại hiện có ({phones.length} thiết bị)
        </h2>

        {/* Lưới sản phẩm với hiệu ứng rê chuột tráng gương */}
        <PhoneGrid phones={phones} />
      </section>
    </main>
  );
}