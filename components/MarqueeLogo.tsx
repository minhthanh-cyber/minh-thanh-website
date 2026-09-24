"use client";

import { useState } from "react";

export default function MarqueeLogo() {
  const [hasError, setHasError] = useState(false);

  const items = [
    "THANH WIND OFFICIAL",
    "Tra cứu điện thoại nhanh chóng & chính xác",
    "Minh Thanh — Tra cứu cấu hình & Giá điện thoại",
  ];

  return (
    <div className="relative flex w-full overflow-hidden rounded-2xl bg-gray-50/90 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/80 py-4 shadow-md backdrop-blur-md">
      {/* Container chạy 2 dải song song để tạo hiệu ứng lặp vô hạn mượt mà */}
      <div className="flex min-w-full shrink-0 items-center justify-around gap-10 animate-marquee text-base font-bold text-gray-800 dark:text-gray-200">
        {items.map((text, index) => (
          <div key={`a-${index}`} className="flex items-center gap-4 shrink-0">
            <span className="text-gray-400 dark:text-gray-500 text-lg">•</span>
            {text === "THANH WIND OFFICIAL" ? (
              <div className="flex items-center gap-2.5">
                {!hasError ? (
                  <img
                    src="/images/logo.png"
                    alt="Thanh Wind Official Logo"
                    className="h-6 w-6 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
                    onError={() => setHasError(true)}
                  />
                ) : (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black dark:bg-white text-xs font-black text-white dark:text-black">
                    TW
                  </span>
                )}
                <span className="font-black text-gray-900 dark:text-white tracking-wider text-base">
                  THANH WIND OFFICIAL
                </span>
              </div>
            ) : (
              <span className="whitespace-nowrap">{text}</span>
            )}
          </div>
        ))}
      </div>

      {/* Dải lặp thứ 2 đệm phía sau giúp cuộn vô tận không ngắt đoạn */}
      <div
        aria-hidden="true"
        className="flex min-w-full shrink-0 items-center justify-around gap-10 animate-marquee text-base font-bold text-gray-800 dark:text-gray-200"
      >
        {items.map((text, index) => (
          <div key={`b-${index}`} className="flex items-center gap-4 shrink-0">
            <span className="text-gray-400 dark:text-gray-500 text-lg">•</span>
            {text === "THANH WIND OFFICIAL" ? (
              <div className="flex items-center gap-2.5">
                {!hasError ? (
                  <img
                    src="/images/logo.png"
                    alt="Thanh Wind Official Logo"
                    className="h-6 w-6 rounded-full object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
                    onError={() => setHasError(true)}
                  />
                ) : (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black dark:bg-white text-xs font-black text-white dark:text-black">
                    TW
                  </span>
                )}
                <span className="font-black text-gray-900 dark:text-white tracking-wider text-base">
                  THANH WIND OFFICIAL
                </span>
              </div>
            ) : (
              <span className="whitespace-nowrap">{text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}