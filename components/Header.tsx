"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import Search from "./Search";
import { SearchIcon, MenuIcon, ChevronDownIcon } from "./icons";

// Mảng danh mục Khác
const KHAC_BRANDS = [
  { slug: "vivo", label: "Vivo" },
  { slug: "oppo", label: "OPPO" },
  { slug: "honor", label: "Honor" },
  { slug: "huawei", label: "Huawei" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hàm style cho link điều hướng
  const navLinkClass = (_path: string) =>
    "block rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-black/5 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200";

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-black/40">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* --- LOGO TRANG WEB (BẤM VÀO TỰ ĐỘNG VỀ TRANG CHỦ) --- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-transform active:scale-95"
            title="Trở về Trang chủ Thanh Wind"
          >
            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/20">
              <Image
                src="/images/logo.png"
                alt="Thanh Wind Official Logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              THANH WIND
            </span>
          </Link>

          {/* --- NAVIGATION DESKTOP --- */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link href="/iphone" className={navLinkClass("/iphone")}>
              iPhone
            </Link>
            <Link href="/samsung" className={navLinkClass("/samsung")}>
              Samsung
            </Link>
            <Link href="/xiaomi" className={navLinkClass("/xiaomi")}>
              Xiaomi
            </Link>

            {/* Dropdown Danh mục Khác */}
            <div className="group relative">
              <button
                type="button"
                className={`${navLinkClass("/khac")} flex items-center gap-1`}
              >
                <span>Khác</span>
                <ChevronDownIcon className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="w-40 rounded-2xl border border-black/10 bg-white/90 p-2 shadow-xl backdrop-blur-lg dark:border-white/10 dark:bg-neutral-900/90">
                  {KHAC_BRANDS.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/khac/${b.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* --- NÚT TÌM KIẾM, THEME TOGGLE & MENU MOBILE --- */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-xl p-2 text-gray-700 transition-colors hover:bg-black/5 dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Tìm kiếm"
            >
              <SearchIcon className="h-5 w-5" />
            </button>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-xl p-2 text-gray-700 transition-colors hover:bg-black/5 md:hidden dark:text-gray-300 dark:hover:bg-white/10"
              aria-label="Mở menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MODAL TÌM KIẾM */}
      {searchOpen && <Search onClose={() => setSearchOpen(false)} />}

      {/* MENU MOBILE */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}