"use client";

import Link from "next/link";
import { KHAC_BRANDS, MAIN_BRANDS } from "@/data/brands";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 top-[68px] z-40 flex flex-col gap-1 overflow-y-auto border-t border-black/[0.08] bg-white/70 px-6 py-5 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-200 dark:border-white/10 dark:bg-[#2B2B2B]/70 md:hidden ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      }`}
    >
      <Link
        href="/"
        onClick={onClose}
        className="border-b border-black/10 py-3.5 text-[17px] font-semibold dark:border-white/10"
      >
        Trang chủ
      </Link>
      {MAIN_BRANDS.map((b) => (
        <Link
          key={b.slug}
          href={`/${b.slug}`}
          onClick={onClose}
          className="border-b border-black/10 py-3.5 text-[17px] font-semibold dark:border-white/10"
        >
          {b.label}
        </Link>
      ))}
      <Link
        href="/khac"
        onClick={onClose}
        className="border-b border-black/10 py-3.5 text-[17px] font-semibold dark:border-white/10"
      >
        Khác
      </Link>
      <div className="flex flex-col pl-3">
        {KHAC_BRANDS.map((b) => (
          <Link
            key={b.slug}
            href={`/khac/${b.slug}`}
            onClick={onClose}
            className="py-2.5 text-[15px] font-medium text-black/60 dark:text-white/60"
          >
            {b.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
