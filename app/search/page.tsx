"use client";

import { useState } from "react";
import { phones } from "@/data/phones";
import PhoneGrid from "@/components/PhoneGrid";
import { SearchIcon } from "@/components/icons";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const list = q
    ? phones.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      )
    : phones;

  return (
    <section className="pb-16 pt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Tìm kiếm thiết bị</h1>
      </div>

      <div className="mb-8 flex max-w-[520px] items-center gap-2.5 rounded-full border border-black/[0.08] bg-white/60 px-5 py-3.5 shadow-sm backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-[#2B2B2B]/60">
        <SearchIcon className="h-[17px] w-[17px] shrink-0 text-black/50 dark:text-white/50" />
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm iPhone, Samsung, Xiaomi..."
          className="flex-1 bg-transparent text-[15.5px] outline-none placeholder:text-black/40 dark:placeholder:text-white/40"
        />
      </div>

      <PhoneGrid phones={list} />
    </section>
  );
}
