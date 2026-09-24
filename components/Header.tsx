"use client";

import Link from "next/link";
// Đổi lại import Search không có dấu ngoặc nhọn
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80 transition-colors">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 relative">
        {/* Nút Hamburger cho Mobile */}
        <div className="flex md:hidden">
          <MobileMenu />
        </div>

        {/* 1. Tên thương hiệu CỐ ĐỊNH Ở GÓC TRÁI */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl font-black tracking-wider text-gray-900 dark:text-white uppercase transition hover:opacity-80"
          >
            THANH WIND
          </Link>
        </div>

        {/* 2. Thanh danh mục CÂN BẰNG CHÍNH GIỮA MÀN HÌNH P.C */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600 dark:text-gray-300 absolute left-1/2 -translate-x-1/2">
          <Link href="/iphone" className="hover:text-black dark:hover:text-white transition">
            iPhone
          </Link>
          <Link href="/samsung" className="hover:text-black dark:hover:text-white transition">
            Samsung
          </Link>
          <Link href="/xiaomi" className="hover:text-black dark:hover:text-white transition">
            Xiaomi
          </Link>

          {/* Menu thả xuống Khác */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-black dark:hover:text-white transition">
              Khác
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden w-36 rounded-xl border border-gray-100 bg-white p-2 shadow-lg group-hover:block dark:border-gray-800 dark:bg-gray-800">
              <Link href="/vivo" className="block rounded-lg px-3 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                Vivo
              </Link>
              <Link href="/oppo" className="block rounded-lg px-3 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                OPPO
              </Link>
              <Link href="/honor" className="block rounded-lg px-3 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                Honor
              </Link>
              <Link href="/huawei" className="block rounded-lg px-3 py-2 text-xs hover:bg-gray-50 dark:hover:bg-gray-700/50">
                Huawei
              </Link>
            </div>
          </div>
        </nav>

        {/* 3. Cụm công cụ CỐ ĐỊNH Ở GÓC PHẢI */}
        <div className="flex items-center gap-3">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}