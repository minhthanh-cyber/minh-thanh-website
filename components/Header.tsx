"use client";

import { useState } from "react";
import Link from "next/link";
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
  const navLinkClass = (path: string) =>
    "block rounded-xl px-3 py-2 text-sm font-semibold transition-colors hover:bg-black/5 dark:hover:bg-white/10";

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80 transition-colors">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Nút Hamburger cho Mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              <MenuIcon className="h-[18px] w-[18px]" />
            </button>
          </div>

          {/* 1. Tên thương hiệu & Menu danh mục */}
          <div className="flex flex-1 items-center gap-8">
            <Link
              href="/"
              className="text-xl font-black tracking-wider text-gray-900 dark:text-white uppercase transition hover:opacity-80"
            >
              THANH WIND
            </Link>

            <nav className="hidden flex-1 items-center gap-1 md:flex">
              <Link href="/iphone" className={navLinkClass("/iphone")}>
                iPhone
              </Link>
              <Link href="/samsung" className={navLinkClass("/samsung")}>
                Samsung
              </Link>
              <Link href="/xiaomi" className={navLinkClass("/xiaomi")}>
                Xiaomi
              </Link>

              <div className="group relative">
                <Link
                  href="/khac"
                  className={`inline-flex items-center gap-1 ${navLinkClass("/khac")}`}
                >
                  Khác
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full mt-2 min-w-[170px] -translate-y-1 rounded-2xl border border-black/[0.08] bg-white/70 p-2 opacity-0 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-[#2B2B2B]/70">
                  {KHAC_BRANDS.map((b) => (
                    <Link
                      key={b.slug}
                      href={`/khac/${b.slug}`}
                      className="block rounded-xl px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Cụm công cụ bên phải */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Tìm kiếm"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                <SearchIcon className="h-[17px] w-[17px]" />
              </button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Các thành phần bổ trợ Modal */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}