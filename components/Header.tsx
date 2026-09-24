"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { KHAC_BRANDS } from "@/data/brands";
import ThemeToggle from "./ThemeToggle";
import Search from "./Search";
import MobileMenu from "./MobileMenu";
import { ChevronDownIcon, MenuIcon, SearchIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function navLinkClass(href: string) {
    const active = pathname === href;
    return `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      active
        ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
        : "text-black/60 hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
    }`;
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/60 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#2B2B2B]/60">
        <div className="mx-auto flex h-[68px] max-w-content items-center gap-7 px-6">
          <Link href="/" className="whitespace-nowrap text-xl font-extrabold tracking-tight">
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

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-black/10 transition-colors hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10 md:hidden"
            >
              <MenuIcon className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Search open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
