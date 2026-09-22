"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { phones } from "@/data/phones";
import PhoneImage from "./PhoneImage";
import { SearchIcon } from "./icons";

interface SearchProps {
  open: boolean;
  onClose: () => void;
}

/** Hộp thoại tìm kiếm nhanh (Liquid Glass), mở từ nút search trên Header. */
export default function Search({ open, onClose }: SearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? phones
        .filter(
          (p) =>
            p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
        )
        .slice(0, 8)
    : [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/30 pt-[12vh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-[min(620px,92vw)] rounded-[22px] border border-black/[0.08] bg-white/70 p-2.5 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#2B2B2B]/70">
        <div className="flex items-center gap-2.5 rounded-2xl px-4 py-3">
          <SearchIcon className="h-[18px] w-[18px] shrink-0 text-black/50 dark:text-white/50" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm iPhone, Samsung, Xiaomi..."
            className="flex-1 bg-transparent text-[17px] outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
          />
          <kbd className="rounded-md border border-black/10 px-1.5 py-0.5 text-[11px] text-black/50 dark:border-white/15 dark:text-white/50">
            Esc
          </kbd>
        </div>
        <div className="max-h-[52vh] overflow-y-auto p-1.5">
          {!q && (
            <p className="px-2.5 py-5 text-center text-sm text-black/50 dark:text-white/50">
              Nhập tên thiết bị để tìm kiếm.
            </p>
          )}
          {q && results.length === 0 && (
            <p className="px-2.5 py-5 text-center text-sm text-black/50 dark:text-white/50">
              Không tìm thấy &ldquo;{query}&rdquo;.
            </p>
          )}
          {results.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                onClose();
                router.push(`/phone/${p.id}`);
              }}
              className="flex w-full items-center gap-3 rounded-2xl px-2.5 py-2.5 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              <div className="h-[42px] w-[42px] shrink-0 overflow-hidden rounded-[10px] bg-black/[0.04] dark:bg-white/[0.06]">
                <PhoneImage src={p.image} alt={p.name} />
              </div>
              <div>
                <p className="text-sm font-semibold">{p.name}</p>
                <p className="text-[12.5px] text-black/50 dark:text-white/50">
                  {p.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
