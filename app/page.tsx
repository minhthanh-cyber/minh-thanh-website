"use client";

import { useState } from "react";
import Link from "next/link";
import PhoneGrid from "@/components/PhoneGrid";
import LiquidLensSearchModal from "@/components/LiquidLensSearchModal";
import MarqueeLogo from "@/components/MarqueeLogo";
import { phones } from "@/data/phones";

export default function HomePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const scrollToAllPhones = () => {
    const section = document.getElementById("all-phones-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      
      {/* 1. KHU VỰC HERO CĂN GIỮA */}
      <section className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight mb-6">
          Tra cứu điện thoại<br />nhanh, rõ ràng, không<br />rối mắt.
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-xl mb-8">
          Minh Thanh tổng hợp giá bán, cấu hình và thông số của các dòng điện thoại phổ biến tại Việt Nam — giúp bạn so sánh và chọn máy dễ dàng hơn.
        </p>

        {/* Nút bấm */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={scrollToAllPhones}
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition shadow-md"
          >
            Khám phá điện thoại
          </button>

          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition backdrop-blur-md shadow-sm"
          >
            Tìm kiếm thiết bị 🔍
          </button>
        </div>

        {/* 2. KHU VỰC DANH MỤC THƯƠNG HIỆU CÓ HIỆU ỨNG GƯƠNG CHẠY QUA (HOVER SHINE) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-6xl">
          
          {/* iPhone */}
          <Link
            href="/iphone"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/apple-iphone.png" alt="Apple" className="max-h-full max-w-full object-contain filter dark:invert" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "iphone" || p.brand.toLowerCase() === "apple").length} thiết bị
            </span>
          </Link>

          {/* Samsung */}
          <Link
            href="/samsung"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/samsung.png" alt="Samsung" className="max-h-full max-w-full object-contain dark:brightness-200" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "samsung").length} thiết bị
            </span>
          </Link>

          {/* Xiaomi */}
          <Link
            href="/xiaomi"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/xiaomi.png" alt="Xiaomi" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "xiaomi").length} thiết bị
            </span>
          </Link>

          {/* OPPO */}
          <Link
            href="/khac/oppo"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/oppo.png" alt="OPPO" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "oppo").length} thiết bị
            </span>
          </Link>

          {/* Vivo */}
          <Link
            href="/khac/vivo"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/vivo.png" alt="Vivo" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "vivo").length} thiết bị
            </span>
          </Link>

          {/* Honor */}
          <Link
            href="/khac/honor"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/honor.png" alt="Honor" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "honor").length} thiết bị
            </span>
          </Link>

          {/* Huawei */}
          <Link
            href="/khac/huawei"
            className="group relative overflow-hidden flex flex-col items-center justify-center p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent group-hover:animate-shine pointer-events-none" />
            <div className="h-8 w-16 flex items-center justify-center mb-2">
              <img src="/images/brands/huawei.png" alt="Huawei" className="max-h-full max-w-full object-contain" />
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              {phones.filter(p => p.brand.toLowerCase() === "huawei").length} thiết bị
            </span>
          </Link>

        </div>
      </section>

      {/* Popup Tìm kiếm Ống kính lỏng */}
      <LiquidLensSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* DẢI CHẠY LOGO NGANG */}
      <div className="my-10">
        <MarqueeLogo />
      </div>

      {/* PHẦN DANH SÁCH TẤT CẢ ĐIỆN THOẠI */}
      <section id="all-phones-section" className="pt-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
          Tất cả điện thoại hiện có ({phones.length} thiết bị)
        </h2>

        {/* Lưới sản phẩm */}
        <PhoneGrid phones={phones} />
      </section>
    </main>
  );
}