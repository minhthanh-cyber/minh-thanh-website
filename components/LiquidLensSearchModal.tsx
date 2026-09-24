"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { phones, Phone } from "@/data/phones";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LiquidLensSearchModal({ isOpen, onClose }: ModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPhones, setFilteredPhones] = useState<Phone[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPhones([]);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredPhones(
        phones.filter(
          (p) =>
            p.name.toLowerCase().includes(term) ||
            p.brand.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fadeIn">
      {/* Khung Popup Ống Kính Lỏng (Glassmorphism + Liquid Lens effect) */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/30 bg-white/60 p-6 shadow-2xl backdrop-blur-2xl dark:border-gray-700/50 dark:bg-gray-900/70 transition-all transform scale-100">
        
        {/* Nút đóng Popup */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-black/10 p-2 text-gray-700 transition hover:bg-black/20 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
        >
          ✕
        </button>

        {/* Ô Tìm Kiếm Kiểu Ống Kính */}
        <div className="relative mb-6 flex items-center">
          <div className="pointer-events-none absolute left-4 text-gray-400">
            {/* Icon Ống Kính / Kính Lúp */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            autoFocus
            placeholder="Nhập tên điện thoại cần tìm (vd: iPhone 17, Pro Max...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-white/40 bg-white/50 py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 shadow-inner backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800/50 dark:text-white"
          />
        </div>

        {/* Danh sách kết quả tìm kiếm */}
        <div className="max-h-80 overflow-y-auto pr-2 space-y-3">
          {searchTerm && filteredPhones.length === 0 && (
            <p className="text-center py-6 text-gray-500 dark:text-gray-400">
              Không tìm thấy thiết bị nào khớp với từ khóa "{searchTerm}"
            </p>
          )}

          {filteredPhones.map((phone) => (
            <Link
              key={phone.id}
              href={`/phone/${phone.id}`}
              onClick={onClose}
              className="flex items-center justify-between rounded-xl p-3 bg-white/40 hover:bg-white/80 dark:bg-gray-800/40 dark:hover:bg-gray-800/80 transition shadow-sm border border-white/20"
            >
              <div className="flex items-center space-x-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <Image src={phone.image} alt={phone.name} fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{phone.name}</h4>
                  <span className="text-xs uppercase text-gray-500 font-medium">{phone.brand}</span>
                </div>
              </div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Xem chi tiết →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}