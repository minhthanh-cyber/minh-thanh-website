"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { phones, PhoneVariant } from "@/data/phones";

export default function PhoneDetailPage({ params }: { params: { id: string } }) {
  // Tìm điện thoại theo id
  const phone = phones.find((p) => p.id === params.id);

  if (!phone) {
    notFound();
  }

  // Quản lý phiên bản bộ nhớ chọn sẵn (nếu có)
  const [selectedVariant, setSelectedVariant] = useState<PhoneVariant | null>(
    phone.variants && phone.variants.length > 0 ? phone.variants[0] : null
  );

  const displayPrice = selectedVariant ? selectedVariant.price : phone.price;

  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      {/* Nút quay lại */}
      <div className="mb-6">
        <Link
          href="/"
          className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition"
        >
          ← Quay lại danh sách
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Ảnh sản phẩm */}
        <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-800/40 p-8 rounded-3xl border border-gray-100 dark:border-gray-700/60 shadow-sm">
          <img
            src={phone.image}
            alt={phone.name}
            className="max-h-[420px] w-auto object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Thông tin chi tiết */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            {phone.brand}
          </span>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mt-1 mb-3">
            {phone.name}
          </h1>

          {/* Hiển thị giá theo phiên bản */}
          <div className="text-2xl font-bold text-red-600 dark:text-red-500 mb-6">
            {displayPrice}
          </div>

          {/* TÙY CHỌN PHIÊN BẢN BỘ NHỚ */}
          {phone.variants && phone.variants.length > 0 && (
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Chọn phiên bản bộ nhớ:
              </label>
              <div className="flex flex-wrap gap-3">
                {phone.variants.map((variant: PhoneVariant, index: number) => {
                  const isSelected = selectedVariant?.storage === variant.storage;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedVariant(variant)}
                      className={`flex flex-col items-center justify-center min-w-[110px] px-4 py-2.5 rounded-xl border text-sm transition duration-200 ${
                        isSelected
                          ? "border-red-500 bg-red-50/50 dark:bg-red-950/20 text-red-600 dark:text-red-400 font-bold shadow-sm"
                          : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-xs font-semibold">{variant.storage}</span>
                      <span className="text-xs text-red-500 dark:text-red-400 mt-1">
                        {variant.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* BẢNG THÔNG SỐ KỸ THUẬT (ĐÃ XÓA MỤC RAM) */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700/80 bg-white dark:bg-gray-800/50 shadow-sm">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700/80 font-bold text-gray-900 dark:text-white text-sm">
              Thông số kỹ thuật
            </div>
            <div className="divide-y divide-gray-100 dark:divide-gray-700/60 text-sm">
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Màn hình</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.manHinh}</span>
              </div>
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Chip</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.chip}</span>
              </div>
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Bộ nhớ</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.boNho}</span>
              </div>
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Camera</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.camera}</span>
              </div>
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Pin</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.pin}</span>
              </div>
              <div className="flex py-3 px-4">
                <span className="w-1/3 text-gray-500 dark:text-gray-400">Hệ điều hành</span>
                <span className="w-2/3 font-medium text-gray-900 dark:text-white">{phone.specs.heDieuHanh}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}